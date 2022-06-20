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
