const mongoose = require('mongoose');

const userChema = new mongoose.Schema({
    name:String
});

const model = mongoose.model('Users',userChema);

module.exports = model;