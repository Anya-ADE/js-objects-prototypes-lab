/*Library Management System*/

const library = {
    name: "City Library",
    books: [],
    addBook: function(title, author, isbn) {
        const newBook = {
            title: title,
            author: author,
            isbn: isbn,
        };
        this.books.push(newBook);
        console.log(`Book "${title}" added to the library.`);
    },
    findBookByTitle: function(title) {
        return this.books.find(book => book.title === title) || null;
    },
    listAllBooks: function() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`);
        });
    }
};

const universityLibrary = Object.create(library);
universityLibrary.courses = [];
universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
    this.courses.push(courseName);
    this.addBook(title, author, isbn);
    console.log(`Book "${title}" added to course "${courseName}" in the university library.`);
};

library.addBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
library.addBook("1984", "George Orwell", "9780451524935");

console.log("\nAll Books in Library:");
library.listAllBooks();

const book = library.findBookByTitle("1984");
if (book) {
    console.log(`\nFound Book - Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`);
} else {
    console.log("\nBook not found.");
}

universityLibrary.addCourseBook("Computer Science 101", "Introduction to Algorithms", "Thomas H. Cormen", "9780262033848");

console.log("\nAll Books in University Library:");
universityLibrary.listAllBooks();