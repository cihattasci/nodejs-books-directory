var express = require('express');
var {list_all_book, save_book, update_book, delete_book} = require('../controllers/bookDirectoryController');

var router = express.Router();

router.get('/list_all_book', list_all_book);

router.post('/save_book', save_book);

router.put('/update_book', update_book);

router.delete('/delete_book', delete_book);

module.exports = router;