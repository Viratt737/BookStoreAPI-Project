const express = require('express');
const {getAllBooks, getSingleBooksById,addNewBooks, updateBooks,deleteBooks} = require('../controllers/book-controller')
const router = express.Router(); 

// all the routes that required 
router.get('/get',getAllBooks);
router.get('/get/:id',getSingleBooksById);
router.post('/add',addNewBooks);
router.put('/update/:id',updateBooks);
router.delete('/delete/:id',deleteBooks);

// module.exports = router;
module.exports = router;
