const library = [];
const div = document.querySelector("div.grid-container");
const btn = document.querySelector("button");

function Book(title, author, length) {
  this.title = title;
  this.author = author;
  this.length = length;
  this.isRead = false;
}

function removeBookFromLibrary(indexNum) {
  const cardElement = document.querySelector(`[data-index="${indexNum}"]`);
  // remove book from library array
  library.splice(indexNum, 1);
  // remove book from document
  cardElement.remove();
}

function addBookToLibrary(title, author, length) {
  // create new book object and add to array
  const book = new Book(title, author, length);
  library.push(book);
  const bookIndex = library.length - 1;

  //   clone template and assign elements to variables
  const templateContent = document.querySelector("#card-template").content;
  const newCard = document.importNode(templateContent, true);

  const titleElement = newCard.querySelector("p.title");
  const authorElement = newCard.querySelector("span.author");
  const lengthElement = newCard.querySelector("span.length");
  const isReadElement = newCard.querySelector("input");
  const removeButton = newCard.querySelector("button");

  // add text content
  titleElement.textContent = book.title;
  authorElement.textContent = book.author;
  lengthElement.textContent = book.length;
  removeButton.textContent = "Remove Book";

  // add new card to DOM
  div.appendChild(newCard);

  // add data attribute to card after it's been appended to the DOM
  const lastCard = div.querySelector("div.grid-container div:last-child");
  lastCard.dataset.index = bookIndex;

  // toggle isRead with checkbox
  isReadElement.addEventListener("click", () => {
    book.isRead = !book.isRead;
  });

  // remove book on button click
  removeButton.addEventListener("click", () => {
    removeBookFromLibrary(bookIndex);
  });
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
addBookToLibrary("A Game of Thrones", "George R. R. Martin", "819");
addBookToLibrary("Mistborn: The Final Empire", "Brandon Sanderson", "676");
