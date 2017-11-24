const TILE_SIZE = 35

export default class FireBlast extends Phaser.Sprite {

  constructor(game, cell) {
    super(game, (cell.col * TILE_SIZE), (cell.row * TILE_SIZE), cell.type, 0);

    this.game = game

    this.animations.add('blast', [0, 1, 2, 3, 4]);

    // 15 - framerate, loop, kill_on_complete
    this.play('blast', 15, false, true);

    this.game.physics.arcade.enable(this);
  }

}
