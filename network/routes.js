const express = require('express');
const controllerMessage = require('../components/message/network');
const controllerUser = require('../components/user/network');

const routes = (server) => {
    server.use('/message', controllerMessage);
    server.use('/user', controllerUser)
}

module.exports = routes;