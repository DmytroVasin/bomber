var { Game } = require('./entity/game');

var lobbyId = 'lobby_room';

var pendingGames = new Map();

var Lobby = {
  onEnterLobby: function(callback) {
    // this == socket
    this.join(lobbyId);

    callback( Lobby.availablePendingGames() )
  },

  onLeaveLobby: function() {
    this.leave(lobbyId);
  },

  onCreateGame: function(map_name, callback) {
    var newGame = new Game({ map_name: map_name });
    pendingGames.set(newGame.id, newGame);

    Lobby.updateLobbyGames()

    callback({ game_id: newGame.id });
  },

  onEnterPendingGame: function ({ game_id }) {
    let current_game = pendingGames.get(game_id);

    this.join(current_game.id);

    // NOTE: We save current_game_id inside Socket connection.
    //       We should knew it on disconnect
    this.socket_game_id = current_game.id;

    current_game.addPlayer(this.id);

    if ( current_game.isFull() ){
      Lobby.updateLobbyGames();
    }

    Lobby.updateCurrentGame(current_game)
  },

  onLeavePendingGame: function() {
    let current_game = pendingGames.get(this.socket_game_id);

    if (current_game) {
      this.leave(current_game.id);
      this.socket_game_id = null;

      current_game.removePlayer(this.id);

      if( current_game.isEmpty() ){
        pendingGames.delete(current_game.id);
        Lobby.updateLobbyGames();
        return
      }

      if ( !current_game.isFull() ){
        Lobby.updateLobbyGames();
      }

      Lobby.updateCurrentGame(current_game)
    }
  },

  deletePendingGame: function(game_id) {
    let game = pendingGames.get(game_id);

    pendingGames.delete(game.id);
    Lobby.updateLobbyGames();

    return game
  },

  availablePendingGames: function() {
    return [...pendingGames.values()].filter(item => item.isFull() === false );
  },

  updateLobbyGames: function() {
    serverSocket.sockets.in(lobbyId).emit('display pending games', Lobby.availablePendingGames() );
  },

  updateCurrentGame: function(game) {
    // Emit to ALL including ME
    serverSocket.sockets.in(game.id).emit('update game', { current_game: game });
  }
}

module.exports = Lobby;
