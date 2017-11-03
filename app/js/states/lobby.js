var LobbyState = function () {

};

var slotXOffset = 155;
var slotYOffset = 410;

var textXOffset = 260;
var textYOffset = 25;

module.exports = LobbyState;

LobbyState.prototype = {
  init: function () {
    clientSocket.on('display pending games', this.displayPendingGames.bind(this));
  },

  preload: function() {
    // Do we have that state???? maybe we can copy displya panding game here .... from init...
  },

  create: function () {
    console.log('LobbyState')

    Game.add.text(80, 150, 'Start', { font: '50px Areal', fill: '#FFFFFF' });
    Game.add.sprite(0, 0, 'background');


    var create_game = Game.add.button(slotXOffset, slotYOffset, 'game_slot', this.hostGameAction, null, 0, 1); // overFrame = 0, outFrame = 1
    var text        = Game.add.text(textXOffset, textYOffset, 'Host Game', { font: 'Carter One', fill: 'white', fontSize: 18 });
    text.anchor.setTo(0.5);

    create_game.addChild(text)

    clientSocket.emit('enter lobby', { message: 'Hello World' });
  },

  hostGameAction: function() {
    clientSocket.emit('leave lobby');
    Game.state.start('select', true, false);
  },

  displayPendingGames: function(pendingGames) {
    var xOffset = 155;
    var yOffset = 50;

    for (let game of pendingGames) {
      var slot = Game.add.button(xOffset, yOffset, 'game_number', this.joinGameAction.bind(this, game.id), null, 0, 1); // overFrame = 0, outFrame = 1
      var text = Game.add.text(textXOffset, textYOffset, "ENTER TO GAME " + game.id, { font: 'Carter One', fill: 'white', fontSize: 18 });
      text.anchor.setTo(0.5);

      slot.addChild(text)

      yOffset += 50;
    }
  },

  joinGameAction: function(game_id) {
    Game.state.start('pending_game', true, false, game_id);
  }
};
