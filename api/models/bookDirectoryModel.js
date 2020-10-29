var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    pageNumber: Number,
}, {
    timestamps: true
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;