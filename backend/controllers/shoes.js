const Shoe = require('../models/shoes');

const addShoe = async (req, res) => {
    const { type, quantity, price } = req.body;
    const image = req.file.filename


    try {
        const newShoe = new Shoe({ type, quantity, price, image });
        await newShoe.save();
        res.json(newShoe);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const addManyShoes = async (req, res) => {
    const shoes = req.body; // Expecting an array of shoe objects

    try {
        // Validate that req.body is an array
        if (!Array.isArray(shoes)) {
            return res.status(400).json({ msg: 'Invalid data format' });
        }

        // Create multiple shoe instances and save them
        const newShoes = await Shoe.insertMany(shoes);

        res.json(newShoes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getShoeById = async (req, res) => {

    try {
        const shoe = await Shoe.findById(req.params.id);
        if (!shoe) {
            return res.status(404).json({ msg: 'Shoe not found' });
        }
        res.json(shoe);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const editShoe = async (req, res) => {
    const { type, quantity, price } = req.body;

    try {
        const shoe = await Shoe.findById(req.params.id);
        if (!shoe) {
            return res.status(404).json({ msg: 'Shoe not found' });
        }

        shoe.type = type || shoe.type;
        shoe.quantity = quantity || shoe.quantity;
        shoe.price = price || shoe.price;

        await shoe.save();
        res.json(shoe);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const deleteShoe = async (req, res) => {
    try {
        const shoe = await Shoe.findByIdAndDelete(req.params.id);
        if (!shoe) {
            return res.status(404).json({ msg: 'Shoe not found' });
        }

        res.json({ msg: 'Shoe removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const viewShoes = async (req, res) => {
    try {
        const shoes = await Shoe.find();
        res.json(shoes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    addShoe,
    addManyShoes,
    getShoeById,
    editShoe,
    deleteShoe,
    viewShoes
}