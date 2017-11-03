var PendingGame = function(game_id) {
  this.id = game_id;

  this.players = [];

  this.colors = [{
    colorName: "white",
    available: true
  }, {
    colorName: "black",
    available: true
  }, {
    colorName: "blue",
    available: true
  }, {
    colorName: "green",
    available: true
  }];
};


PendingGame.prototype = {

  removePlayer: function(player_id) {
    // Update color ( Set to available )
    var player = this.players.find(item => item.id === player_id);
    var color = this.colors.find(item => item.colorName === player.color);
    color.available = true;

    // Remove user from game
    this.players = this.players.filter(item => item.id !== player_id);
  },

  addPlayer: function(player_id) {
    this.players.push({ id: player_id, color: this.claimFirstAvailableColor() });
  },

  claimFirstAvailableColor: function() {
    var color = this.colors.find(item => item.available === true);
    color.available = false;
    return color.colorName;
  }
}

module.exports = PendingGame;
