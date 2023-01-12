let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if (read === true) {
      return `${name} by ${author}, ${pages} pages, I have already read it`;
    } else {
      return `${name} by ${author}, ${pages} pages, not read yet`;
    }
  }
}

const theHobbit = new Book("The Hobbit", "Tolkien", 296, false)

console.log(theHobbit.info())

function addBookToLibrary() {
  // do stuff here
}