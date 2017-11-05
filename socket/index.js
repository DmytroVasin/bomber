module.exports = function(server){
  serverSocket = require('socket.io')(server);

  var Lobby   = require('../lobby');
  var Game    = require('../entity/game');
  var Player  = require('../entity/player');
  var MapInfo = require('../entity/common/map_info');

  TILE_SIZE = 35;

  Lobby.initialize();

  serverSocket.sockets.on('connection', function(client) {
    console.log('New player has connected: ' + client.id);

    client.on('enter lobby', Lobby.onEnterLobby);
    client.on('leave lobby', Lobby.onLeaveLobby);
    client.on('new game created', Lobby.onGameCreation);

    client.on('enter pending game', Lobby.onEnterPendingGame);
    client.on('leave pending game', Lobby.onLeavePendingGame);

    client.on('create game', onStartGame);
  });



  function onStartGame(data) {
    var pending_game = Lobby.startGame(data.game_id);

    var game = new Game(pending_game.id);

    // This is part of the Game Init.
    // --------------------------
    pending_game.players.forEach( (player, i) => {
      var spawnPoint = MapInfo['FirstLevel'].spawnLocations[i];

      var newPlayer = new Player(spawnPoint.x * TILE_SIZE, spawnPoint.y * TILE_SIZE, "down", player.id, player.color);
      newPlayer.spawnPoint = spawnPoint;

      game.players[newPlayer.id] = newPlayer;
    })

    game.numPlayersAlive = pending_game.players.length;
    // --------------------------

    serverSocket.sockets.in(game.id).emit('launch game', { game: game });
  };
};
