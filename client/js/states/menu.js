import { Text, TextButton, GameSlots } from '../helpers/elements';

var slotXOffset = 155;
var slotYOffset = 410;

var textXOffset = 260;
var textYOffset = 25;

var slotsWithGame = null;

class Menu extends Phaser.State {

  init() {
    clientSocket.on('display pending games', this.displayPendingGames.bind(this));
  }

  create() {
    this.add.sprite(0, 0, 'background');

    new Text({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      text: 'new Start',
      style: {
        font: '50px Areal',
        fill: '#FFFFFF'
      }
    })

    new TextButton({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY + 100,
      asset: 'game_slot',
      callback: this.hostGameAction,
      callbackContext: this,
      overFrame: 0,
      outFrame: 1,
      downFrame: 2,
      upFrame: 1,
      label: 'Host Game',
      style: {
        font: '20px Areal',
        fill: '#FFFFFF'
      }
    });

    clientSocket.emit('enter lobby', this.displayPendingGames.bind(this));
  }

  hostGameAction() {
    clientSocket.emit('leave lobby');
    this.state.start('SelectMap');
  }

  displayPendingGames(availableGames) {
    // NOTE: That is not optimal way to preview slots,
    //       we should implement AddSlotToGroup, RemoveSlotFromGroup

    // I triying to care about readability, not about performance.
    if (slotsWithGame) {
      slotsWithGame.destroy()
    }

    slotsWithGame = new GameSlots({
      game: this.game,
      availableGames: availableGames,
      callback: this.joinGameAction,
      callbackContext: this,
      x: this.game.world.centerX,
      y: 50,
      asset: 'game_number',
      overFrame: 0,
      outFrame: 1,
      downFrame: 2,
      upFrame: 1,
      style: {
        font: '20px Areal',
        fill: '#FFFFFF'
      }
    })
  }

  joinGameAction(game_id) {
    clientSocket.emit('leave lobby');
    // https://phaser.io/docs/2.6.2/Phaser.StateManager.html#start
    this.state.start('PendingGame', true, false, game_id);
  }
}

export default Menu;
