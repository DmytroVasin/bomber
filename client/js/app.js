// https://github.com/cstuncsik/phaser-es6-demo/tree/master/src

import Boot from './states/boot';
import Preload from './states/preload';
import Menu from './states/menu';
import SelectMap from './states/select_map';
import PendingGame from './states/pending_game';
import Play from './states/play';
import Win from './states/win';

class Game extends Phaser.Game {
  constructor() {
    super(980, 630, Phaser.AUTO, 'game-container');

    this.state.add('Boot',         Boot);
    this.state.add('Preload',      Preload);
    this.state.add('Menu',         Menu);
    this.state.add('SelectMap',    SelectMap);
    this.state.add('PendingGame',  PendingGame);
    this.state.add('Play',         Play);
    this.state.add('Win',          Win);

    this.state.start('Boot');
  }
}

new Game();
