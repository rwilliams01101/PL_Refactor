const connection = require("../config/connection.js");

class ORM {
    constructor(connection) {
        this.connection = connection;
    }

    getAllBooks() {
        console.log('in ORM getAllBooks')
        return this.connection.query('SELECT firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId')
    }

    getOneBook(bookTitle) {
        console.log('in ORM getOneBook')
        console.log(bookTitle)
        return this.connection.query('SELECT books.id, firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId WHERE books.title=?', [bookTitle])
    }

    getBookNotes(bookTitle) {
        console.log('in ORM getBookNotes, bookTitle:  ' + bookTitle)
        return this.connection.query('SELECT notes.id, note FROM notes INNER JOIN books ON books.id = notes.bookId WHERE books.title=?', [bookTitle])
    }

    addBook(title, coverPhoto, authorId) {
        console.log('in ORM addBook')

        return this.connection.query('INSERT INTO books SET ?',
            {
                title,
                authorId,
                coverPhoto
            })
    }

    addBookNote(note, bookId) {
        console.log('in ORM addBookNote')
        return this.connection.query('INSERT INTO notes SET ?',
            {
                note,
                bookId
            })
    }

    deleteNote(noteId) {
        return this.connection.query('DELETE FROM notes WHERE id=?',
            [noteId])
    }
};

module.exports = new ORM(connection);