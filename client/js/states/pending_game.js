import { Text, TextButton, PlayerSlots } from '../helpers/elements';

class PendingGame extends Phaser.State {

  init(map_name) {
    this.map_name = map_name;
    this.slotsWithPlayer = null;
  }

  create() {
    let background = this.add.image(this.game.world.centerX, this.game.world.centerY, 'main_menu');
    background.anchor.setTo(0.5);

    this.gameTitle = new Text({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY - 215,
      text: 'NONAME GAME',
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

    let dummy_game = {
      name: 'Sun Game',
      max_players: 3,
      players: {
        uuid_1: { skin: 'Theodora' },
        uuid_2: { skin: 'Biarid' }
      }
    }
    this.displayGameInfo({ current_game: dummy_game })
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
    this.state.start('Menu');
  }

  startGameAction() {
    this.state.start('Play', true, false, this.map_name);
  }
}

export default PendingGame;
