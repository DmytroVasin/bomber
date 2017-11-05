// http://perplexingtech.weebly.com/game-dev-blog/using-states-in-phaserjs-javascript-game-developement

window.Game = new Phaser.Game(875, 525, Phaser.AUTO, 'bombattack');

start();

function start() {
  clientSocket = io.connect();

  Game.state.add('boot',         require('./states/boot'));
  Game.state.add('load',         require('./states/load'));
  Game.state.add('lobby',        require('./states/lobby'));
  Game.state.add('select',       require('./states/select'));
  Game.state.add('pending_game', require('./states/pending_game'));
  Game.state.add('game_level',   require('./states/game_level'));

  Game.state.start('boot');
};
