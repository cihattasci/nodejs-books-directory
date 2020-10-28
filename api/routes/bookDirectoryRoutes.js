var express = require('express');
var Book = require('../models/bookDirectoryModel');

var router = express.Router();

router.get('/list_all_book', async (req, res) => {


    //sorting
    /*await Book.find({}).sort({pageNumber: -1}).exec((error, docs) => {
        if(error){
            return res.send(error);
        };
        res.send(docs);
    });*/

    //filtering
    /*var title = req.query.title; 
    var author = req.query.author;
    await Book.find({title, author}).then(books => res.send(books)).catch(e => res.send(e));*/

    //limit
    /*var limit = parseInt(req.query.limit);
    await Book.find({}).limit(limit).then(books => res.send(books)).catch(e => res.send(e));*/

    await Book.find({}).then(books => res.send(books)).catch(e => res.send(e));
});

router.post('/save_book', async (req, res) => {

    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        pageNumber: req.body.pageNumber
    });

    await book.save((error, result) => {

        if (error){
            return res.send(error);
        };

        try {
            res.send(result);
        } catch (error) {
            res.send(error);
        };
        
    })
    
});

router.put('/update_book', async (req, res) => {

    await Book.updateOne({title: req.body.title}, {title: 'Devlet', author: 'Platon', pageNumber: 357})
        .then(async ()=>{
            await Book.find({title: 'Devlet'})
                .then(book => res.send(book))
                .catch(e => res.send(e));
        })
        .catch(e => res.send(e));
});

router.delete('/delete_book', async (req, res) => {

    await Book.deleteOne({title: req.body.title})
        .then(async () => {
            await Book.find({}).then(books => res.send(books)).catch(e => res.send(e));
        });
});


module.exports = router;