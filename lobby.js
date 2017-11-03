var PendingGame = require('./entity/pending_game');
var lobbyId = 'lobby_room';

var allPendingGames = []

var Lobby = {
  initialize: function () {
    theGame = new PendingGame();
  },

  onEnterLobby: function (data) {
    console.log('>>>> ON ENTER LOBBY')
    this.join(lobbyId);
    serverSocket.sockets.in(lobbyId).emit('display pending games', allPendingGames);
  },

  onGameCreation: function(data) {
    console.log('>>>> ON NEW GAME CREATED')
    allPendingGames.push(data.game_id)

    serverSocket.sockets.in(lobbyId).emit('display pending games', allPendingGames);
  },

  onEnterPendingGame: function (data) {
    console.log('>>>> ON ENTER PENDING GAME')
    console.log(data)
    console.log('>>>> ON ENTER PENDING GAME')

    this.leave(lobbyId);
    this.join(data.game_id);

    theGame.addPlayer(this.id);

    serverSocket.sockets.emit('update players', { players: theGame.players });
  },

  onLeavePendingGame: function(data) {
    console.log('>>>> ON LEAVE PENDING GAME')
    console.log('>>>>' + this.id)
    console.log('>>>>' + this.id)

    theGame.removePlayer(this.id);

    console.log('>>>?????' + theGame.players)
    console.log('>>>?????' + theGame.colors)

    serverSocket.sockets.emit('update players', { players: theGame.players });

    this.leave(data.game_id);
  }
}


module.exports = Lobby;
