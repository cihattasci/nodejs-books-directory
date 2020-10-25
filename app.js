const express = require('express');
var mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const Book = require('./api/models/bookDirectoryModel');
const app = express();

mongoose.connect('mongodb://localhost:27017/book', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
});

app.use(express.json());

app.get('/list_all_book', (req, res) => {

    res.send('hello');
});

app.post('/save_book', (req, res) => {
    const book = new Book(req.body);

    book.save().then((book) => {
        res.send(book);
    });

    res.send(book);
    
});

app.put('/update_book', (req, res) => {

    res.send('update_book'); 
});

app.delete('/delete_book', (req, res) => {

    res.send('delete_book');
});



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});