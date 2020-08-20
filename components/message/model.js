const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    user: String,
    message: {
        type: String,
        required: true
    },
    date: Date
});

const model = mongoose.model('Messages',mySchema);

module.exports = model;