var slotXOffset = 155;
var slotYOffset = 410;

var textXOffset = 260;
var textYOffset = 25;

var lobbyGames = []

class Menu extends Phaser.State {

  preload() {
    clientSocket.on('display pending games', this.displayPendingGames.bind(this));
    // Do we have that state???? maybe we can copy displya panding game here .... from init...
  }

  create() {
    console.log('MenuState')

    this.add.text(80, 150, 'Start', { font: '50px Areal', fill: '#FFFFFF' });
    this.add.sprite(0, 0, 'background');


    var create_game = this.add.button(slotXOffset, slotYOffset, 'game_slot', this.hostGameAction.bind(this), null, 0, 1); // overFrame = 0, outFrame = 1
    var text        = this.add.text(textXOffset, textYOffset, 'Host Game', { font: 'Carter One', fill: 'white', fontSize: 18 });
    text.anchor.setTo(0.5);

    create_game.addChild(text)

    clientSocket.emit('enter lobby', { message: 'Hello World' });
  }

  hostGameAction() {
    clientSocket.emit('leave lobby');
    this.state.start('SelectMap', true, false);
  }

  displayPendingGames(pendingGames) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>???????????????')
    // TODO: Refactro that S...
    for (let image of lobbyGames) {
      // NOTE: 1. Not optimal way to rerender, we should implement AddPlayer, RemovePlayer
      // NOTE: 2. You did not destroy object, it still in memory. Just marked as destroyed.
      image.destroy();
    }

    lobbyGames = [];

    var xOffset = 155;
    var yOffset = 50;

    for (let game of pendingGames) {
      var slot = this.add.button(xOffset, yOffset, 'game_number', this.joinGameAction.bind(this, game.id), null, 0, 1); // overFrame = 0, outFrame = 1
      var text = this.add.text(textXOffset, textYOffset, "ENTER TO GAME " + game.id, { font: 'Carter One', fill: 'white', fontSize: 18 });
      text.anchor.setTo(0.5);

      slot.addChild(text)

      yOffset += 50;

      lobbyGames.push(slot)
    }
  }

  joinGameAction(game_id) {
    this.state.start('PendingGame', true, false, game_id);
  }
}

export default Menu;
