import { AVAILABLE_MAPS } from '../utils/constants.js';
import { Text, TextButton, MapSlider } from '../helpers/elements.js';

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

class SelectMap extends Phaser.Scene {

  constructor () {
    super('SelectMap');
  }

  preload() { 
    this.load.scenePlugin({
        key: 'rexuiplugin',
        url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
        sceneKey: 'rexUI',
        visible: false
    });     
  }

  init() {
    this.socket=this.registry.get('socketIO');
  }

  create() {


    this.container = this.add.container(0, 0);
    
    var img= this.add.image(this.sys.canvas.clientWidth/2, this.sys.canvas.clientHeight/2, 'main_menu')
      .setOrigin(0.5,0.5);

    this.container.add(img);

    var txt= new Text({
      game: this,
      x: this.sys.canvas.clientWidth/2,
      y: this.sys.canvas.clientHeight/2 - 215,
      text: 'Select Map',
      style: {
        font: '35px Areal',
        fill: '#9ec0ba',
        stroke: '#6f7975',
        strokeThickness: 3
      }
    });

    this.container.add(txt);

    this.selectedMap='hot_map';

    var button = new TextButton({
      game: this,
      x: this.sys.canvas.clientWidth/2,
      y: this.sys.canvas.clientHeight/2 + 195,
      asset:'check_icon',
      callback: this.confirmStageSelection,
      callbackContext: this,
      upFrame: 0,
      overFrame:1,
      downFrame:2,
      outFrame:3,
      label: '',
      style: {
        font: '20px Areal',
        fill: '#000000'
      }
    });
 
    this.container.add(button);
    
    this.mapSlider = new MapSlider({
      scene: this,
      x: this.sys.canvas.clientWidth/2,
      y: this.sys.canvas.clientHeight/2
    });

  }  

  confirmStageSelection() {
    this.socket.emit('create game', this.selectedMap, this.joinToNewGame.bind(this));
  };

  joinToNewGame(game_id) {
    this.mapSlider.destroy();
    this.scene.start('PendingGame', game_id);
  };

  update() {}

}

export default SelectMap;
