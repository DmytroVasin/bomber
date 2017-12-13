var Lobby    = require('./lobby');
var { Game } = require('./entity/game');

var runningGames = new Map();

var Play = {
  // onLeaveGame: function (data) {
  //   runningGames.delete(this.socket_game_id);

  //   this.leave(this.socket_game_id);
  //   this.socket_game_id = null;
  // },

  onStartGame: function() {
    let game = Lobby.deletePendingGame(this.socket_game_id);
    runningGames.set(game.id, game)

    serverSocket.sockets.in(game.id).emit('launch game', game);
  },

  updatePlayerPosition: function (coordinates) {
    // NOTE: We broadcast only for opponents.
    this.broadcast.to(this.socket_game_id).emit('move player', Object.assign({}, { player_id: this.id }, coordinates));
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
  }
}

module.exports = Play;
