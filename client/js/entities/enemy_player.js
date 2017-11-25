const INITIAL_SPEED = 150
const PING = 100

export default class EnemyPlayer extends Phaser.Sprite {

  constructor({game, id, spawn, color}) {
    super(game, spawn.x, spawn.y, 'bomberman_' + color);

    this.game = game
    this.id = id;

    this.x = spawn.x
    this.y = spawn.y

    this.speed = INITIAL_SPEED;

    this.lastMoveAt = 0;

    this.game.add.existing(this);
    this.game.physics.arcade.enable(this);
    this.body.setSize(20, 20, 0, 0);
    this.body.immovable = true;

    this.animations.add('up', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);
    this.animations.add('down', [8, 9, 10, 11, 12, 13, 14, 15], 15, true);
    this.animations.add('right', [16, 17, 18, 19, 20, 21, 22, 23], 15, true);
    this.animations.add('left', [24, 25, 26, 27, 28, 29, 30, 31], 15, true);
  }

  update () {
    this.game.debug.body(this);
  }

  goTo({x, y, faceDirection}) {
    this.lastMoveAt = this.game.time.now;

    this.animations.play(faceDirection)

    this.game.add.tween(this).to({x: x, y: y}, PING, Phaser.Easing.Linear.None, true);
  }
}
