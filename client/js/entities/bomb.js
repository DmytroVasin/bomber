import { TILE_SIZE, EXPLOSION_TIME } from '../utils/constants';

export default class Bomb extends Phaser.Sprite {

  constructor(game, id, col, row) {
    let centerCol = (col * TILE_SIZE) + TILE_SIZE / 2
    let centerRow = (row * TILE_SIZE) + TILE_SIZE / 2

    super(game, centerCol, centerRow, 'bomb_tileset');
    this.scale.setTo(0.7);
    this.anchor.setTo(0.5);

    this.game = game
    this.id = id;

    this.game.physics.arcade.enable(this);

    this.game.add.tween(this.scale).to({ x: 1.2, y: 1.2 }, EXPLOSION_TIME, Phaser.Easing.Linear.None, true);

    this.body.immovable = true;
    // TODO: https://phaser.io/docs/2.4.4/Phaser.AnimationManager.html#add
    this.animations.add('bomb', [0,1,2,3,4,5,6,7,8,9,10,11,12,13], 6, true);
    this.animations.play('bomb');
  }

  update() {
    this.game.debug.body(this);
  }

}
