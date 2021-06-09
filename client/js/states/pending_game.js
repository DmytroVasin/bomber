import { Text, TextButton, PlayerSlots } from '../helpers/elements.js';

class PendingGame extends Phaser.Scene {

  constructor () {
    super('PendingGame');
  }

  init({ game_id }) {
    this.socket=this.registry.get('socketIO');
    this.slotsWithPlayer = null;

    this.game_id = game_id;

    this.socket.emit('enter pending game', { game_id: this.game_id });
  }

  create() {
    let background = this.add.image(this.sys.canvas.clientWidth/2, this.sys.canvas.clientHeight/2, 'main_menu');
    background.setOrigin(0.5,0.5);

    new Text({
      game: this,
      x: this.sys.canvas.clientWidth/2,
      y: this.sys.canvas.clientHeight/2 - 215,
      text: '',
      style: {
        font: '35px Areal',
        fill: '#9ec0ba',
        stroke: '#7f9995',
        strokeThickness: 3
      }
    })

    this.startGameButton = new TextButton({
      game: this,
      x: this.sys.canvas.clientWidth/2 + 105,
      y: this.sys.canvas.clientHeight/2 + 195,
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
    this.startGameButton.disactivate();

    new TextButton({
      game: this,
      x: this.sys.canvas.clientWidth/2 - 105,
      y: this.sys.canvas.clientHeight/2 + 195,
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

    this.gameTitle = new Text({
      game: this,
      x: this.sys.canvas.clientWidth/2,
      y: this.sys.canvas.clientHeight/2 - 215,
      text: '',
      style: {
        font: '35px Areal',
        fill: '#9ec0ba',
        stroke: '#6f7975',
        strokeThickness: 3
      }
    })

    this.socket.on('update game', this.displayGameInfo.bind(this));
    this.socket.on('launch game', this.launchGame.bind(this));

  }

  displayGameInfo({ current_game }) {
    let players = Object.values(current_game.players);

    this.gameTitle.text = current_game.name

    if (this.slotsWithPlayer) {
      this.slotsWithPlayer.destroy()
    }

    if(players.length > 1) {
      this.startGameButton.activate();
    } else {
      this.startGameButton.disactivate();
    }

    this.slotsWithPlayer = new PlayerSlots({
      game: this,
      max_players: current_game.max_players,
      players: players,
      x: this.sys.canvas.clientWidth/2 - 174,
      y: this.sys.canvas.clientHeight/2 - 81,
      asset_empty: 'bomberman_head_blank',
      asset_player: 'bomberman_head_',
      style: {
        font: '20px Areal',
        fill: '#48291c'
      }
    })

  }

  leaveGameAction() {
    this.socket.emit('leave pending game');

    this.scene.start('Menu');
  }

  startGameAction() {
    this.socket.emit('start game');
  }

  launchGame(game) {
    this.scene.start('Play', game);
  }
}

export default PendingGame;
