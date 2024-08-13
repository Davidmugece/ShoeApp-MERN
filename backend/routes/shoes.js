const express = require('express');
const { upload } = require('../utils/fileHandler');
const { addShoe, editShoe, deleteShoe, viewShoes, getShoeById, addManyShoes } = require('../controllers/shoes');

const router = express.Router();
router.get('/', viewShoes);
router.post('/', upload.single("image"), addShoe);
router.get('/:id', getShoeById);
router.put('/:id', editShoe);
router.delete('/:id', deleteShoe);
router.post('/', addManyShoes);

module.exports = router;



