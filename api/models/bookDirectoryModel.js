var mongoose = require('mongoose');

const Book = mongoose.model('Book', {
    title: {
        type: String,
        require: true,
    },
    author: {
        type: String,
    },
    pageNumber: {
        type: Number,
        require: true,
    },
})

module.exports = Book;