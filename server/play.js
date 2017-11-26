var Lobby    = require('./lobby');
var { Game } = require('./entity/game');

var runningGames = new Map();

var Play = {
  onStartGame: function({ game_id }) {
    let game = Lobby.startGame(game_id);
    runningGames.set(game.id, game)

    serverSocket.sockets.in(game.id).emit('launch game', game);
  },

  updatePlayerPosition: function (coordinates) {
    // this == socket | We broadcast only for opponents.
    this.broadcast.to(this.socket_game_id).emit('move player', Object.assign({}, { player_id: this.id }, coordinates));
  },

  onLeaveGame: function(data) {
    // console.log(this.socket_game_id)
    var current_game = runningGames.get(data.game_id);

    // if (current_game) {
      // WTF WHY IT CALL THIS FUNCTION TWICE!!!!!!
      current_game.removePlayer(this.id);
      if (current_game.players_info.length < 2) {
        if (current_game.players_info.length == 1) {
          serverSocket.sockets.in(current_game.id).emit('no opponents');
        }

        Play.terminateExistingGame(current_game.id);
      }
    // }
  },

  terminateExistingGame: function(game_id) {
    runningGames.delete(game_id);
  },


  createBomb: function({ col, row }) {
    let game_id = this.socket_game_id;
    let current_game = runningGames.get(game_id);
    let current_player = current_game.players_info.find(item => item.id == this.id);

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
    let current_player = current_game.players_info.find(item => item.id == this.id);

    let spoil = current_game.findSpoil(spoil_id)

    if (spoil) {
      current_game.deleteSpoil(spoil.id)

      current_player.pickSpoil(spoil.spoil_type)

      serverSocket.sockets.to(game_id).emit('spoil was picked', { player_id: current_player.id, spoil_id: spoil.id, spoil_type: spoil.spoil_type });
    }
  },

  onPlayerDied: function(coordinates) {
    serverSocket.sockets.to(this.socket_game_id).emit('show bones', Object.assign({}, { player_id: this.id }, coordinates));
  }
}

module.exports = Play;
