const Model = require('./model');

const addChat = (users) => {
    const newChat = new Model();
    newChat.users = users;
    newChat.save();
}

const getChats = () => {

    return new Promise((resolve, reject) => {
        Model.find()
            .populate('users')
            .exec((e, data) => {
                if (e) {
                    reject(e);

                    return;
                }
                resolve(data);
            })
    })
}

module.exports = {
    addChat,
    getChats
}