module.exports = function(server){
  serverSocket = require('socket.io')(server);

  var Lobby    = require('../lobby');
  var { Game } = require('../entity/game');

  Lobby.initialize();

  serverSocket.sockets.on('connection', function(client) {
    console.log('New player has connected: ' + client.id);

    client.on('enter lobby', Lobby.onEnterLobby);
    client.on('leave lobby', Lobby.onLeaveLobby);
    client.on('new game created', Lobby.onGameCreation);

    client.on('enter pending game', Lobby.onEnterPendingGame);
    client.on('leave pending game', Lobby.onLeavePendingGame);

    client.on('create game', onStartGame);


    client.on('disconnect', onClientDisconnect);
  });

  function onStartGame(data) {
    var pending_game = Lobby.startGame(data.game_id);

    var game = new Game({
      id: pending_game.id,
      playersInfo: pending_game.players,
      numPlayersAlive: pending_game.players.length
    });

    serverSocket.sockets.in(game.id).emit('launch game', { game: game });
  };

  function onClientDisconnect() {
    if (this.socket_game_id == null) {
      console.log('Player was not be inside any game...');
      return
    }

    console.log('Player was inside game...');
    Lobby.onLeavePendingGame.call(this, { game_id: this.socket_game_id })

  }
};
