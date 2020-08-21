const express = require('express');
const app = express();
const server = require('http').Server(app);
const { DB_URL, PORT, PUBLIC_PATH, HOST } = require('./config');

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db.connect(DB_URL);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);
router(app);

app.use(PUBLIC_PATH, express.static('public'));


server.listen(PORT, () => {
    console.log(`App is listening on ${HOST}:${PORT}`)
})