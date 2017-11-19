var { PendingGame } = require('./entity/pending_game');

var lobbyId = 'lobby_room';

var allPendingGames = []

var Lobby = {
  initialize: function () {
  },

  onEnterLobby: function (data) {
    console.log('>>>> ON ENTER LOBBY')

    this.join(lobbyId);
    // WE NEED TO UPDATE ONLY USERS LOBBY - SENT TO YOURSELF!
    serverSocket.sockets.in(this.id).emit('display pending games', Lobby.availablePendingGames());
  },

  onLeaveLobby: function (data) {
    console.log('>>>> ON LEAVE LOBBY')
    this.leave(lobbyId);
  },

  onGameCreation: function(data, callback) {
    console.log('>>>> ON NEW GAME CREATED');
    var newGame = new PendingGame(data.map_name);

    allPendingGames.push(newGame)

    serverSocket.sockets.in(lobbyId).emit('display pending games', Lobby.availablePendingGames());

    callback({ game_id: newGame.id });
  },

  onEnterPendingGame: function (data) {
    console.log('>>>> ON ENTER PENDING GAME')

    var current_game = allPendingGames.find(game => game.id === data.game_id);

    // TODO: Should leave before redirect
    this.leave(lobbyId);
    this.join(current_game.id);

    // place game_id inside Socket connection.... to know when he disconnect
    this.socket_game_id = current_game.id;

    current_game.addPlayer(this.id);

    serverSocket.sockets.in(current_game.id).emit('update players', { players_info: current_game.players_info });

    if ( current_game.isFull() ){
     serverSocket.sockets.in(lobbyId).emit('display pending games', Lobby.availablePendingGames() );
    }
  },

  onLeavePendingGame: function(data) {
    console.log('>>>> ON LEAVE PENDING GAME')
    var current_game = allPendingGames.find(game => game.id === data.game_id);

    // Trick to live pending game
    if (current_game) {
      this.leave(current_game.game_id);

      // place game_id inside Socket connection.... to know when he disconnect
      this.socket_game_id = null;

      current_game.removePlayer(this.id);

      if( current_game.isEmpty() ){
        allPendingGames = allPendingGames.filter(item => item.id !== current_game.id);
        serverSocket.sockets.in(lobbyId).emit('display pending games', Lobby.availablePendingGames());
        return
      }

      if ( !current_game.isFull() ){ // Availbable ( User Quit! )
        serverSocket.sockets.in(lobbyId).emit('display pending games', Lobby.availablePendingGames() );
      }

      serverSocket.sockets.in(current_game.id).emit('update players', { players_info: current_game.players_info });
    }
  },

  startGame: function(game_id) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> START GAME >>>>>>>>>>>>>>>>>>>>>>>>>>>')
    var current_game = allPendingGames.find(game => game.id === game_id);

    allPendingGames = allPendingGames.filter(item => item.id !== current_game.id);

    serverSocket.sockets.in(lobbyId).emit('display pending games', Lobby.availablePendingGames());

    return current_game
  },

  availablePendingGames: function() {
    return allPendingGames.filter(item => item.isFull() === false );
  }
}

module.exports = Lobby;
