const mongoose = require ('mongoose');
const mongoURI = "mongodb://localhost:27017/"

const connectToMongo  = () => {
    mongoose.connect(mongoURI); // Remove the callback function here
    mongoose.connection.on('connected', () => {
        console.log("mongo connected");
    });
}

module.exports = connectToMongo;
