// import Player from '../prefabs/player';
// import Enemy from '../prefabs/enemy';
// import HUD from '../prefabs/hud';
//
// TODO: Slider: https://github.com/netgfx/PhaseSlider/blob/15c748f5ba7ff3eb9c17bd6a55f3aa9540183915/examples/core_example1.js

import {
  xOffset,
  yOffset,
  stageNameYOffset
} from '../utils/constants';

class SelectMap extends Phaser.State {
  init(){
    console.log('SelectState')
  }

  preload(){
    this.load.image('block1', 'images/assets/pinkBlock.png');
    this.load.image('block2', 'images/assets/blueBlock.png');

    this.load.image("prev", "images/assets/arrow1.png");
    this.load.image("next", "images/assets/arrow2.png");
    this.load.image("accept", "images/assets/stripe.png");
    this.load.image("box",   "images/assets/box.png");
    this.load.image("cancel", "images/assets/cancel_paused.png");
    this.load.image("char1", "images/assets/char1.png");
    this.load.image("char2", "images/assets/char2.png");

    this.slider = new phaseSlider(this);
  }

  create(){
    this.add.sprite(0, 0, 'background_select');

    var char1 = this.add.image(0, 0, 'danger_desert_thumbnail');
    var char2 = this.add.image(0, 0, 'char2');


    var group1 = this.add.group();
    group1.width = 500;
    group1.height = 400;
    char1.scale.setTo(0.5, 0.5);
    char1.x = 500/2 - char1.width/2;
    char1.y = 100;

    var group2 = this.add.group();
    group2.width = 500;
    group2.height = 400;
    char2.scale.setTo(0.5, 0.5);
    char2.x = 500/2 - char2.width/2;
    char2.y = 100;

    var block1 = this.add.image(0, 0, 'block1');
    var block2 = this.add.image(0, 0, 'block2');

    group1.add(block1);
    group1.add(char1);

    group2.add(block2);
    group2.add(char2);

    this.slider.createSlider({
      x: this.width / 2 - 500 / 2,
      y: this.height / 2 - 400 / 2,
      customHandlePrev: 'prev',
      customHandleNext: 'next',
      objects:[group1, group2]
    });

    this.add.button(625, 425, 'accept', this.confirmStageSelection1, this, 0, 1);
  }

  confirmStageSelection1() {
    console.log( this.slider.getCurrentIndex() );
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
