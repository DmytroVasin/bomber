class PendingGame {

  constructor(game_id) {
    this.id = game_id;
    this.players = [];
    this.availableColors = ['white', 'blue', 'black', 'green']
  }

  removePlayer(player_id) {
    // Find player
    var player = this.players.find(item => item.id === player_id);

    this.availableColors.push(player.color)
    // Remove user from game
    this.players = this.players.filter(item => item.id !== player_id);
  }

  addPlayer(player_id) {
    // TODO: Implement Like a CLASS ???? PendingGmaePlayer
    this.players.push({ id: player_id, color: this.getAvailableColor() });
  }

  getAvailableColor() {
    return this.availableColors.pop();
  }

  isEmpty() {
    return this.players.length === 0
  }

  isFull() {
    return this.players.length === 2
  }
}

exports.PendingGame = PendingGame;
