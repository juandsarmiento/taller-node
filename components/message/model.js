const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chats'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'Users'
    },
    message: {
        type: String,
        required: true
    },
    file: Object,
    date: Date
});

const model = mongoose.model('Messages', mySchema);

module.exports = model;