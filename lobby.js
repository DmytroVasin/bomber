var PendingGame = require('./entity/pending_game');
var lobbyId = 'lobby_room';

var allPendingGames = []

var Lobby = {
  initialize: function () {
  },

  onEnterLobby: function (data) {
    console.log('>>>> ON ENTER LOBBY')
    this.join(lobbyId);
    serverSocket.sockets.in(lobbyId).emit('display pending games', allPendingGames);
  },

  onLeaveLobby: function (data) {
    console.log('>>>> ON LEAVE LOBBY')
    this.leave(lobbyId);
  },

  onGameCreation: function(data) {
    console.log('>>>> ON NEW GAME CREATED')
    var newGame = new PendingGame(data.game_id);
    allPendingGames.push(newGame)

    serverSocket.sockets.in(lobbyId).emit('display pending games', allPendingGames);
  },

  onEnterPendingGame: function (data) {
    console.log('>>>> ON ENTER PENDING GAME')

    var current_game = allPendingGames.find(game => game.id === data.game_id);

    // TODO: Should leave before redirect
    this.leave(lobbyId);
    this.join(current_game.id);

    current_game.addPlayer(this.id);

    serverSocket.sockets.in(current_game.id).emit('update players', { players: current_game.players });
  },

  onLeavePendingGame: function(data) {
    console.log('>>>> ON LEAVE PENDING GAME')

    var current_game = allPendingGames.find(game => game.id === data.game_id);

    this.leave(current_game.game_id);

    current_game.removePlayer(this.id);

    if( current_game.isEmpty() ){
      console.log(' CURRENT GAME IS EMPTY!!!')
      allPendingGames = allPendingGames.filter(item => item.id !== current_game.id);

      serverSocket.sockets.in(lobbyId).emit('display pending games', allPendingGames);
    } else {
      serverSocket.sockets.in(current_game.id).emit('update players', { players: current_game.players });
    }
  }
}

module.exports = Lobby;
