import { Text } from '../helpers/elements';

class Win extends Phaser.State {

  init(winner_color) {
    this.color = winner_color
  }

  create() {
    new Text({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      text: this.winnerText(),
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

  winnerText() {
    if (this.color) {
      return `Player with color: "${this.color}" won! Press Enter to return to main menu.`
    }

    return 'Opponent left! Press Enter to return to main menu.'
  }
}

export default Win;
