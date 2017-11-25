const TILE_SIZE = 35
const explosion_time = 2000;

export default class Bomb extends Phaser.Sprite {

  constructor(game, id, col, row) {
    let centerCol = (col * TILE_SIZE) + TILE_SIZE / 2
    let centerRow = (row * TILE_SIZE) + TILE_SIZE / 2

    super(game, centerCol, centerRow, 'bomb');
    this.scale.setTo(0.7);
    this.anchor.setTo(0.5);

    this.game = game
    this.id = id;

    this.game.physics.arcade.enable(this);

    this.game.add.tween(this.scale).to({x: 1.2, y: 1.2}, explosion_time, Phaser.Easing.Linear.None, true);

    this.body.immovable = true;
    this.animations.add('bomb', [0, 1, 2], 3, true);
    this.animations.play('bomb');
  }

  update() {
    this.game.debug.body(this);
  }

}
