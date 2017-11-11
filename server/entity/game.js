var { Player } = require('./player');

class Game {

  constructor(json) {
    this.id = json.id;
    this.map_id = json.map_id;
    this.players = this.createPlayers(json.playersInfo);
  }

  createPlayers(playersInfo) {
    let gamePlayers = []

    for (let [index, playerInfo] of playersInfo.entries()) {
      let player = new Player(playerInfo.id, playerInfo.color, index)

      gamePlayers.push(player);
    }

    return gamePlayers;
  }
}

exports.Game = Game;
