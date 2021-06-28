import { Text } from '../helpers/elements.js';
import {Model} from '../helpers/Model.js';

export class Boot extends Phaser.Scene {

  create() {
    // Make the game keep reacting to messages from the server even when the game window doesn’t have focus.
    // The game pauses when I open a new tab in the same window, but does not pause when I focus on another application

    new Text({
      game: this,
      x: this.sys.canvas.clientWidth/2,
      y: this.sys.canvas.clientHeight/2,
      text: 'Loading...',
      style: {
        font: '30px Areal',
        fill: '#FFFFFF',
        align: 'center'
      }
    })
  }

  create() {
    console.log('Start Boot.create');
    this.registry.set('Model', new Model());
    this.registry.set('socketIO', io());
    this.scene.start('Preload');
    console.log('End  Boot.create');
  }

}

export default Boot;
