const store = require('./store');
const { socket } = require('../../socket');

const addMessage = (user, message, chat, file = {}) => {
    return new Promise((resolve, reject) => {
        console.log(message);
        console.log(user)
        if (!user || !message || !chat) {
            reject('Invalid data!');

            return;
        }
        const fullMessage = {
            user,
            message,
            chat,
            file,
            date: new Date()
        }
        store.addMessage(fullMessage);
        socket.io.emit('message', fullMessage);
        resolve(fullMessage);
    })
}
const getMessages = (filterUser) => {
    return new Promise((resolve, reject) => {
        store.getMessages(filterUser)
            .then(data => {
                console.log(data);
                resolve(data);
            })
            .catch((e) => {
                reject(e);
            })
    })
}
const updateMessage = (id, newMessage) => {
    return new Promise(async (resolve, reject) => {
        if (!id || !newMessage) {
            reject('invalid data!');

            return;
        }
        const message = await store.updateMessage(id, newMessage)
        resolve(message)
    })
}
const deleteMessage = (id) => {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid data');

            return;
        }

        await store.deleteMessage(id);
        resolve(true);
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
};