const express = require('express');
const messageController = require('../components/message/network');
const userController = require('../components/user/network');
const chatController = require('../components/chat/network');

const routes = (server) => {
    server.use('/message', messageController);
    server.use('/user', userController)
    server.use('/chat', chatController)
}

module.exports = routes;