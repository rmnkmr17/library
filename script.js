let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
  const book = new Book(name, author, pages, read);
  myLibrary.push(book)
  displayBooks()
  
}

const displayBooks = () => {
  
    
  const divsToRemove = document.querySelector(".card");
  if (divsToRemove !== null) {

    divsToRemove.remove();
  }
  for (let book of myLibrary) {
    const cardContainer = document.querySelector(".card-container");
    const card = document.createElement("div");
    card.classList.add("card");
    cardContainer.append(card)
    for (let key in book) {
      let para = document.createElement("p");
      para.textContent = key.charAt(0).toLocaleUpperCase() + key.slice(1) + ": " + book[key];
      card.append(para);
    }
  }
}

// Modal

const modal = document.querySelector(".modal")
const newBookButton = document.querySelector(".new-book");
const closeModalButton = document.querySelector(".close");

newBookButton.addEventListener("click", () => {
  modal.showModal()
})
closeModalButton.addEventListener("click", () => {
  modal.close();
})

// Adding book on the display

const addBook = () => {
  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;
  addBookToLibrary(name, author, pages, read);
  document.getElementById("form").reset();
}

const addBookButton = document.querySelector(".add");
addBookButton.addEventListener("click", addBook)

console.log(displayBooks())