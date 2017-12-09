import { Text, TextButton, GameSlots } from '../helpers/elements';

class Menu extends Phaser.State {

  init() {
    this.slotsWithGame = null;

    clientSocket.on('display pending games', this.displayPendingGames.bind(this));
  }

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

    clientSocket.emit('enter lobby', this.displayPendingGames.bind(this));
  }

  update() {
  }

  hostGameAction() {
    clientSocket.emit('leave lobby');
    this.state.start('SelectMap');
  }

  displayPendingGames(availableGames) {
    // NOTE: That is not optimal way to preview slots,
    //       we should implement AddSlotToGroup, RemoveSlotFromGroup

    // I triying to care about readability, not about performance.
    if (this.slotsWithGame) {
      this.slotsWithGame.destroy()
    }

    this.slotsWithGame = new GameSlots({
      game: this.game,
      availableGames: availableGames,
      callback: this.joinGameAction,
      callbackContext: this,
      x: this.game.world.centerX - 220,
      y: 160,
      style: {
        font: '35px Areal',
        fill: '#efefef',
        stroke: '#ae743a',
        strokeThickness: 3
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
