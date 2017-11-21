const { EMPTY_CELL, BOMB_CELL, DESTRUCTIBLE_CELL, NON_DESTRUCTIBLE_CELL } = require('../constants');

var { Player } = require('./player');
var { Bomb } = require('./bomb.js');

class Game {

  constructor(json) {
    this.id           = json.id;
    this.map_name     = json.map_name;
    this.shadow_map   = this.createMapData(json.map_name);
    this.players_info = this.createPlayers(json.playersInfo);
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
    var wall            = game_level_info.layers[1].properties.wall
    var balk            = game_level_info.layers[1].properties.balk

    var mapMatrix = [];
    var i = 0;

    for(var row = 0; row < height; row++) {
      mapMatrix.push([]);

      for(var col = 0; col < width; col++) {
        mapMatrix[row][col] = EMPTY_CELL;

        if(tiles[i] == balk) {
          mapMatrix[row][col] = DESTRUCTIBLE_CELL;
        } else if(tiles[i] == wall) {
          mapMatrix[row][col] = NON_DESTRUCTIBLE_CELL;
        }

        i++;
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

    if ( this.shadow_map[bomb.row][bomb.col] == BOMB_CELL) {
      return false;
    }

    this.shadow_map[bomb.row][bomb.col] = BOMB_CELL

    console.log('----------------------')
    console.log(this.shadow_map)
    console.log('----------------------')

    return bomb
  }

  getMapCell(row, col) {
    return this.shadow_map[row][col]
  }

  nullifyMapCell(row, col) {
    this.shadow_map[row][col] = EMPTY_CELL
  }
}

exports.Game = Game;
