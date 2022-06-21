let myLibrary = [];

function Book() {

}

function addBookToLibrary(bookName, bookAuthor, bookPages, wasBookRead) {
    const newBook = new Book();
    newBook.bookName = bookName;
    newBook.bookAuthor = bookAuthor;
    newBook.bookPages = bookPages;
    newBook.wasBookRead = wasBookRead;

    myLibrary.push(newBook);
    console.log("BOOK ADDED!");
}

addBookToLibrary("Dune", "F Hebert", 850, true);
addBookToLibrary("I robot", "I Asimov", 350, true);
addBookToLibrary("Starship Troopers", "Heinlein", 400, true);
addBookToLibrary("Democracia, o deus que falhou", "Hayke", 500, false);

console.log(myLibrary);

function createCard(book, index) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    const bookName = document.createElement("h3");
    const bookAuthor = document.createElement("h4");
    const bookPages = document.createElement("p");
    const wasBookRead = document.createElement("p");

    bookName.innerHTML = book.bookName;
    bookAuthor.innerHTML = `Written by ${book.bookAuthor}`;
    bookPages.innerHTML = `${book.bookPages} pages`;
    wasBookRead.innerHTML = book.wasBookRead;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.dataset.index = index;
    deleteButton.addEventListener('click', e => {
        console.log(e.target.dataset.index);
        myLibrary.splice(e.target.dataset.index, 1);
        showLibrary();
    })

    cardContainer.appendChild(bookName);
    cardContainer.appendChild(bookAuthor);
    cardContainer.appendChild(bookPages);
    cardContainer.appendChild(wasBookRead);
    cardContainer.appendChild(deleteButton);

    return cardContainer;
}

function cleanInputs() {
    const inputs = document.getElementsByTagName("input");
    console.log(inputs);

    for (const input of inputs) {
        input.value = '';
        input.checked = false;
    }
}

function showLibrary() {
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    for (let i = 0; i < myLibrary.length; i++) {
        container.appendChild(createCard(myLibrary[i], i));        
    }

   /* myLibrary.forEach(book => {
        container.appendChild(createCard(book));
    }); */
}

showLibrary();

const addBookBtn = document.querySelector("#add-book");
addBookBtn.addEventListener("click", () => {
    document.getElementById("modalOne").style.display = "block";
})

let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
    btn.onclick = function () {
        let modal = btn.closest(".modal");
        modal.style.display = "none";
    };
});

window.onclick = function (event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
};

const confirmBookBtn = document.querySelector("#confirm-add");
confirmBookBtn.addEventListener("click", () => {
    document.getElementById("modalOne").style.display = "none";
    addBookToLibrary(document.getElementById("book-name").value,
                     document.getElementById("book-author").value,
                     document.getElementById("book-pages").value,
                     document.getElementById("wasBookRead").checked);
    showLibrary();
    cleanInputs();
})