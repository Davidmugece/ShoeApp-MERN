const express = require('express');
const { upload } = require('../utils/fileHandler');
const { addShoe, editShoe, deleteShoe } = require('../controllers/shoes');


const router = express.Router();
router.post('/', upload.single("image"), addShoe);
router.put('/:id', editShoe);
router.delete('/:id', deleteShoe);

module.exports = router;
