const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = require('http').createServer(app);
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index'));
});

server.listen(PORT, function(){
  console.log(`Express server listening on port ${PORT}`)
});


const Lobby    = require('./lobby');

serverSocket = socketIO(server);

serverSocket.sockets.on('connection', function(client) {
  console.log('New player has connected: ' + client.id);

  client.on('enter lobby', Lobby.onEnterLobby);
  client.on('leave lobby', Lobby.onLeaveLobby);
  client.on('create game', Lobby.onCreateGame);

  client.on('enter pending game', Lobby.onEnterPendingGame);
  client.on('leave pending game', Lobby.onLeavePendingGame);
});
