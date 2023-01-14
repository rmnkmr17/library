let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function() {
  //   if (read === true) {
  //     return `${name} by ${author}, ${pages} pages, I have already read it`;
  //   } else {
  //     return `${name} by ${author}, ${pages} pages, not read yet`;
  //   }
  // }
}

function addBookToLibrary(name, author, pages, read) {
  let book = new Book(name, author, pages, read);
  myLibrary.push(book)
}

addBookToLibrary("Avanti, Jeeves!", "P.G. Wodehouse", 235, true)
addBookToLibrary("Davanti, Jeeves!", "P.G. Wodehouse", 265, true)


const displayBooks = () => {
  const cardContainer = document.querySelector(".card-container");
  for (let book of myLibrary) {
    const card = document.createElement("div");
    for (let key in book) {
      console.log(book[key])
      let para = document.createElement("p");
      para.classList.add("para")
      para.textContent = `${key}: ` + book[key]
      card.appendChild(para);
    }
    card.classList.add("card")
    cardContainer.appendChild(card);
  }
}

displayBooks();