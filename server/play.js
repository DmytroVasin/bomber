var Lobby    = require('./lobby');
var { Game } = require('./entity/game');

var runningGames = new Map();

var Play = {
  onLeaveGame: function (data) {
    runningGames.delete(this.socket_game_id);

    this.leave(this.socket_game_id);
    this.socket_game_id = null;
  },

  onStartGame: function() {
    let game = Lobby.deletePendingGame(this.socket_game_id);
    runningGames.set(game.id, game)

    serverSocket.sockets.in(game.id).emit('launch game', game);
  },

  updatePlayerPosition: function (coordinates) {
    // NOTE: We broadcast only for opponents.
    this.broadcast.to(this.socket_game_id).emit('move player', Object.assign({}, { player_id: this.id }, coordinates));
  },

  onDisconnectFromGame: function() {
    let current_game = runningGames.get(this.socket_game_id);

    if (current_game) {
      serverSocket.sockets.in(this.socket_game_id).emit('player disconnect', {player_id: this.id } );
    }
  },

  createBomb: function({ col, row }) {
    let game_id = this.socket_game_id;
    let current_game = runningGames.get(game_id);
    let current_player = current_game.players[this.id];

    let bomb = current_game.addBomb({ col: col, row: row, power: current_player.power })

    if ( bomb ){
      setTimeout(function() {
        let blastedCells = bomb.detonate()

        serverSocket.sockets.to(game_id).emit('detonate bomb', { bomb_id: bomb.id, blastedCells: blastedCells });

      }, bomb.explosion_time);

      serverSocket.sockets.to(game_id).emit('show bomb', { bomb_id: bomb.id, col: bomb.col, row: bomb.row });
    }
  },

  onPickUpSpoil: function({ spoil_id }) {
    let game_id = this.socket_game_id;
    let current_game = runningGames.get(game_id);
    let current_player = current_game.players[this.id];

    let spoil = current_game.findSpoil(spoil_id)

    if (spoil) {
      current_game.deleteSpoil(spoil.id)

      current_player.pickSpoil(spoil.spoil_type)

      serverSocket.sockets.to(game_id).emit('spoil was picked', { player_id: current_player.id, spoil_id: spoil.id, spoil_type: spoil.spoil_type });
    }
  },

  onPlayerDied: function(coordinates) {
    serverSocket.sockets.to(this.socket_game_id).emit('show bones', Object.assign({}, { player_id: this.id }, coordinates));

    let game_id = this.socket_game_id;
    let current_game = runningGames.get(game_id);
    let current_player = current_game.players[this.id]

    current_player.dead()

    let alivePlayersCount = 0
    let alivePlayerSkin = null
    for (let player of Object.values(current_game.players)) {
      if ( !player.isAlive ) { continue }

      alivePlayerSkin = player.skin
      alivePlayersCount += 1
    }

    if (alivePlayersCount >= 2) {
      return
    }

    setTimeout(function() {
      serverSocket.sockets.to(game_id).emit('player win', alivePlayerSkin);
    }, 3000);
  }
}

module.exports = Play;
