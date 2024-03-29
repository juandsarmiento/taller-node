const express = require('express');
const multer = require('multer');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const upload = multer({
    dest: 'testUploads/'
});

router.get('/', (req, res) => {
    const filterUser = req.query.user || null;
    controller.getMessages(filterUser)
        .then(data => {
            response.success(req, res, data)
        })
        .catch(error => {
            response.error(req, res, error, 500, error);
        })
})

router.post('/', upload.single('file'), (req, res) => {
    const { file, body: { user, message, chat } } = req;
    controller
        .addMessage(user, message, chat, file)
        .then((message) => response.success(req, res, message))
        .catch((e) => response.error(req, res, e, 400));
})

router.patch('/:id', (req, res) => {
    const { params: { id }, body: { message } } = req;
    controller.updateMessage(id, message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((error) => {
            console.log(error);
            response.error(req, res, 'internal error', 500)
        })
})

router.delete('/:id', (req, res) => {
    const { params: { id } } = req;
    controller.deleteMessage(id)
        .then((data) => {
            response.success(req, res, `user ${id} deleted`, 200)
        })
        .catch(error => {
            response.error(req, res, 'Internal error', 500, error);
        })
})

module.exports = router;