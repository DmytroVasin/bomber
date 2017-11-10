// https://github.com/lean/phaser-es6-webpack/blob/master/src/sprites/Mushroom.js
// https://github.com/cstuncsik/phaser-es6-demo/tree/master/src

var DEFAULT_PLAYER_SPEED = 250;

var Player = function (id, x, y, color) {
  Phaser.Sprite.call(this, gggggame, x, y, "bomberman_" + color);

  this.spawnPoint = {x: x, y: y};
  this.id = id;
  this.facing = "down";
  this.bombButtonJustPressed = false;
  this.speed = DEFAULT_PLAYER_SPEED;

  gggggame.physics.enable(this, Phaser.Physics.ARCADE);

  this.anchor.setTo(0.1, 0.6);
  this.body.setSize(20, 19, 5, 16);

  this.animations.add('up', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);
  this.animations.add('down', [8, 9, 10, 11, 12, 13, 14, 15], 15, true);
  this.animations.add('right', [16, 17, 18, 19, 20, 21, 22, 23], 15, true);
  this.animations.add('left', [24, 25, 26, 27, 28, 29, 30, 31], 15, true);

  gggggame.add.existing(this);
}

Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.handleInput = function () {
  this.handleMotionInput();
}

Player.prototype.handleMotionInput = function () {
  this.body.velocity.set(0);

  if (gggggame.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
    this.body.velocity.x = -this.speed;
    this.play('left');
  } else if (gggggame.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
    this.body.velocity.x = this.speed;
    this.play('right');
  } else if (gggggame.input.keyboard.isDown(Phaser.Keyboard.UP)) {
    this.body.velocity.y = -this.speed;
    this.play('up');
  } else if (gggggame.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
    this.body.velocity.y = this.speed;
    this.play('down')
  } else {
    this.animations.stop();
  }
}


module.exports = Player;
