const library = [];
const div = document.querySelector("div.grid-container");
const btn = document.querySelector("button");

function Book(title, author, length) {
  this.title = title;
  this.author = author;
  this.length = length;
}

function addBookToLibrary(title, author, length) {
  // create new book object and add to array
  const book = new Book(title, author, length);
  library.push(book);

  //   create new DOM elements
  const cardElement = document.createElement("div");
  const titleElement = document.createElement("p");
  const authorElement = document.createElement("p");
  const lengthElement = document.createElement("p");

  // add class to card
  cardElement.classList = "card";

  // fill in text content
  titleElement.textContent = book.title;
  authorElement.textContent = book.author;
  lengthElement.textContent = book.length;

  // add new elements to DOM
  cardElement.appendChild(titleElement);
  cardElement.appendChild(authorElement);
  cardElement.appendChild(lengthElement);
  div.appendChild(cardElement);
}

// get user input values and send to book functions
btn.addEventListener("click", (event) => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const length = document.getElementById("length");
  addBookToLibrary(title.value, author.value, length.value);
  title.value = "";
  author.value = "";
  length.value = "";

  // prevent button from submitting data to server
  event.preventDefault();
});

// add defaults
addBookToLibrary("A Game of Thrones", "George R. R. Martin", "819 pages");
addBookToLibrary(
  "Mistborn: The Final Empire",
  "Brandon Sanderson",
  "676 pages"
);
