const db = require('mongoose');
const Model = require('./model');
//mongodb+srv://db_user_taller_node:<password>@cluster0.11ztz.azure.mongodb.net/<dbname>?retryWrites=true&w=majority
db.Promise = global.Promise;
db.connect('mongodb+srv://db_user_taller_node:DLFjcVUsPyLQOsHF@cluster0.11ztz.azure.mongodb.net/db_taller_node?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true
});
console.log('[db]: Connection success!')
const list = [];

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