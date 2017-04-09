let connection = require('./connection')
const User = connection.model('User', {
  name: String,
  age: Number,
  job: String
})

module.exports = User
