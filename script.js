const library = [];
const div = document.querySelector("div.grid-container");
const btn = document.querySelector("button");

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(title, author) {
  // create new book object and add to array
  const book = new Book(title, author);
  library.push(book);

  //   create new DOM elements
  const cardElement = document.createElement("div");
  const titleElement = document.createElement("p");
  const authorElement = document.createElement("p");

  // add class to card
  cardElement.classList = "card";

  // fill in text content
  titleElement.textContent = book.title;
  authorElement.textContent = book.author;

  // add new elements to DOM
  cardElement.appendChild(titleElement);
  cardElement.appendChild(authorElement);
  div.appendChild(cardElement);
}

// get user input values and send to book functions
btn.addEventListener("click", () => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  addBookToLibrary(title.value, author.value);
  title.value = "";
  author.value = "";
});

// add defaults and display in the DOM
addBookToLibrary("A Game of Thrones", "George R. R. Martin");
addBookToLibrary("The Final Empire", "Brandon Sanderson");
