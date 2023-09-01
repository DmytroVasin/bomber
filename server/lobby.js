var { Game } = require('./entity/game');

var lobbyId = 'lobby_room';

var pendingGames = new Map();


var Lobby = {
  onEnterLobby: function (callback) {
    // this == socket
    if (!this.lobbymessage){
      console.log('==>#enter lobby# [User:'+this.id+'][lobby:] Player requesting joining the Lobby [lobby:'+lobbyId+']. Server is sending availablePendingGames [NbGames:'+Lobby.availablePendingGames().length+']');
      this.lobbymessage=true;
    }
    this.join(lobbyId);

    callback( Lobby.availablePendingGames() )
  },

  onLeaveLobby: function () {
    console.log('==>#leave lobby# [User:'+this.id+'][lobby:'+lobbyId+'] Player notifing leaving the Lobby');
    this.lobbymessage=null;
    this.leave(lobbyId);
  },

  onCreateGame: function(map_name, callback) {
    var newGame = new Game({ map_name: map_name });
    pendingGames.set(newGame.id, newGame);

    Lobby.updateLobbyGames()

    console.log('==>#create game# [User:'+this.id+'][lobby:] Player request create a new Game. Response is the New Game created [Game:'+newGame.id+']');

    callback({ game_id: newGame.id });
  },

  onEnterPendingGame: function ({ game_id }) {
    console.log('==>#enter pending game# [User:'+this.id+'][Game:] Player requesting enter in the Game [Game:'+game_id+'].');
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
    console.log('==>#leave pending game# [User:'+this.id+'][Game:'+this.socket_game_id+'] Player requesting leaving the Game');
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
