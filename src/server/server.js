let express = require('express')
let graphqlMW = require('express-graphql')
let userSchema = require('./userSchema')
let app = new express()
let User = require('./models/User')

const PORT = 3000

let nameGen = function() {
  let lastName = 'Zhao Qian Sun Li Zhou Wu Zheng Wang'.split(' ');
  let firstName = 'yun kang qiang chao biao bin shui yang'.split(' ');
  return `${lastName[Math.random()*lastName.length>>>0]} ${firstName[Math.random()*firstName.length>>>0]}`
}

app.use('/createUsers', (req, res) => {
  let user = new User({
    name: nameGen(),
    age: (Math.random() * 20 >>> 0) + 20,
    job: ['Writer', 'Coder', 'Teacher', 'Boss', 'Student'][Math.random() * 5 >>> 0]
  });
  user.save((err) => {
    if (err)
      res.send(err.message)
    else
      res.send(user)
  })
})

app.use('/query', graphqlMW({
  schema: userSchema,
  graphiql: true
}))

app.use('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(PORT, function() {
  console.log(`server is running at port:${PORT}`)
})
