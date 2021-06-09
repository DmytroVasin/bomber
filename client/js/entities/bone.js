import { TILE_SIZE } from '../utils/constants.js';

export default class Bone extends Phaser.GameObjects.Sprite {

  constructor(game, col, row) {
    super(game, (col * TILE_SIZE), (row * TILE_SIZE), 'bone_tileset');
  }

}
