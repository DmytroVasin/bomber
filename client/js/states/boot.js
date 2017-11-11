class Boot extends Phaser.State {

  preload() {
    console.log('BootState')
  }

  create() {
    // This is not mandatory, but useful, as it will make the game keep reacting to messages from the server even when the game window doesn’t have focus (which is a desired behavior for most games).
    this.stage.disableVisibilityChange = true;

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.state.start('Preload');
  }
}

export default Boot;
