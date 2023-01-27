const library = [];
const div = document.querySelector("div.grid-container");
const btn = document.querySelector("button");

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(title, author) {
  const book = new Book(title, author);
  library.push(book);
}

function displayLibrary() {
  // clear existing card elements
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.remove();
  });
  // for each book in library, display as a card element and add to DOM
  for (let i = 0; i < library.length; i += 1) {
    const card = document.createElement("div");
    const cardTitle = document.createElement("p");
    const cardAuthor = document.createElement("p");

    card.classList = "card";

    cardTitle.textContent = library[i].title;
    cardAuthor.textContent = library[i].author;

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    div.appendChild(card);
  }
}

// get user input values and send to book functions
btn.addEventListener("click", () => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  addBookToLibrary(title.value, author.value);
  displayLibrary();
  title.value = "";
  author.value = "";
});

// add defaults and display in the DOM
addBookToLibrary("A Game of Thrones", "George R. R. Martin");
addBookToLibrary("The Final Empire", "Brandon Sanderson");
displayLibrary();
