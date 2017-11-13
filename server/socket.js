module.exports = function(server){
  serverSocket = require('socket.io')(server);

  var Lobby    = require('./lobby');
  var Play    = require('./play');

// FOR NOW;
var xxxx = null;

  init();

  function init() {
    Lobby.initialize();

    serverSocket.sockets.on('connection', function(client) {
      console.log('New player has connected: ' + client.id);

      client.on('enter lobby', Lobby.onEnterLobby);
      client.on('leave lobby', Lobby.onLeaveLobby);
      client.on('new game created', Lobby.onGameCreation);

      client.on('enter pending game', Lobby.onEnterPendingGame);
      client.on('leave pending game', Lobby.onLeavePendingGame);

      client.on('create game', Play.onStartGame);

      client.on('update player position', Play.updatePlayerPosition);

      client.on('disconnect', onClientDisconnect);
    });
  }

  function onClientDisconnect() {
    // debugger;

    if (this.socket_game_id == null) {
      console.log('Player was not be inside any game...');
      return
    } else {
      console.log('Player was inside game...');
    }

    // If game is pending then use Lobby.
    Lobby.onLeavePendingGame.call(this, { game_id: this.socket_game_id })

    // If game is non-pending then use Play.
    Play.onLeaveGame.call(this, { game_id: this.socket_game_id })
  }

};
