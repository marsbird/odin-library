const library = [];
const div = document.querySelector("div.grid-container");

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(title, author) {
  const book = new Book(title, author);
  library.push(book);
}

function displayLibrary() {
  for (let i = 0; i < library.length; i += 1) {
    const card = document.createElement("div");
    const cardTitle = document.createElement("p");
    const cardAuthor = document.createElement("p");
    cardTitle.textContent = library[i].title;
    cardAuthor.textContent = library[i].author;
    div.appendChild(card);
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
  }
}

addBookToLibrary("A Game of Thrones", "George R. R. Martin");
addBookToLibrary("The Final Empire", "Brandon Sanderson");
displayLibrary();
