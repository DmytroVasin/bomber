import { Text } from '../helpers/elements';

class Win extends Phaser.State {

  create() {
    new Text({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      text: 'You won! Press Enter to return to main menu.',
      style: {
        font: '30px Areal',
        fill: '#FFFFFF'
      }
    })
  }

  update() {
    if( this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER) ) {
      this.returnToMenu();
    }
  }

  returnToMenu() {
    this.state.start('Menu');
  }
}

export default Win;
