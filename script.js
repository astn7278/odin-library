const myLibrary = [];

//listen for form submit, assigns user inputs to variables, creates object using Book constructor
document.getElementById("newBookForm").addEventListener("submit", function(event) { 
    event.preventDefault();
let author = document.getElementById("authorName").value;
let title = document.getElementById("bookTitle").value;
let pages = document.getElementById("pageCount").value;
let status = document.getElementById("status").checked;

let userBook = new Book(author, title, pages, status);

console.log(userBook)
})

//Object constructor takes variables, creates object, then pushes to array
function Book(author, title, pages, status) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;

  myLibrary.push(this)
}


