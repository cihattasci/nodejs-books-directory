const express = require('express');
var mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const Book = require('./api/models/bookDirectoryModel');
const app = express();

mongoose.connect('mongodb+srv://cihat:cihat123.@realmcluster.kbrok.mongodb.net/test', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
});

app.use(express.json());

app.get('/list_all_book', async (req, res) => {

    await Book.find({}).then(books => res.send(books)).catch(e => res.send(e));
});

app.post('/save_book', async (req, res) => {

    const book = new Book({
        title: 'Acımak',
        author: 'Reşat Nuri Güntekin',
        pageNumber: 132
    });

    await book.save((error, result) => {
        try {
            res.send(result);
        } catch (error) {
            res.send(error);
        };
        
    })
    
});

app.put('/update_book', async (req, res) => {

    await Book.updateOne({title: 'Acımak'}, {title: 'Acımak', author: 'Reşat Nuri Güntekin', pageNumber: 123})
        .then(async ()=>{
            await Book.find({title: 'Acımak'})
                .then(book => res.send(book))
                .catch(e => res.send(e));
        })
        .catch(e => res.send(e));
});

app.delete('/delete_book', async (req, res) => {

    await Book.deleteOne({author: 'Goethe'})
        .then(async () => {
            await Book.find({}).then(books => res.send(books)).catch(e => res.send(e));
        });
});



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});