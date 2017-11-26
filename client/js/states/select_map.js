import { availableMaps } from '../utils/constants';

import { Button, PlayerSlots } from '../helpers/elements';

class SelectMap extends Phaser.State {

  init() {
    this.slider = new phaseSlider(this);
  }

  create() {
    this.add.sprite(0, 0, 'background_select');

    let pinkBlock = this.add.image(0, 0, 'pinkBlock');
    let blueBlock = this.add.image(0, 0, 'blueBlock');

    // WARN: https://github.com/netgfx/PhaseSlider/issues/1
    this.slider.createSlider({
      x: this.game.world.centerX - pinkBlock.width / 2,
      y: this.game.world.centerY - pinkBlock.height / 2,
      customHandlePrev: 'prev',
      customHandleNext: 'next',
      objects: [pinkBlock, blueBlock]
    });

    new Button({
      game: this.game,
      x: this.game.world.centerX,
      y: 425,
      asset: 'accept',
      callback: this.confirmStageSelection,
      callbackContext: this,
      overFrame: 1,
      outFrame: 0,
      downFrame: 1,
      upFrame: 0,
    })
  }

  confirmStageSelection() {
    let map_name = availableMaps[this.slider.getCurrentIndex()]

    clientSocket.emit('create game', map_name, this.joinToNewGame.bind(this));
  }

  joinToNewGame(game_id) {
    this.state.start('PendingGame', true, false, game_id);
  }
}

export default SelectMap;
