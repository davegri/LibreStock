var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var addr = process.env.MONGODB_PORT_27017_TCP_ADDR || 'localhost'
var mongoPort = process.env.MONGODB_PORT_27017_TCP_PORT;
mongoose.connect('mongodb://' + addr + ':' + mongoPort + '/librestock_db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();
var APIRouter = require('./routes/APIRouter');

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.send('home page!');
});

app.use(router);
app.use('/api', APIRouter);

app.listen(port);
