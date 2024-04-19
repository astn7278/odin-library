const myLibrary = [];

//listen for form submit, assigns user inputs to variables, creates object using Book constructor
document
    .getElementById("newBookForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        let author = document.getElementById("authorName").value;
        let title = document.getElementById("bookTitle").value;
        let pages = document.getElementById("pageCount").value;
        let status = document.getElementById("status").checked;

        let userBook = new Book(author, title, pages, status);

        console.log(userBook);
        this.reset();
    });

//Object constructor takes variables, creates object, then pushes to array
function Book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;

    myLibrary.push(this);
}

//Opens "new book" modal with button press
document.getElementById("openModalBtn").addEventListener("click", function () {
    document.getElementById("newBookModal").classList.add("show");
});

//Closes "new book" modal with cancel button, clears form
document.getElementById("cancelButton").addEventListener("click", function () {
    document.getElementById("newBookModal").classList.remove("show");
    document.getElementById("newBookForm").reset();
});

//Closes "new book" modal by clicking outside modal, clears form
document.addEventListener("click", function (event) {
    let modal = document.getElementById("newBookModal");
    if (
        !modal.contains(event.target) &&
        !document.getElementById("openModalBtn").contains(event.target)
    ) {
        modal.classList.remove("show");
        document.getElementById("newBookForm").reset();
    }
});
