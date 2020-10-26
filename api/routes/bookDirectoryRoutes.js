var express = require('express');
var Book = require('../models/bookDirectoryModel');

var router = express.Router();

router.get('/list_all_book', async (req, res) => {

    await Book.find({}).then(books => res.send(books)).catch(e => res.send(e));
});

router.post('/save_book', async (req, res) => {

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

router.put('/update_book', async (req, res) => {

    await Book.updateOne({title: 'Acımak'}, {title: 'Acımak', author: 'Reşat Nuri Güntekin', pageNumber: 123})
        .then(async ()=>{
            await Book.find({title: 'Acımak'})
                .then(book => res.send(book))
                .catch(e => res.send(e));
        })
        .catch(e => res.send(e));
});

router.delete('/delete_book', async (req, res) => {

    await Book.deleteOne({author: 'Goethe'})
        .then(async () => {
            await Book.find({}).then(books => res.send(books)).catch(e => res.send(e));
        });
});


module.exports = router;