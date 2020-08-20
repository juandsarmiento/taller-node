const Model = require('./model');

const addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
}

const getMessages = async(user) => {
    if(user == null){
        
        return await Model.find();
    }
    return await Model.find({user});
}

const updateMessage = async(id, message) => {
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    return await foundMessage.save();
}

const deleteMessage = async(id) => {
    await Model.deleteOne({_id: id});
}
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}