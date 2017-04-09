let mongoose = require('mongoose')
mongoose.Promise = global.Promise;
let connection = mongoose.createConnection('mongodb://localhost:27017/test')

module.exports = connection
