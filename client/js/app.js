import Boot from './states/boot.js';
import Preload from './states/preload.js';
import Menu from './states/menu.js';
import SelectMap from './states/select_map.js';
import PendingGame from './states/pending_game.js';
import Play from './states/play.js';
import Win from './states/win.js';

var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 980,
  height: 630,
  pixelArt: false,
  audio: {
    noAudio: false
  },
  scale: {
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [Boot, Preload, Menu, SelectMap, PendingGame, Play, Win],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  }

};

var game = new Phaser.Game(config);