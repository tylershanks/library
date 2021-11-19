console.log("this is gonna be a library");



let myLibrary = [];

function Book(title, author, pages) {
    // the constructor
    this.title = title
    this.author = author
    this.pages = pages
    this.info = (title + " by " + author + ", " + pages + " pages long.");
}

const book1 = new Book('Game of Thrones', 'George RR Martin', '874')

console.log(book1.info)





function addBookToLibrary(bookToAdd) {
    // do stuff here
    myLibrary.push(bookToAdd)
}

addBookToLibrary(book1);


console.log(myLibrary)


