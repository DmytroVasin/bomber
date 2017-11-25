const SPEED = 0
const POWER = 1
const DELAY = 2
const TILE_SIZE = 35

export default class Spoil extends Phaser.Sprite {

  constructor(game, spoil) {

    let spoil_type;
    if (spoil.spoil_type === SPEED) {
      spoil_type = 0
    }
    if (spoil.spoil_type === POWER) {
      spoil_type =  1
    }
    if (spoil.spoil_type === DELAY) {
      spoil_type = 2
    }

    super(game, (spoil.col * TILE_SIZE), (spoil.row * TILE_SIZE), 'spoil_tiles', spoil_type);

    this.id = spoil.id

    this.game.physics.arcade.enable(this);
  }

}
