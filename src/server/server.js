let express = require('express')
let graphqlMW = require('express-graphql')
let userSchema = require('./userSchema')
let bodyParser = require('body-parser')
let app = new express()
let socketInit = require('./socket/index')

const PORT = 3000

socketInit(app)

app.use(bodyParser())
app.listen(PORT, function() {
  console.log(`server is running at port:${PORT}`)
})
