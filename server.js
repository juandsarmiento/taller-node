const express = require('express');
const router = require('./network/routes');

const bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());
router(app);

app.use('/app',express.static('public'));
app.listen(3000);

console.log('The app is listeting on localhost:3000');