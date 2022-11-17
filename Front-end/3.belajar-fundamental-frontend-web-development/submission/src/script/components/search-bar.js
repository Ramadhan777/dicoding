class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector(".searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

    <style>
      .searchButton:hover{
        font-weight: bold;
      }    
    </style>
    
    <div class="d-flex" role="search">
        <input class="searchElement form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="searchButton btn btn-outline-warning bg-warning text-dark" type="submit">Search</button>
    </div>`;

    this.shadowDOM.querySelector(".searchButton").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
