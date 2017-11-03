module.exports = function(server){
  serverSocket = require('socket.io')(server);

  var Lobby = require('../lobby');

  Lobby.initialize();

  serverSocket.sockets.on('connection', function(client) {
    console.log('New player has connected: ' + client.id);

    client.on('enter lobby', Lobby.onEnterLobby);
    client.on('new game created', Lobby.onGameCreation);

    client.on('enter pending game', Lobby.onEnterPendingGame);
    client.on('leave pending game', Lobby.onLeavePendingGame);
  });
};
