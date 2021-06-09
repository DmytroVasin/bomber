import { Text,TextButton } from '../helpers/elements.js';

class Win extends Phaser.Scene {

  constructor () {
    super('Win');
  }

  init(winner_skin) {
    this.skin = winner_skin
  }

  create() {
    new Text({
      game: this,
      x: this.sys.canvas.clientWidth/2,
      y: this.sys.canvas.clientHeight/2,
      text: this.winnerText(),
      style: {
        font: '30px Areal',
        fill: '#FFFFFF'
      }
    })

    this.button = new TextButton({
      game: this,
      x: this.sys.canvas.clientWidth/2,
      y: this.sys.canvas.clientHeight/2 + 195,
      asset:'buttons',
      callback: this.returnToMenu,
      callbackContext: this,
      upFrame: 0,
      overFrame:1,
      downFrame:2,
      outFrame:3,
      label: 'Back to Menu',
      style: {
        font: '20px Areal',
        fill: '#000000'
      }
    });
    this.cursorKeys  = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  }

  update() {
    if( this.cursorKeys.isDown ) {
      this.returnToMenu();
    }
  }

  returnToMenu() {
    this.scene.start('Menu');
  }

  winnerText() {
    if (this.skin) {
      return 'Player: "'+this.skin+'" won! Press Enter to return to main menu.';
    }
    return 'Opponent left! Press Enter to return to main menu.'
  }
}

export default Win;
