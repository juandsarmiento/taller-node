const list = [];

const addMessage = (message) => {
    list.push(message);
}

const getMessages = () => list;

module.exports  = {
    addMessage,
    getMessages
}