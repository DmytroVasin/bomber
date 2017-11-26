class Boot extends Phaser.State {

  preload() {
    this.game.stage.backgroundColor = '#000';
  }

  create() {
    // This is not mandatory, but useful, as it will make the game keep reacting to messages from the server even when the game window doesn’t have focus (which is a desired behavior for most games).
    this.game.stage.disableVisibilityChange = true;

    this.add.text(80, 150, 'Loading...', { font: '30px Courier', fill: '#FFFFFF' });

    this.state.start('Preload');
  }
}

export default Boot;
