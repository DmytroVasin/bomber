var DEFAULT_NUM_ROUNDS = 3;

var Game = function (id) {
  this.id = id;
  this.players = {};
  this.map = {};
  this.bombs = {};
  this.numPlayersAlive = 0;
  this.readyRound = [];
  this.awaiting = false;
  this.numRounds = DEFAULT_NUM_ROUNDS;
  this.currentRound = 1;
};

Game.prototype = {
};

module.exports = Game;
