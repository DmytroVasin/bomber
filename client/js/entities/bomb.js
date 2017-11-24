const explosion_time = 2000;

export default class Bomb extends Phaser.Sprite {

  constructor(game, id, x, y) {
    super(game, x, y, 'bomb');
    this.scale.setTo(0.7);

    this.game = game
    this.id = id;

    this.anchor.setTo(0.5);

    this.game.physics.arcade.enable(this);

    this.body.immovable = true;
    // DO WE NEED ".tween"?
    this.tween = this.game.add.tween(this.scale).to({x: 1.2, y: 1.2}, explosion_time, Phaser.Easing.Linear.None, true);

    this.animations.add('bomb', [0, 1, 2], 3, true);
    this.animations.play('bomb');

    // WHAT IS THAT ????
    this.game.add.existing(this);
  }

}
