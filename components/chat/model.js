const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    users:[{
        type:Schema.ObjectId,
        ref: 'Users'
    }]
})

const model = mongoose.model('Chats',chatSchema);

module.exports = model;