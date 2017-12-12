import { AVAILABLE_MAPS } from '../utils/constants';
import { Text, Button } from '../helpers/elements';

class SelectMap extends Phaser.State {

  init() {
    this.slider = new phaseSlider(this);
  }

  create() {
    let background = this.add.image(this.game.world.centerX, this.game.world.centerY, 'main_menu');
    background.anchor.setTo(0.5);

    new Text({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY - 215,
      text: 'Select Map',
      style: {
        font: '35px Areal',
        fill: '#9ec0ba',
        stroke: '#6f7975',
        strokeThickness: 3
      }
    });

    // WARN: https://github.com/netgfx/PhaseSlider/issues/1
    let hotMapImage = new Phaser.Image(this.game, 0, 0, 'hot_map_preview');
    let coldMapImage = new Phaser.Image(this.game, 0, 0, 'cold_map_preview');

    this.slider.createSlider({
      x: this.game.world.centerX - hotMapImage.width / 2,
      y: this.game.world.centerY - coldMapImage.height / 2,
      width: hotMapImage.width,
      height: hotMapImage.height,
      customHandlePrev: 'prev',
      customHandleNext: 'next',
      objects: [hotMapImage, coldMapImage]
    });

    new Button({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY + 195,
      asset: 'check_icon',
      callback: this.confirmStageSelection,
      callbackContext: this,
      overFrame: 1,
      outFrame: 0,
      downFrame: 2,
      upFrame: 0,
    })
  }

  confirmStageSelection() {
    let map_name = AVAILABLE_MAPS[this.slider.getCurrentIndex()]

    clientSocket.emit('create game', map_name, this.joinToNewGame.bind(this));
  }

  joinToNewGame(game_id) {
    this.state.start('PendingGame', true, false, game_id);
  }
}

export default SelectMap;
