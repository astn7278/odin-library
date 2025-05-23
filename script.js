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

// Function to display each object in the array on the webpage. 
// Clears div before looping through array to avoid duplicates
//Button functionality that removes books or updates read status
function displayBooks() {
    const booksContainer = document.getElementById("booksContainer");

    booksContainer.innerHTML = '';

    myLibrary.forEach(function(book, index) {
        const bookDiv = document.createElement("div");  //Create main book container
        bookDiv.setAttribute('data-index', index); //Adds data attribute for reference

        booksContainer.appendChild(bookDiv);

        const bookInfoDiv = document.createElement("div"); //Create info container
        bookDiv.classList.add("book");

        bookInfoDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read?</strong> ${book.status}</p>
        `;

        bookDiv.appendChild(bookInfoDiv); //Adds the book info to div

        const bookButtonContainer = document.createElement("div");  //Create button container
        bookButtonContainer.setAttribute('id', 'bookButtonContainer')
        if (book.status === "No") { //Only display "read" button if book has not been read. Pulls index from div
            bookButtonContainer.innerHTML = `
            <input class=buttons id="removeButton" data-id="${bookDiv.dataset.index}" type="button" value="Remove"> 
            <input class=buttons id="readButton" data-id="${bookDiv.dataset.index}" type="button" value="I Read This!">
        `;
        
        } else {
        bookButtonContainer.innerHTML = `
            <input class=buttons id="removeButton" data-id="${bookDiv.dataset.index}" type="button" value="Remove">
        `;
        }

        bookDiv.appendChild(bookButtonContainer);//Adds the book div with buttons
    });

    const removeButtons = document.querySelectorAll('#bookButtonContainer #removeButton')

    removeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const bookRemove = this.closest('.book');
            bookRemove.remove(); //Removes "book" div
            const bookToRemove = (event.target.dataset.id) //Sets book to remove based on data-index
            myLibrary.splice(bookToRemove, 1);
            //console.log(event.target.dataset.id);
            //console.log(myLibrary);
            displayBooks(); //Runs to display books with updated array and index
        });
    });

    const readButtons = document.querySelectorAll('#bookButtonContainer #readButton')

    readButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const bookIndex = (this.closest('.book').dataset.index); //Retrieves index of selected book
            myLibrary[bookIndex].status = "Yes"; //Updates book object status
            //console.log(bookStatus.dataset.index);
            //console.log(myLibrary)
            displayBooks(); //Runs to display books with updated status, removes read button
        });
    });


}



// Call the function to display books when the page loads
document.addEventListener("DOMContentLoaded", displayBooks);


//Listen for form submit, assigns user inputs to variables, creates object using Book constructor
document.getElementById("newBookForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let author = document.getElementById("authorName").value;
        let title = document.getElementById("bookTitle").value;
        let pages = document.getElementById("pageCount").value;
        let status = document.getElementById("status").checked;
        if (status) {      //Converts checkbox to "yes" or "no"
            status = "Yes"
        } else {
            status = "No"
        }

        new Book(author, title, pages, status);

        this.reset(); //Resets form fields
        displayBooks(); //Displays on page
        document.getElementById("newBookModal").classList.remove("show"); //Closes modal
    });

//Object constructor takes variables, creates object, then pushes to array
/*function Book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;

    myLibrary.push(this);
}*/

class Book {
    constructor(author, title, pages, status) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.status = status;
        myLibrary.push(this)
    }
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
