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
}

addBookToLibrary("Dune", "F Hebert", 850, true);
addBookToLibrary("I robot", "I Asimov", 350, true);
addBookToLibrary("Starship Troopers", "Heinlein", 400, true);
addBookToLibrary("Democracia, o deus que falhou", "Hayke", 500, false);

console.log(myLibrary);

function createCard(book){
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    const bookName = document.createElement("h3");
    const bookAuthor = document.createElement("h4");
    const bookPages = document.createElement("p");
    const wasBookRead = document.createElement("p");

    bookName.innerHTML = book.bookName;
    bookAuthor.innerHTML = book.bookAuthor;
    bookPages.innerHTML = book.bookPages;
    wasBookRead.innerHTML = book.wasBookRead;

    cardContainer.appendChild(bookName);
    cardContainer.appendChild(bookAuthor);
    cardContainer.appendChild(bookPages);
    cardContainer.appendChild(wasBookRead);

    return cardContainer;
}

function showLibrary() {
    const container = document.querySelector(".container");
    
    myLibrary.forEach(book => {
        container.appendChild(createCard(book));
    });
}

showLibrary();