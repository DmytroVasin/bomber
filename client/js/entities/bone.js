import { TILE_SIZE } from '../utils/constants.js';

export default class Bone extends Phaser.GameObjects.Sprite {

  constructor(game, col, row) {
    super(game, col * TILE_SIZE+ TILE_SIZE/ 2, row*TILE_SIZE  + TILE_SIZE / 2, 'bone_tileset');
    this.game=game;
    this.game.add.existing(this);
  }

}
