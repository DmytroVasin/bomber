var PendingGame = require('./entity/pending_game');
var lobbySlots = {};
var lobbyId = 'lobby_room';

var allPendingGames = [
  1,2,3
]

var Lobby = {
  initialize: function () {
    lobbySlots = new PendingGame();
  },

  onEnterLobby: function (data) {
    console.log('>>>> ON ENTER LOBBY')

    this.join(lobbyId);

    serverSocket.sockets.in(lobbyId).emit('add slots', lobbySlots);

    serverSocket.sockets.in(lobbyId).emit('display pending games', allPendingGames);
  },

  onStageSelect: function (data) {
    console.log('>>>> ON STAGE SELECT')
    console.log('?????????????????????????????????????????????????????????????????????????????????????')
    console.log(lobbyId)
    console.log('?????????????????????????????????????????????????????????????????????????????????????')

    // lobbySlots.state   = 'joinable';
    // lobbySlots.mapName = data.mapName;
    // serverSocket.sockets.in(lobbyId).emit('update slot', { newState: 'joinable' });
    // serverSocket.sockets.emit('update slot', { newState: 'joinable' });
  },









  onEnterPendingGame: function (data) {
    console.log('>>>> ON ENTER PENDING GAME')



    var pendingGame = lobbySlots;

    // // Leave lobby
    // this.leave(lobbyId);
    // // Join Game
    // this.join(data.gameId);


    pendingGame.addPlayer(this.id);

    console.log('.........................')
    console.log(pendingGame)
    console.log('.........................')


    // this.gameId = data.gameId;
    this.emit('show current players', { players: pendingGame.players });
    // this.broadcast.to(data.gameId).emit("player joined", {id: this.id, color: pendingGame.players[this.id].color});
    // if (pendingGame.getNumPlayers() >= MapInfo['First'].spawnLocations.length) {
    //   pendingGame.state = "full";
    //   broadcastSlotStateUpdate(data.gameId, "full");
    // }
  },

  onLeavePendingGame: function() {
    var lobbySlot = lobbySlots;

    this.leave(this.gameId);

    lobbySlot.removePlayer(this.id);

    // socket.sockets.in(this.gameId).emit("player left", {players: lobbySlot.players});

    // if (lobbySlot.getNumPlayers() == 0) {
    //   lobbySlot.state = "empty";
    //   socket.sockets.in(lobbyId).emit("update slot", {gameId: this.gameId, newState: "empty"});
    // }
    // if (lobbySlot.state == "full") {
    //   lobbySlot.state = "joinable";
    //   socket.sockets.in(lobbyId).emit("update slot", {gameId: this.gameId, newState: "joinable"});
    // }
  }




}


module.exports = Lobby;
