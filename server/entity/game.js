const { EMPTY_CELL, BOMB_CELL, DESTRUCTIBLE_CELL, NON_DESTRUCTIBLE_CELL } = require('../constants');

var { Player } = require('./player');
var { Bomb } = require('./bomb.js');

var uuidv4 = require('uuid/v4');
var faker = require('faker');

class Game {

  constructor({ map_name }) {
    this.id           = uuidv4();
    this.name         = faker.commerce.color()
    this.map_name     = map_name;

    this.map_size     = 3 // Take from map!
    // NOTE: we can`t use new Map - because Socket.io do not support such format
    this.players      = {}
    this.playerColors = ['white', 'blue', 'black', 'red']



    this.shadow_map   = this.createMapData(map_name);
    this.spoils       = new Map();
    this.bombs        = new Map();
  }

  addPlayer(id) {
    let player = new Player({ id: id, color: this.getAvailableColor(), spawnPosition: 1 }) // WRONG!
    this.players[player.id] = player
  }

  removePlayer(id) {
    let player = this.players[id];
    this.playerColors.push(player.color)
    delete this.players[id];
  }

  getAvailableColor() {
    return this.playerColors.pop();
  }

  isEmpty() {
    return Object.keys(this.players).length === 0
  }

  isFull() {
    return Object.keys(this.players).length === this.map_size
  }



  // ----------------



  createMapData(map_name) {
    var game_level_info = require('../../client/game_levels/' + map_name + '.json')
    var tiles           = game_level_info.layers[0].data
    var width           = game_level_info.layers[0].width
    var height          = game_level_info.layers[0].height
    // PICK NUMBERS FOM MAP INFO!
    var wall            = 3
    var balk            = 4

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

  addBomb({ col, row, power }) {
    let bomb = new Bomb({ game: this, col: col, row: row, power: power });
    if ( this.bombs.get(bomb.id) ) {
      return false
    }
    this.bombs.set(bomb.id, bomb);
    return bomb
  }

  getMapCell(row, col) {
    return this.shadow_map[row][col]
  }

  nullifyMapCell(row, col) {
    this.shadow_map[row][col] = EMPTY_CELL
  }

  findSpoil(spoil_id){
    return this.spoils.get(spoil_id)
  }

  addSpoil(spoil) {
    this.spoils.set(spoil.id, spoil);
  }

  deleteSpoil(spoil_id){
    this.spoils.delete(spoil_id)
  }
}

exports.Game = Game;
