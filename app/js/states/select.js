// TODO: Slider: https://github.com/netgfx/PhaseSlider/blob/15c748f5ba7ff3eb9c17bd6a55f3aa9540183915/examples/core_example1.js


var SelectState = function () {

};

module.exports = SelectState;

var xOffset = 180;
var yOffset = 25;
var thumbnailXOffset = 396;
var thumbnailYOffset = 125;
var stageNameYOffset = 320;

SelectState.prototype = {
  init: function () {
    console.log('SelectState')
  },

  create: function () {
    Game.add.sprite(0, 0, 'background_select');
    Game.add.image(xOffset, yOffset, 'select_stage');
    Game.add.image(thumbnailXOffset, thumbnailYOffset, 'danger_desert_thumbnail');

    Game.add.button(625, 425, 'ok_button', this.confirmStageSelection, this, 1, 0); // OverFrame = 1, Outframe = 0

    Game.add.text(Game.camera.width / 2, stageNameYOffset, 'Zone 1', { font: 'Carter One', fill: 'white', fontSize: 28 });
    Game.add.text(360, 380, 'Max # of players: 4', { font: 'Carter One', fill: 'white', fontSize: 18 });
    Game.add.text(360, 410, 'Map size: medium', { font: 'Carter One', fill: 'white', fontSize: 18 });
  },

  confirmStageSelection: function() {
    var newGameName = this.randomGameName();

    clientSocket.emit('new game created', { game_id: newGameName });

    Game.state.start('pending_game', true, false, newGameName);
  },

  randomGameName: function(){
    return (new Date()).valueOf().toString();
  }
};

module.exports = SelectState;
