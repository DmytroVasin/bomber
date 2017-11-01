var BootState = function () {

};

module.exports = BootState;

BootState.prototype = {

  create: function () {
    console.log('BootState')

    // This is not mandatory, but useful, as it will make the game keep reacting to messages from the server even when the game window doesn’t have focus (which is a desired behavior for most games).
    Game.stage.disableVisibilityChange = true;

    Game.physics.startSystem(Phaser.Physics.ARCADE);
    Game.state.start('load');
  }

};
