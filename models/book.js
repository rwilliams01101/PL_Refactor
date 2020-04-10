const orm = require("../config/orm.js");

class Book {
    getAllBooks() {
        return orm.getAllBooks("books")
    }
    getOneBook(bookTitle) {
        console.log('in Model, bookTitle:  ' + bookTitle)
        return orm.getOneBook(bookTitle)
    }
    getBookNotes(bookTitle) {
        console.log('in Model getBookNotes, bookTitle:  ' + bookTitle)
        return orm.getBookNotes(bookTitle)
    }
    addBook(title, coverPhoto, authorId) {
        return orm.addBook(title, coverPhoto, authorId)
    }
    addBookNote(note, bookId) {
        return orm.addBookNote(note, bookId)
    }
    deleteNote(noteId) {
        return orm.deleteNote(noteId)
    }

};

module.exports = new Book();