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
const book2 = new Book('Green Eggs and Ham', 'Dr. Suess', '25')

console.log(book1.info + "line 17")





function addBookToLibrary(bookToAdd) {
    // do stuff here
    myLibrary.push(bookToAdd)
}

addBookToLibrary(book1);
addBookToLibrary(book2);


console.log(myLibrary)


