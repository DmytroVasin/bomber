import { Text, Button, PlayerSlots } from '../helpers/elements';

class PendingGame extends Phaser.State {

  init({ game_id }) {
    this.profileBoxes = [];
    this.profileImages = [];
    this.slotsWithPlayer = null;

    this.game_id = game_id;

    clientSocket.on('update game', this.displayGameInfo.bind(this));
    clientSocket.on('launch game', this.launchGame.bind(this));

    clientSocket.emit('enter pending game', { game_id: this.game_id });
  }

  create() {
    this.add.sprite(0, 0, 'background_select');

    this.gameTitle = new Text({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY - 240,
      text: '',
      style: {
        font: '24px Areal',
        fill: '#FFFFFF'
      }
    })

    this.startGameButton = new Button({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY + 100,
      asset: 'start_game_button',
      callback: this.startGameAction,
      callbackContext: this,
      overFrame: 1,
      outFrame: 0,
      downFrame: 2,
      upFrame: 0,
    })
    this.startGameButton.disable()

    new Button({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY + 150,
      asset: 'leave_game_button',
      callback: this.leaveGameAction,
      callbackContext: this,
      overFrame: 1,
      outFrame: 0,
      downFrame: 1,
      upFrame: 0,
    })
  }

  displayGameInfo({ current_game }) {
    let players = Object.values(current_game.players);

    this.gameTitle.text = `Game name: ${current_game.name}`

    if (this.slotsWithPlayer) {
      this.slotsWithPlayer.destroy()
    }

    this.slotsWithPlayer = new PlayerSlots({
      game: this.game,
      max_players: current_game.max_players,
      players: players,
      x: this.game.world.centerX - 150,
      y: 100,
      asset_box: 'character_square',
      asset_player: 'bomberman_head_'
    })

    if(players.length > 1) {
      this.startGameButton.enable();
    } else {
      this.startGameButton.disable();
    }
  }

  leaveGameAction() {
    clientSocket.emit('leave pending game');

    this.state.start('Menu');
  }

  startGameAction() {
    clientSocket.emit('start game');
  }

  launchGame(game) {
    this.state.start('GameLevel', true, false, game);
  }
}

export default PendingGame;
