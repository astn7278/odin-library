const myLibrary = [
    {
        title: "The Giver",
        author: "Lois Lowry",
        pages: 208,
        status: "Yes"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        status: "No"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 281,
        status: "No"
    }
];

// Function to display each object in the array on the webpage
function displayBooks() {
    const booksContainer = document.getElementById("booksContainer");

    myLibrary.forEach(function(book, index) {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        bookDiv.innerHTML = `
            <h2>Book ${index + 1}</h2>
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read?</strong> ${book.status}</p>
        `;

        booksContainer.appendChild(bookDiv);
    });
}

// Call the function to display books when the page loads
document.addEventListener("DOMContentLoaded", displayBooks);


//listen for form submit, assigns user inputs to variables, creates object using Book constructor
document
    .getElementById("newBookForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        let author = document.getElementById("authorName").value;
        let title = document.getElementById("bookTitle").value;
        let pages = document.getElementById("pageCount").value;
        let status = document.getElementById("status").checked;
        if (status) {
            status = "Yes"
        } else {
            status = "No"
        }

        new Book(author, title, pages, status);

        console.log(myLibrary);
        this.reset();
        displayBooks();
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
