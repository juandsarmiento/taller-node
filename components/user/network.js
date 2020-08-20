const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    const { query: { name } } = req;
    controller.getUsers(name)
        .then((users) => {
            response.success(req, res, users, 200);
        })
        .catch((e) => response.error(req, res, 'Internal error', 500, e));
});
router.post('/', (req, res) => {
    const { body: { name } } = req;
    controller.addUser(name)
        .then((data) => {
            response.success(req, res, data, 201);
        })
        .catch(error => response.error(req, res, 'Internal error', 500, error))
})

module.exports = router;