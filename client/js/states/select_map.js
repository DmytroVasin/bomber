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
    this.load.image('pinkBlock', 'images/assets/pinkBlock.png');
    this.load.image('blueBlock', 'images/assets/blueBlock.png');
    this.load.spritesheet('accept', 'images/assets/ok_but.png', 80, 80);
    this.load.image('prev', 'images/assets/arrow1.png');
    this.load.image('next', 'images/assets/arrow2.png');

    this.slider = new phaseSlider(this);
  }

  create(){
    this.add.sprite(0, 0, 'background_select');

    var pinkBlock = this.add.image(0, 0, 'pinkBlock');
    var blueBlock = this.add.image(0, 0, 'blueBlock');

    this.slider.createSlider({
      x: this.game.width / 2 - 500 / 2,
      y: this.game.height / 2 - 400 / 2,
      customHandlePrev: 'prev',
      customHandleNext: 'next',
      objects:[pinkBlock, blueBlock]
    });

    this.add.button(this.game.width / 2 - 80 / 2, 425, 'accept', this.confirmStageSelection, this, 1, 0);
  }

  confirmStageSelection(){
    var map_id = this.slider.getCurrentIndex()

    clientSocket.emit('new game created', { map_id: map_id }, (data) => {
      this.state.start('PendingGame', true, false, data.game_id);
    });

  }
}

export default SelectMap;