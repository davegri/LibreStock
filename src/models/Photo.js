var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Source = new Schema();

var PhotoSchema = new Schema({
  thumbnail: String,
  sources: [{
    name: String,
    URL: String,
    pageURL: String,
  }],
  tags: [String],
  hash: String,
  clicks: Number,
  creationDate: Date,
});

module.exports = mongoose.model('Photo', PhotoSchema);
