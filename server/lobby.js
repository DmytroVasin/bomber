var lobbyId = 'lobby_room';

var Lobby = {
  onEnterLobby: function (callback) {
    // this == socket
    this.join(lobbyId);

    callback( Lobby.availablePendingGames() )
  },

  availablePendingGames: function() {
    return [{
      id: 1,
      name: 'First'
    }, {
      id: 2,
      name: 'Second'
    }];
  }
}

module.exports = Lobby;
