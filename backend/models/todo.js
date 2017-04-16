var mongoose = require('mongoose');

// create a new schema
var TodoSchema = mongoose.Schema({
  title: String
});

module.exports = mongoose.model('Todo' , TodoSchema);
