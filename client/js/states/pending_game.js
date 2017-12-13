import { Text, TextButton, PlayerSlots } from '../helpers/elements';

class PendingGame extends Phaser.State {

  init({ game_id }) {
    this.game_id = game_id;
    this.slotsWithPlayer = null;

    clientSocket.on('update game', this.displayGameInfo.bind(this));
    clientSocket.on('launch game', this.launchGame.bind(this));

    clientSocket.emit('enter pending game', { game_id: this.game_id });
  }

  create() {
    let background = this.add.image(this.game.world.centerX, this.game.world.centerY, 'main_menu');
    background.anchor.setTo(0.5);

    this.gameTitle = new Text({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY - 215,
      text: '',
      style: {
        font: '35px Areal',
        fill: '#9ec0ba',
        stroke: '#6f7975',
        strokeThickness: 3
      }
    })

    this.startGameButton = new TextButton({
      game: this.game,
      x: this.game.world.centerX + 105,
      y: this.game.world.centerY + 195,
      asset: 'buttons',
      callback: this.startGameAction,
      callbackContext: this,
      overFrame: 1,
      outFrame: 0,
      downFrame: 2,
      upFrame: 0,
      label: 'Start Game',
      style: {
        font: '20px Areal',
        fill: '#000000'
      }
    });

    this.startGameButton.disable()

    new TextButton({
      game: this.game,
      x: this.game.world.centerX - 105,
      y: this.game.world.centerY + 195,
      asset: 'buttons',
      callback: this.leaveGameAction,
      callbackContext: this,
      overFrame: 1,
      outFrame: 0,
      downFrame: 2,
      upFrame: 0,
      label: 'Leave Game',
      style: {
        font: '20px Areal',
        fill: '#000000'
      }
    });
  }

  displayGameInfo({ current_game }) {
    let players = Object.values(current_game.players);

    this.gameTitle.text = current_game.name

    if (this.slotsWithPlayer) {
      this.slotsWithPlayer.destroy()
    }

    this.slotsWithPlayer = new PlayerSlots({
      game: this.game,
      max_players: current_game.max_players,
      players: players,
      x: this.game.world.centerX - 245,
      y: this.game.world.centerY - 80,
      asset_empty: 'bomberman_head_blank',
      asset_player: 'bomberman_head_',
      style: {
        font: '20px Areal',
        fill: '#48291c'
      }
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
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log(game)
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    this.state.start('Play', true, false, game);
  }
}

export default PendingGame;
