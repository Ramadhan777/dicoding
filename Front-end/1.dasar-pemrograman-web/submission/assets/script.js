const jumbotron = document.querySelector(".jumbotron");
const nav = document.querySelector("nav");
const subJudul = document.querySelectorAll("h2");
const subDeskripsi = document.querySelectorAll("h3");
const footer = document.querySelector("footer");

const red = document.querySelector(".red");
red.addEventListener("click", function() {
  jumbotron.style.backgroundColor = "rgb(211, 12, 12)";
  nav.style.backgroundColor = "rgb(119, 9, 9)";
  footer.style.backgroundColor = "rgb(211, 12, 12)";
  subJudul.forEach((judul) => {
    judul.style.color = "rgb(211, 4, 4)"
  })
  subDeskripsi.forEach((judul) => {
    judul.style.color = "rgb(211, 4, 4 )"
  })
});

const blue = document.querySelector(".blue");
blue.addEventListener("click", function() {
  jumbotron.style.backgroundColor = "rgb(12, 58, 209)";
  nav.style.backgroundColor = "rgb(9, 9, 119)";
  footer.style.backgroundColor = "rgb(12, 58, 209)";
  subJudul.forEach((judul) => {
    judul.style.color = "rgb(4, 4, 211)"
  })
  subDeskripsi.forEach((judul) => {
    judul.style.color = "rgb(4, 4, 211)"
  })
});

const green = document.querySelector(".green");
green.addEventListener("click", function() {
  jumbotron.style.backgroundColor = "rgb(38, 184, 99)";
  nav.style.backgroundColor = "rgb(9, 119, 9 )";
  footer.style.backgroundColor = "rgb(38, 184, 99)";
  subJudul.forEach((judul) => {
    judul.style.color = "rgb(4, 211, 4)"
  })
  subDeskripsi.forEach((judul) => {
    judul.style.color = "rgb(4, 211, 4)"
  })
});
