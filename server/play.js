var Lobby    = require('./lobby');
var { Game } = require('./entity/game');

var runningGames = new Map();

var Play = {
  onLeaveGame: function (data) {
    runningGames.delete(this.socket_game_id);

    this.leave(this.socket_game_id);
    this.socket_game_id = null;
  },

  onStartGame: function() {
    console.log('==>#start game# [User:'+this.id+'][Game:'+this.socket_game_id+'] Player requesting start the game');
    let game = Lobby.deletePendingGame(this.socket_game_id);
    runningGames.set(game.id, game)

    console.log('##>launch game [User:ALL][Game:'+game.id+'] Send to ALL users in the game the game start notification');
    serverSocket.sockets.in(game.id).emit('launch game', game);
  },

  updatePlayerPosition: function (coordinates) {
    // NOTE: We broadcast only for opponents.
    this.broadcast.to(this.socket_game_id).emit('move player', Object.assign({}, { player_id: this.id }, coordinates));
  },

  onDisconnectFromGame: function() {
    console.log('==>#disconnect# [User:'+this.id+'][Game:'+this.socket_game_id+'] Recived player diconnected');
    let current_game = runningGames.get(this.socket_game_id);

    if (current_game) {
      console.log('##>player disconnect [User:ALL][Game:'+this.socket_game_id+'] Send to ALL users, the player [User:'+this.id+'] is disconnected');
      serverSocket.sockets.in(this.socket_game_id).emit('player disconnect', {player_id: this.id } );
    }
  },

  createBomb: function({ col, row }) {
    let game_id = this.socket_game_id;
    console.log('DEBUG createBomb: game_id='+game_id);
    let current_game = runningGames.get(game_id);
    if (current_game===undefined ||!'players' in current_game) {
      console.log('WARNING createBomb: Current game no more available');
      serverSocket.sockets.in(this.socket_game_id).emit('player disconnect', {player_id: this.id } );
      return
    }
    let current_player = current_game.players[this.id];

    let bomb = current_game.addBomb({ col: col, row: row, power: current_player.power })

    if ( bomb ){
      setTimeout(function() {
        let blastedCells = bomb.detonate()

        serverSocket.sockets.to(game_id).emit('detonate bomb', { bomb_id: bomb.id, blastedCells: blastedCells });

      }, bomb.explosion_time);

      serverSocket.sockets.to(game_id).emit('show bomb', { bomb_id: bomb.id, col: bomb.col, row: bomb.row });
    }
  },

  onPickUpSpoil: function({ spoil_id }) {
    let game_id = this.socket_game_id;
    let current_game = runningGames.get(game_id);
    if (current_game===undefined ||!'players' in current_game) {
      console.log('WARNING onPickUpSpoil: Current game no more available');
      serverSocket.sockets.in(this.socket_game_id).emit('player disconnect', {player_id: this.id } );
      return
    }
    let current_player = current_game.players[this.id];

    let spoil = current_game.findSpoil(spoil_id)

    if (spoil) {
      current_game.deleteSpoil(spoil.id)

      current_player.pickSpoil(spoil.spoil_type)

      serverSocket.sockets.to(game_id).emit('spoil was picked', { player_id: current_player.id, spoil_id: spoil.id, spoil_type: spoil.spoil_type });
    }
  },

  onPlayerDied: function(coordinates) {
    let game_id = this.socket_game_id;
    let current_game = runningGames.get(game_id);
    if (current_game===undefined ||!'players' in current_game) {
      console.log('WARNING onPlayerDied: Current game no more available');
      serverSocket.sockets.in(this.socket_game_id).emit('player disconnect', {player_id: this.id } );
      return
    }
    let current_player = current_game.players[this.id]
    console.log('==>#leave game# [User:'+this.id+'][Game:'+this.socket_game_id+'] Recived player ('+current_player.skin+') leave game');
    serverSocket.sockets.to(this.socket_game_id).emit('show bones', Object.assign({}, { player_id: this.id }, coordinates));

    current_player.dead()

    let alivePlayersCount = 0
    let alivePlayerSkin = null
    for (let player of Object.values(current_game.players)) {
      if ( !player.isAlive ) { continue }

      alivePlayerSkin = player.skin
      alivePlayersCount += 1
    }

    if (alivePlayersCount >= 2) {
      return
    }

    setTimeout(function() {
      console.log('##>player win [User:ALL][Game:'+game_id+'] Player ['+alivePlayerSkin+'] won');
      serverSocket.sockets.to(game_id).emit('player win', alivePlayerSkin);
    }, 3000);
  }
}

module.exports = Play;
