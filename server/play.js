var Lobby    = require('./lobby');
var { Game } = require('./entity/game');

var allGames = []

var Play = {
  initialize: function () {
  },


  onStartGame: function(data) {
    var pending_game = Lobby.startGame(data.game_id);

    var game = new Game({
      id: pending_game.id,
      playersInfo: pending_game.players_info,
      map_id: pending_game.map_id
    });

    allGames.push(game)

    serverSocket.sockets.in(game.id).emit('launch game', { game: game });
  },

  updatePlayerPosition: function (data) {
    console.log("Player ID: " + this.id + "# => " + data.x + ":" + data.y );

// >>>>>>>>>>>>>>>>>> this.socket_game_id ??????????????????????? WTF????

    var current_game = allGames.find(game => game.id === this.socket_game_id);

    var movingPlayer = current_game.players_info.find(item => item.id == this.id);

    movingPlayer.x = data.x;
    movingPlayer.y = data.y;
    movingPlayer.faceDirection = data.faceDirection;

    // NOTE: BROADCAST ONLY FOR OPPONENTS
    // TODO: Broadcast all player position beacuse we can have several opponents.
    //       All players position for current game.
    this.broadcast.to(current_game.id).emit('move player', {
      id: movingPlayer.id,
      x: movingPlayer.x,
      y: movingPlayer.y,
      faceDirection: movingPlayer.faceDirection
    });
  },

  onLeaveGame: function(data) {
    // console.log(this.socket_game_id)
    var current_game = allGames.find(game => game.id === data.game_id);

    debugger
  }
}

module.exports = Play;
