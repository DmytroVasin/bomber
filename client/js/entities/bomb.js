export default class EnemyPlayer extends Phaser.Sprite {

  constructor(game, id, x, y) {
    super(game, x, y, 'bomb');

    this.game = game
    this.id = id;

    this.anchor.setTo(0.5);

    this.game.physics.arcade.enable(this);

    this.body.immovable = true;

    // WTF???????
    this.sizeTween = this.game.add.tween(this.scale).to({x: 1.2, y: 1.2}, 700, Phaser.Easing.Default, true, 0, true, true);
    this.animations.add('bomb',[0,1,2],1.5,true);
    this.animations.play('bomb');

    this.game.add.existing(this);
  }

}
