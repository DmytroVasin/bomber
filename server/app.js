const express = require('express');
const socketIO = require('socket.io');
const favicon = require('serve-favicon');

const app = express();
const server = require('http').createServer(app);
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(favicon(path.join(__dirname, '..', 'client', 'favicon.ico')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index'));
});

server.listen(PORT, function(){
  console.log(`Express server listening on port ${PORT}`)
});


const Lobby    = require('./lobby');
const Play     = require('./play');

serverSocket = socketIO(server);

serverSocket.sockets.on('connection', function(client) {
  console.log('New player has connected: ' + client.id);

  client.on('enter lobby', Lobby.onEnterLobby);
  client.on('leave lobby', Lobby.onLeaveLobby);
  client.on('create game', Lobby.onCreateGame);

  client.on('enter pending game', Lobby.onEnterPendingGame);
  client.on('leave pending game', Lobby.onLeavePendingGame);

  client.on('start game', Play.onStartGame);

  client.on('update player position', Play.updatePlayerPosition);
  client.on('create bomb', Play.createBomb);
  client.on('pick up spoil', Play.onPickUpSpoil);

  client.on('player died', Play.onPlayerDied);
  client.on('leave game', Play.onLeaveGame);

  client.on('disconnect', onClientDisconnect);
});

function onClientDisconnect() {
  if (this.socket_game_id == null) {
    console.log('Player was not be inside any game...');
    return
  }
  console.log('Player was inside game...');

  // If game is pending then use Lobby.
  Lobby.onLeavePendingGame.call(this)

  // If game is non-pending then use Play.
  Play.onDisconnectFromGame.call(this)
}



// HUD: https://github.com/geibi/phaser
// https://nodejs.org/en/docs/inspector/
