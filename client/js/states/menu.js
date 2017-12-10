import { Text, TextButton } from '../helpers/elements';

class Menu extends Phaser.State {

  create() {
    let background = this.add.image(this.game.world.centerX, this.game.world.centerY, 'main_menu');
    background.anchor.setTo(0.5);

    new Text({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY - 215,
      text: 'Main Menu',
      style: {
        font: '35px Areal',
        fill: '#9ec0ba',
        stroke: '#7f9995',
        strokeThickness: 3
      }
    })

    new TextButton({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY + 195,
      asset: 'buttons',
      callback: this.hostGameAction,
      callbackContext: this,
      overFrame: 1,
      outFrame: 0,
      downFrame: 2,
      upFrame: 0,
      label: 'New Game',
      style: {
        font: '20px Areal',
        fill: '#000000'
      }
    });
  }

  hostGameAction() {
    this.state.start('SelectMap');
  }
}

export default Menu;
