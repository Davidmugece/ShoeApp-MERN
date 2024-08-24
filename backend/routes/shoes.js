const express = require('express');
const { upload } = require('../utils/fileHandler');
const { addShoe, editShoe, deleteShoe, viewShoes, getShoeById } = require('../controllers/shoes');

const router = express.Router();
router.get('/', viewShoes);
router.get('/:id', getShoeById);



module.exports = router;



