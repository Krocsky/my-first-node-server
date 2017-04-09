let socketIO = require('socket.io')

let init = function(server) {

  let io = socketIO(server)

  io.on('connection', function(client) {

    client.on('event', function(data) {

    })

    client.on('disconnect', function() {

    })

  })
}
