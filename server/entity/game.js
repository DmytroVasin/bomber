var { Player } = require('./player');
var { Bomb } = require('./bomb.js');

class Game {

  constructor(json) {
    this.id = json.id;
    this.map_id = json.map_id;
    this.players_info = this.createPlayers(json.playersInfo);

    this.bombsMatrix = Array(25).fill(Array(15).fill(0))
  }

  createPlayers(playersInfo) {
    let gamePlayers = []

    for (let [index, playerInfo] of playersInfo.entries()) {
      let player = new Player(playerInfo.id, playerInfo.color, index)

      gamePlayers.push(player);
    }

    return gamePlayers;
  }


  removePlayer(player_id) {
    // Find player
    var player = this.players_info.find(item => item.id === player_id);

    // Remove user from game
    this.players_info = this.players_info.filter(item => item.id !== player_id);
  }

  addBomb(coordinates) {
    var bomb = new Bomb(coordinates);

    if ( this.bombsMatrix[bomb.col][bomb.row] == 1) {
      return false;
    }

    this.bombsMatrix[bomb.col][bomb.row] = 1

    console.log('----------------------')
    console.table(this.bombsMatrix)
    console.log('----------------------')

    return bomb
  }

  removeBomb(col, row) {
    this.bombsMatrix[col][row] = 0
  }

}

exports.Game = Game;
