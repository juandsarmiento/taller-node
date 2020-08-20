const express = require('express');
const message = require('../components/message/network');
const controller ='/message';

const routes = (server) => {
    server.use(controller, message)
}

module.exports = routes;