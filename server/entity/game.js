var { Player } = require('./player');

class Game {

  constructor(json) {
    this.id = json.id;
    this.map_id = json.map_id;
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


  removePlayer(player_id) {
    // Find player
    var player = this.players_info.find(item => item.id === player_id);

    // Remove user from game
    this.players_info = this.players_info.filter(item => item.id !== player_id);
  }

}

exports.Game = Game;
