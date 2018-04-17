const mongoose = require('mongoose');
const constants =require('./constants');

mongoose.Promise = global.Promise;

try {
    mongoose.connect(constants.MONGO_URL);
} catch (err) {
    mongoose.createConnection(constants.MONGO_URL)
}

mongoose.connection
    .once('open', () => console.log("MongoDB is Running.."))
    .on('error', e => { throw e })