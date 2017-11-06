// import Player from '../prefabs/player';
// import Enemy from '../prefabs/enemy';
// import HUD from '../prefabs/hud';
//
// TODO: Slider: https://github.com/netgfx/PhaseSlider/blob/15c748f5ba7ff3eb9c17bd6a55f3aa9540183915/examples/core_example1.js

import {
  xOffset,
  yOffset,
  thumbnailXOffset,
  thumbnailYOffset,
  stageNameYOffset
} from '../utils/constants';

class SelectMap extends Phaser.State {
  init(){
    console.log('SelectState')
  }

  create(){
    this.add.sprite(0, 0, 'background_select');
    this.add.image(xOffset, yOffset, 'select_stage');
    this.add.image(thumbnailXOffset, thumbnailYOffset, 'danger_desert_thumbnail');

    this.add.button(625, 425, 'ok_button', this.confirmStageSelection, this, 1, 0); // OverFrame = 1, Outframe = 0

    this.add.text(this.camera.width / 2, stageNameYOffset, 'Zone 1', { font: 'Carter One', fill: 'white', fontSize: 28 });
    this.add.text(360, 380, 'Max # of players: 4', { font: 'Carter One', fill: 'white', fontSize: 18 });
    this.add.text(360, 410, 'Map size: medium', { font: 'Carter One', fill: 'white', fontSize: 18 });
  }

  confirmStageSelection(){
    var newGameName = this.randomGameName();

    clientSocket.emit('new game created', { game_id: newGameName });

    this.state.start('PendingGame', true, false, newGameName);
  }

  randomGameName(){
    return (new Date()).valueOf().toString();
  }
}

export default SelectMap;
