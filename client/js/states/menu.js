import { Text, TextButton, GameSlots } from '../helpers/elements.js';

class Menu extends Phaser.Scene {

  constructor () {
      super('Menu');
  }

  init(data) {
    this.slotsWithGame = null;
    this.socket=this.registry.get('socketIO');

    this.socket.on('display pending games', this.displayPendingGames.bind(this));
  }

  create() {
    let background = this.add.image(this.sys.canvas.clientWidth/2, this.sys.canvas.clientHeight/2, 'main_menu');
    background.setOrigin(0.5,0.5);


    new Text({
      game: this,
      x: this.sys.canvas.clientWidth/2,
      y: this.sys.canvas.clientHeight/2 - 215,
      text: 'Main Menu',
      style: {
        font: '35px Areal',
        fill: '#9ec0ba',
        stroke: '#7f9995',
        strokeThickness: 3
      }
    })

    var button = new TextButton({
      game: this,
      x: this.sys.canvas.clientWidth/2,
      y: this.sys.canvas.clientHeight/2 + 195,
      asset:'buttons',
      callback: this.hostGameAction,
      callbackContext: this,
      upFrame: 0,
      overFrame:1,
      downFrame:2,
      outFrame:3,
      label: 'New Game',
      style: {
        font: '20px Areal',
        fill: '#000000'
      }
    });
    this.socket.emit('enter lobby', this.displayPendingGames.bind(this));

    this.model = this.registry.get('Model');
    if (!this.model.bgMusicPlaying === false && !(this.model.bgMusic=='bgMusic02')){
      this.sound.stopByKey(this.model.bgMusic);
      this.model.bgMusicPlaying = false;
      this.registry.set('Model', this.bgMusic);
    }
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic02', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.model.bgMusic='bgMusic02';
      this.registry.set('Model', this.model);
    }
  }

  update() {


  
  }

  hostGameAction() {
    this.socket.emit('leave lobby');
    this.scene.start('SelectMap');
  }

  displayPendingGames(availableGames) {
    // NOTE: That is not optimal way to preview slots,
    //       we should implement AddSlotToGroup, RemoveSlotFromGroup

    // I triying to care about readability, not about performance.
    if (this.slotsWithGame) {
      this.slotsWithGame.destroy()
    }

    this.slotsWithGame = new GameSlots({
      game: this,
      availableGames: availableGames,
      callback: this.joinGameAction,
      callbackContext: this,
      x: this.sys.canvas.clientWidth/2 - 220,
      y: this.sys.canvas.clientHeight/2 -100,
      style: {
        font: '35px Areal',
        fill: '#efefef',
        stroke: '#ae743a',
        strokeThickness: 3
      }
    });
  }

  joinGameAction(game_id) {
    this.socket.emit('leave lobby');
    console.log('Selected game: '+game_id.game_id);
    this.scene.start('PendingGame', game_id);
  }
}

export default Menu;
