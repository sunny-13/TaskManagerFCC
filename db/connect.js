const mongoose = require('mongoose')

const connectDB = (connectionUrl) =>{
    return mongoose.connect(connectionUrl);
}

module.exports = connectDB;
