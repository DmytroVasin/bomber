var MapInfo = require('../entity/common/map_info');
var { Player }  = require('../entity/player');

class Game {
  constructor(json) {
    this.spawnPoints = MapInfo['FirstLevel'].spawnLocations;
    this.tile_size = MapInfo['FirstLevel'].tileSize;

    this.id = json.id;
    this.players = this.createPlayers(json.playersInfo);
    this.numPlayersAlive = json.numPlayersAlive;
  }

  createPlayers(playersInfo) {
    let gamePlayers = []

    for (let info of playersInfo) {
      let spawn = this.spawnPoints.pop();

      let player = new Player(spawn.x * this.tile_size, spawn.y * this.tile_size, 'down', info.id, info.color)

      gamePlayers.push(player);
    }

    return gamePlayers;
  }
}

exports.Game = Game;
