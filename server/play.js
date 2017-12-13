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
  }
}

module.exports = Play;
