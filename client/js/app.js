import Boot from './states/boot';

class Game extends Phaser.Game {
  constructor() {
    super(980, 630, Phaser.AUTO, 'game-container');

    this.state.add('Boot',         Boot);

    this.state.start('Boot');
  }
}

new Game();
