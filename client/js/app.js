// https://github.com/cstuncsik/phaser-es6-demo/tree/master/src

import Boot from './states/boot';
import Preload from './states/preload';
import Menu from './states/menu';
import SelectMap from './states/select_map';
import PendingGame from './states/pending_game';
import GameLevel from './states/game_level';

class Game extends Phaser.Game {
  constructor() {
    super(875, 525, Phaser.AUTO);

    this.state.add('Boot',         Boot);
    this.state.add('Preload',      Preload);
    this.state.add('Menu',         Menu);
    this.state.add('SelectMap',    SelectMap);
    this.state.add('PendingGame',  PendingGame);
    this.state.add('GameLevel',    GameLevel);

    this.state.start('Boot');
  }
}

new Game();
window.clientSocket = io.connect();
