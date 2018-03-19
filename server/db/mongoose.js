var mongoose = require('mongoose');

// tell mongoose to use builtin promise library
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose}
