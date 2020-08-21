const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');


db.connect('mongodb+srv://db_user_taller_node:DLFjcVUsPyLQOsHF@cluster0.11ztz.azure.mongodb.net/db_taller_node?retryWrites=true&w=majority');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

socket.connect(server);
router(app);

app.use('/app',express.static('public'));


server.listen(3000, () => {
    console.log('App is listening on http://localhost:3000')
})