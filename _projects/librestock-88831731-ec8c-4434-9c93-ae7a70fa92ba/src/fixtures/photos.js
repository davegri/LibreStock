var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/librestock_db');

var Photo = require('../models/Photo');

Photo.create({
  sources: [{
    name: "PicJumbo",
    URL: "http://picjumbo.imgix.net/IMG_5869.jpg",
    pageURL: "https://picjumbo.com/gentlemans-driving-leather-gloves/"
  }],
  tags: [{name:"driving"},{name:"gloves"},{name:"leather"}],
  hash: "23623623623623623@235235325",
  clicks: 32,
  creationDate: Date.now(),
});
