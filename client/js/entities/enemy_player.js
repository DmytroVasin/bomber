export default class EnemyPlayer extends Phaser.Sprite {

  constructor(game, id, spawn, color) {
    super(game, spawn.x, spawn.y, 'bomberman_' + color);

    this.game = game
    this.id = id;

    this.position = spawn;

    this.x = spawn.x
    this.y = spawn.y

    this.facing = 'down';
    this.speed = 250;

    this.game.physics.arcade.enable(this);

    this.anchor.setTo(0.1, 0.6);
    this.body.setSize(20, 19, 5, 16);

    this.animations.add('up', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);
    this.animations.add('down', [8, 9, 10, 11, 12, 13, 14, 15], 15, true);
    this.animations.add('right', [16, 17, 18, 19, 20, 21, 22, 23], 15, true);
    this.animations.add('left', [24, 25, 26, 27, 28, 29, 30, 31], 15, true);

    this.game.add.existing(this);
  }

  update () {
    this.game.debug.body(this);
  }

  goTo(newPosition) {
    var time = 100 // - Need to be depended on positionUpdaterLoop

    var tween = this.game.add.tween(this).to(newPosition, time, Phaser.Easing.Linear.None, true);
  }
}
