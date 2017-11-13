class Win extends Phaser.State {
  init(){
    console.log('WinState')
  }

  create(){
    var text = this.add.text(this.game.camera.width / 2, this.game.camera.height / 2, 'You won! Press Enter to return to main menu.', { font: 'Carter One', fill: 'white', fontSize: 18 });
    text.anchor.setTo(0.5);
  }

  update() {
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
      this.returnToMenu();
    }
  }

  returnToMenu() {
    this.state.start('Menu', true, false);
  }
}

export default Win;
