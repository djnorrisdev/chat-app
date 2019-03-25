var express = require('express');
var app = express();
var server = require('http').Server(app);

var io = require('socket.io')(server);

var port = process.env.PORT || 7000;

app.use(express.static(__dirname + "/index.js"));


server.listen(port, function() {
  console.log("Server listening on port %d", port);
});

let clients = [];

io.on("connection", function(connection) {
  console.log("A client has connected", connection.id);
  clients.push(connection)
  
  connection.on('message', message => {
    const data = JSON.parse(message);
    broadcast(data)
  })
  connection.on('userId', id => {
    console.log(id)
    // const idData = JSON.parse(id);
    io.emit('userId', id)
  })
});

const broadcast = message => {
  const data = JSON.stringify(message)
  clients.forEach(client => client.send(data))
}

