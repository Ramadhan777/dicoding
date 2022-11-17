const books = [];
const RENDER_EVENT = "render-book";
const SAVED_EVENT = "saved-book";
const storageKey = "BOOKSHELF";

document.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addBook();
  });
  if (isStorageExist()) {
    loadDataFromStorage();
  }
  console.log(books);
});

const generateId = () => {
  return +new Date();
};

const generateBookObject = (id, title, author, year, isCompleted) => {
  return {
    id,
    title,
    author,
    year,
    isCompleted,
  };
};

const addBook = () => {
  const textBook = document.getElementById("title").value;
  const author = document.getElementById("writer").value;
  const year = document.getElementById("year").value;
  const checkBox = document.getElementById("inputBookIsComplete");

  let isCompleted = false;
  if (checkBox.checked) {
    isCompleted = true;
  }

  const id = generateId();
  const bookObject = generateBookObject(id, textBook, author, year, isCompleted);
  books.push(bookObject);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveBook();
};

const makeBook = (bookObject) => {
  const textTitle = document.createElement("h2");
  textTitle.innerText = bookObject.title;

  const textAuthor = document.createElement("p");
  textAuthor.innerText = `Penulis : ${bookObject.author}`;

  const textYear = document.createElement("p");
  textYear.innerText = `Tahun rilis : ${bookObject.year}`;

  const textContainer = document.createElement("div");
  textContainer.append(textTitle, textAuthor, textYear);

  const container = document.createElement("div");
  container.append(textContainer);
  container.setAttribute("id", `${bookObject.id}`);
  container.classList.add("book-item");

  if (bookObject.isCompleted) {
    const undoButton = document.createElement("button");
    undoButton.innerText = "Belum Selesai Dibaca";
    undoButton.classList.add("undo-Button");

    undoButton.addEventListener("click", () => {
      undoBookFromCompleted(bookObject.id);
    });

    const trashButton = document.createElement("button");
    trashButton.innerText = "Hapus Buku";
    trashButton.classList.add("trash-Button");

    trashButton.addEventListener("click", () => {
      removeBook(bookObject.id);
    });

    const editButton = document.createElement("button");
    editButton.innerText = "Edit Buku";
    editButton.classList.add("edit-Button");

    editButton.addEventListener("click", () => {
      editBook(bookObject.id);
    });

    container.append(undoButton, trashButton, editButton);
  } else {
    const checkButton = document.createElement("button");
    checkButton.innerText = "Selesai DIbaca";
    checkButton.classList.add("check-button");

    checkButton.addEventListener("click", () => {
      addBookToCompleted(bookObject.id);
    });

    const trashButton = document.createElement("button");
    trashButton.innerText = "Hapus Buku";
    trashButton.classList.add("trash-Button");

    trashButton.addEventListener("click", () => {
      removeBook(bookObject.id);
    });

    const editButton = document.createElement("button");
    editButton.innerText = "Edit Buku";
    editButton.classList.add("edit-Button");

    editButton.addEventListener("click", () => {
      editBook(bookObject.id);
    });

    container.append(checkButton, trashButton, editButton);
  }

  return container;
};

document.addEventListener(RENDER_EVENT, () => {
  const readingBook = document.getElementById("reading");
  readingBook.innerHTML = "";

  const readBook = document.getElementById("read");
  readBook.innerHTML = "";

  for (const book of books) {
    const bookElement = makeBook(book);
    if (!book.isCompleted) {
      readingBook.append(bookElement);
    } else {
      readBook.append(bookElement);
    }
  }
});

const addBookToCompleted = (bookId) => {
  const bookTarget = findBook(bookId);

  if (bookTarget === null) return;

  bookTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveBook();
};

const undoBookFromCompleted = (bookId) => {
  const bookTarget = findBook(bookId);

  if (bookTarget === null) return;

  bookTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveBook();
};

const removeBook = (bookId) => {
  const bookTarget = findBookIndex(bookId);

  if (bookTarget === -1) return;
  books.splice(bookTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveBook();
};

const editBook = (bookId) => {
  const bookTarget = findBook(bookId);

  const title = document.getElementById("title");
  title.value = bookTarget.title;

  const writer = document.getElementById("writer");
  writer.value = bookTarget.author;

  const year = document.getElementById("year");
  year.value = bookTarget.year;

  removeBook(bookId);
};

const findBook = (bookId) => {
  for (const book of books) {
    if (book.id === bookId) {
      return book;
    }
  }
  return null;
};

const findBookIndex = (bookId) => {
  for (const index in books) {
    if (books[index].id === bookId) {
      return index;
    }
  }
  return -1;
};

const saveBook = () => {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(storageKey, parsed);
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
};

const isStorageExist = () => {
  if (typeof storaged === undefined) {
    alert("browser anda tidak mendukung web storage");
    return false;
  }
  return true;
};

document.addEventListener(SAVED_EVENT, () => {
  console.log("Data berhasil disimpan");
});

const loadDataFromStorage = () => {
  const storageData = localStorage.getItem(storageKey);
  let data = JSON.parse(storageData);

  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
};

const searchButton = document.querySelector(".btn-search");
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const searchTitle = document.getElementById("search").value.toLowerCase();
  const bookTitle = document.querySelectorAll(".book-item  h2");

  for (const book of bookTitle)
    if (book.innerText.toLowerCase().includes(searchTitle)) {
      book.parentNode.parentElement.style.display = "block";
    } else {
      book.parentNode.parentElement.style.display = "none";
    }
});
