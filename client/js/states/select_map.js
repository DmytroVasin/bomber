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
    this.load.spritesheet('accept', 'images/assets/accept.png', 80, 80);
    this.load.image('prev', 'images/assets/prev.png');
    this.load.image('next', 'images/assets/next.png');

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
    var map_name = ['small_map', 'big_map'][this.slider.getCurrentIndex()]

    clientSocket.emit('new game created', { map_name: map_name }, (data) => {
      this.state.start('PendingGame', true, false, data);
    });

  }
}

export default SelectMap;
