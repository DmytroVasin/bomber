import { SPEED, POWER, DELAY, TILE_SIZE } from '../utils/constants.js';

export default class Spoil extends Phaser.GameObjects.Sprite {

  constructor(game, spoil) {

    let spoil_type;
    if (spoil.spoil_type === DELAY) {
      spoil_type = 0
    }
    if (spoil.spoil_type === POWER) {
      spoil_type =  1
    }
    if (spoil.spoil_type === SPEED) {
      spoil_type = 2
    }

    super(game, (spoil.col * TILE_SIZE)+ TILE_SIZE / 2, (spoil.row * TILE_SIZE)+ TILE_SIZE / 2, 'spoil_tileset', spoil_type);

    this.id = spoil.id

    game.add.existing(this);
    game.physics.add.existing(this);
  }

}
