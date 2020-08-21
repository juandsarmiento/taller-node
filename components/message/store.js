const Model = require('./model');

const addMessage = (newMessage) => {
    const myMessage = new Model(newMessage);
    myMessage.save();
}

const getMessages = (user) => {
    return new Promise((resolve, reject) => {
        let filter = {}
        if (user !== null) {
            filter = { user };
        }
        Model.find(filter)
            .populate('user')
            .exec((e, populated) => {
                if (e) {
                    reject(e);

                    return;
                }
                resolve(populated);
            });
    })
}

const updateMessage = async (id, message) => {
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    return await foundMessage.save();
}

const deleteMessage = async (id) => {
    await Model.deleteOne({ _id: id });
}
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}