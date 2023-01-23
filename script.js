let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
  let book = new Book(name, author, pages, read);
  myLibrary.push(book)
  displayBooks()
}

const displayBooks = () => {
  
  // remove divs
  const divsToRemove = document.querySelectorAll(".card");
  for (let div of divsToRemove) {
    div.remove();
  }
  
  // loop through books
  for (let book of myLibrary) {
    const cardContainer = document.querySelector(".card-container");
    const card = document.createElement("div");
    card.classList.add("card");
    cardContainer.append(card);
    
    // delete button
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("data-index", myLibrary.indexOf(book));
    deleteButton.classList.add("delete")
    deleteButton.textContent = "X";
    card.append(deleteButton);
    deleteButton.addEventListener("click", deleteBookFromLibrary);
    for (let key in book) {
      let para = document.createElement("p");
      para.classList.add(`${key}`)
      para.textContent = key.charAt(0).toLocaleUpperCase() + key.slice(1) + ": " + book[key];
      card.append(para);
    }

    
    // change status
    let changeStatusButton = document.createElement("button");
    changeStatusButton.classList.add("change-status");
    changeStatusButton.setAttribute("data-index", myLibrary.indexOf(book));
    changeStatusButton.textContent = "Change Status";
    changeStatusButton.addEventListener("click", changeStatus);
    card.append(changeStatusButton);
  }
}

function deleteBookFromLibrary() {
  const index = this.getAttribute("data-index");
  myLibrary.splice(index, 1);
  displayBooks();
}

function changeStatus() {
  let index = this.getAttribute("data-index");
  if (myLibrary[index].read === "No") {
    myLibrary[index].read = "Yes";
    displayBooks();
  } else {
    myLibrary[index].read = "No";
    displayBooks()
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

const addBook = (e) => {
  e.preventDefault()
  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  let read = document.getElementById("read");

  if (read.checked === true) {
    read = "Yes";
  } else  {
    read = "No";
  }

  if (name === "" || author === "" || pages === "") {
    return;
  }

  addBookToLibrary(name, author, pages, read);
  document.getElementById("form").reset();
  modal.close()
}

const addBookButton = document.querySelector(".add");
addBookButton.addEventListener("click", addBook)


console.log(displayBooks())