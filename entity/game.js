var MapInfo = require('../entity/common/map_info');
var { Player }  = require('../entity/player');

class Game {

  constructor(json) {
    this.id = json.id;
    this.map_id = json.map_id;
    this.spawnPoints = MapInfo[json.map_id].spawnLocations;
    this.tile_size = MapInfo[json.map_id].tileSize;
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
