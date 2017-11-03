var PendingGame = require('./entity/pending_game');
var lobbyId = 'lobby_room';

var allPendingGames = ['room 1', 'room 2', 'room 3']

var Lobby = {
  initialize: function () {
    theGame = new PendingGame();
  },

  onEnterLobby: function (data) {
    console.log('>>>> ON ENTER LOBBY')

    this.join(lobbyId);
    serverSocket.sockets.in(lobbyId).emit('display pending games', allPendingGames);
  },

  onEnterPendingGame: function (data) {
    console.log('>>>> ON ENTER PENDING GAME')

    this.leave(lobbyId);
    this.join(data.game_id);


    theGame.addPlayer(this.id);

    console.log('.........................')
    console.log(theGame)
    console.log('.........................')


    // this.gameId = data.game_id;
    this.emit('update players', { players: theGame.players });
    // this.broadcast.to(data.game_id).emit("player joined", {id: this.id, color: pendingGame.players[this.id].color});
    // if (pendingGame.getNumPlayers() >= MapInfo['First'].spawnLocations.length) {
    //   pendingGame.state = "full";
    //   broadcastSlotStateUpdate(data.game_id, "full");
    // }
  },

  onLeavePendingGame: function(data) {
    console.log('>>>>>>>>>>>>>>>')
    console.log(data)
    console.log('>>>>>>>>>>>>>>>')
    this.leave(data.game_id);
    this.join(lobbyId);
    serverSocket.sockets.in(lobbyId).emit('display pending games', allPendingGames);

    theGame.removePlayer(this.id);

    serverSocket.sockets.in(this.game_id).emit('update players', { players: theGame.players });
  }
}


module.exports = Lobby;
