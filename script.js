const myLibrary = [];

document.getElementById("newBookForm").addEventListener("submit", function(event) {
    event.preventDefault();
let author = document.getElementById("authorName").value;
let title = document.getElementById("bookTitle").value;
let pages = document.getElementById("pageCount").value;
let status = document.getElementById("status").checked;
let userBook = new Book(author, title, pages, status);

console.log(userBook)
})


function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;

  myLibrary.push(this)
}

function addBookToLibrary() {
    
}
