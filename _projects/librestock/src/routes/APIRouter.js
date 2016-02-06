var express = require('express');

var router = express.Router();
var Photo = require('../models/Photo');

router.get('/', function(req, res) {
    res.send('This is the api router');
});

router.get('/photos', function(req, res) {
  var photos = Photo.find();
  photos.then(function(photos) {
    res.json(photos);
  })
});

router.get('/photos/:id', function(req, res) {
  var id = req.params.id;
  Photo.findById(id).then(function(photo) {
    res.json(photo);
  })
});

module.exports = router;
