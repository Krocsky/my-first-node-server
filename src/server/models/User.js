let mongoose = require('mongoose')

mongoose.Promise = global.Promise;

let connection = mongoose.createConnection('mongodb://localhost:27017/test')

const User = connection.model('User', {
  name: String,
  age: Number,
  job: String
})

module.exports = User
