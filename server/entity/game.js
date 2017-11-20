var { Player } = require('./player');
var { Bomb } = require('./bomb.js');

class Game {

  constructor(json) {
    this.id           = json.id;
    this.map_name     = json.map_name;
    this.shadow_map   = this.createMapData(json.map_name);
    this.players_info = this.createPlayers(json.playersInfo);

    // WTF!!!!
    this.bombsMatrix = []
    for(var i=0; i<15; i++) {
      this.bombsMatrix[i] = [];
      for(var j=0; j<25; j++) {
        this.bombsMatrix[i][j] = 0;
      }
    }
  }

  createPlayers(playersInfo) {
    let gamePlayers = []

    for (let [index, playerInfo] of playersInfo.entries()) {
      let player = new Player(playerInfo.id, playerInfo.color, index)

      gamePlayers.push(player);
    }

    return gamePlayers;
  }

  createMapData(map_name) {
    var game_level_info = require('../../client/game_levels/' + map_name + '.json')
    var tiles           = game_level_info.layers[1].data
    var width           = game_level_info.layers[1].width
    var height          = game_level_info.layers[1].height
    var destructible    = game_level_info.layers[1].properties.destructible

    // TODO: Ask for improvments:
    var mapMatrix = [];
    var num = 0;

    for(var row = 0; row < height; row++) {
      mapMatrix.push([]);

      for(var col = 0; col < width; col++) {
        mapMatrix[row][col] = 1; // Wall

        if(tiles[num] == 0) {
          mapMatrix[row][col] = 0; // Nothing
        } else if(tiles[num] == destructible) {
          mapMatrix[row][col] = 2; // Destructable
        }

        num++;
      }
    }

    return mapMatrix;
  }

  removePlayer(player_id) {
    // Find player
    var player = this.players_info.find(item => item.id === player_id);

    // Remove user from game
    this.players_info = this.players_info.filter(item => item.id !== player_id);
  }

  addBomb(power, coordinates) {
    var bomb = new Bomb(this, power, coordinates);

    if ( this.bombsMatrix[bomb.row][bomb.col] == 1) {
      return false;
    }

    this.bombsMatrix[bomb.row][bomb.col] = 1

    console.log('----------------------')
    console.log(this.bombsMatrix)
    console.log('----------------------')

    return bomb
  }

  removeBomb(row, col) {
    // bombMatrix && shadow_map  - should be same table!
    this.bombsMatrix[row][col] = 0
  }

  getMapCell(row, col) {
    return this.shadow_map[row][col]
  }

  nullifyMapCell(row, col) {
    this.shadow_map[row][col] = 0
  }
}

exports.Game = Game;
