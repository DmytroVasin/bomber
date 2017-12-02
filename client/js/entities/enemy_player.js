const PING = 100

export default class EnemyPlayer extends Phaser.Sprite {

  constructor({ game, id, spawn, color }) {
    super(game, spawn.x, spawn.y, 'bomberman_' + color);

    this.game = game
    this.id = id;

    this.currentPosition = spawn;

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

  goTo(newPosition) {
    this.lastMoveAt = this.game.time.now;

    this.animateFace(newPosition);

    this.game.add.tween(this).to(newPosition, PING, Phaser.Easing.Linear.None, true);
  }

  animateFace(newPosition) {
    let face = 'down';
    let diffX = newPosition.x - this.currentPosition.x;
    let diffY = newPosition.y - this.currentPosition.y;

    if (diffX < 0) {
      face = 'left'
    } else if (diffX > 0) {
      face = 'right'
    } else if (diffY < 0) {
      face = 'up'
    } else if (diffY > 0) {
      face = 'down'
    }

    this.animations.play(face)
    this.currentPosition = newPosition;
  }
}
