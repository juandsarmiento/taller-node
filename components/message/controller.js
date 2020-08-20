const store = require('./store');

const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            reject('No user');
            console.error('[messageController]: No user');

            return;
        }
        const fullMessage = {
            user,
            message,
            date: new Date()
        }
        console.log(fullMessage);
        store.addMessage(fullMessage);
        resolve(fullMessage);
    })
}
const getMessages = (filterUser) => {
    return new Promise((resolve, reject) => {
        resolve(store.getMessages(filterUser));
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

const deleteMessage =  (id) => {
    return new Promise(async(resolve, reject)=> {
        if(!id){
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