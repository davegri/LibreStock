var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Source = new Schema({
  name: String,
  URL: String,
  pageURL: String,
});

var Tag = new Schema({
  name: String,
});

var PhotoSchema = new Schema({
  thumbnail: {
    data: Buffer,
    contentType: String,
  },
  sources: [Source],
  tags: [Tag],
  hash: String,
  clicks: Number,
  creationDate: Date,
});

module.exports = mongoose.model('Photo', PhotoSchema);
