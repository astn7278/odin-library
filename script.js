const myLibrary = [];

function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;

  myLibrary.push(this)
}

function addBookToLibrary() {
    
}
