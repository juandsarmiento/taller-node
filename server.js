const express = require('express');
const router = require('./network/routes');
const db = require('./db');
const bodyParser = require('body-parser');


db.connect('mongodb+srv://db_user_taller_node:DLFjcVUsPyLQOsHF@cluster0.11ztz.azure.mongodb.net/db_taller_node?retryWrites=true&w=majority');
var app = express();
app.use(bodyParser.json());
router(app);

app.use('/app',express.static('public'));
app.listen(3000);

console.log('The app is listeting on localhost:3000');