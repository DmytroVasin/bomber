const TILE_SIZE = 35

export default class Bone extends Phaser.Sprite {

  constructor(game, col, row) {
    super(game, (col * TILE_SIZE), (row * TILE_SIZE), 'bone', 0);

    this.game.add.existing(this);
  }

}
