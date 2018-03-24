var mongoose = require('mongoose');

// tell mongoose to use builtin promise library
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose}
