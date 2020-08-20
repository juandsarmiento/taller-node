const store = require('./store');

const addChat = async (users) => {
    if (users.length < 2) {
        throw 'Should be exists at least two users'
    }
    store.addChat(users);
}

const getChats = async () => {
    const chats = await store.getChats();
    return chats;
}

module.exports = {
    addChat,
    getChats
}