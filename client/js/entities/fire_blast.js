import { TILE_SIZE } from '../utils/constants.js';

export default class FireBlast extends Phaser.GameObjects.Sprite {

  constructor(game, cell) {
    super(game, (cell.col * TILE_SIZE) + TILE_SIZE / 2, (cell.row * TILE_SIZE) + TILE_SIZE / 2, cell.type, 0);

    this.game = game

    const anims=game.anims;
    anims.create({key:'blast', frames: anims.generateFrameNumbers(cell.type, { start: 0, end: 4 }),  frameRate:15, repeat: -1, hideOnComplete:false});
    this.anims.play('blast');

    //this.game.physics.arcade.enable(this);
    this.game.add.existing(this);
    this.game.physics.add.existing(this);

    this.game.time.addEvent({
      delay: 100,                // ms
      callback: this.destroy.bind(this),
      callbackScope: this,
      loop: false
    });

  }

}
