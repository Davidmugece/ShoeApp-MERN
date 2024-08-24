const mongoose = require('mongoose');
const connectionString = "mongodb+srv://mugechedavid:1234@cluster0.j6e71.mongodb.net/shoedb?retryWrites=true&w=majority&appName=Cluster0";

const connectDatabase = async () => {
    await mongoose
        .connect(connectionString)
        .then(() => console.log('Database connected successfully'))
        .catch((error) => console.log(error.message));
}

module.exports = { connectDatabase }

