class PendingGame {

  constructor(map_id) {
    this.id = this.randomGameName();

    this.map_id = map_id;
    this.players_info = [];
    this.availableColors = ['white', 'blue', 'black', 'red']
  }

  removePlayer(player_id) {
    // Find player
    var player = this.players_info.find(item => item.id === player_id);

    this.availableColors.push(player.color)
    // Remove user from game
    this.players_info = this.players_info.filter(item => item.id !== player_id);
  }

  addPlayer(player_id) {
    // TODO: Implement Like a CLASS ???? PendingGmaePlayer
    this.players_info.push({ id: player_id, color: this.getAvailableColor() });
  }

  getAvailableColor() {
    return this.availableColors.pop();
  }

  isEmpty() {
    return this.players_info.length === 0
  }

  isFull() {
    return this.players_info.length === 2
  }

  randomGameName(){
    return (new Date()).valueOf().toString();
  }
}

exports.PendingGame = PendingGame;
