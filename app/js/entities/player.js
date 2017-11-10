// https://github.com/cstuncsik/phaser-es6-demo/tree/master/src

export default class Player extends Phaser.Sprite {

  constructor(game, id, xSpawn, ySpawn, color) {
    super(game, xSpawn, ySpawn, 'bomberman_' + color);

    this.game = game
    this.id = id;
    this.spawnPoint = {xSpawn: xSpawn, ySpawn: ySpawn};
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
    this.body.velocity.set(0);

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.body.velocity.x = -this.speed;
      this.play('left');
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.body.velocity.x = this.speed;
      this.play('right');
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      this.body.velocity.y = -this.speed;
      this.play('up');
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      this.body.velocity.y = this.speed;
      this.play('down')
    } else {
      this.animations.stop();
    }


    console.log('--------------')
    this.game.debug.body(this);
  }
}
