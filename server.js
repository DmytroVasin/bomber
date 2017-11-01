var express = require('express');
var app = express();
var server = require('http').createServer(app);

serverSocket = require('socket.io')(server);
// var path = require('path');

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000);

var Lobby = require('./lobby');

init();

function init() {
  Lobby.initialize();
  setEventHandlers();
};

function setEventHandlers () {
  serverSocket.sockets.on('connection', function(client) {
    console.log('New player has connected: ' + client.id);

    client.on('enter lobby', Lobby.onEnterLobby);
    client.on('select stage', Lobby.onStageSelect);


    client.on('enter pending game', Lobby.onEnterPendingGame);
    client.on('leave pending game', Lobby.onLeavePendingGame);
  });
};
