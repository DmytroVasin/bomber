export default class Spoil extends Phaser.Sprite {

  constructor(game, cell) {
    super(game, (cell.col * 35), (cell.row * 35), cell.type, 0);

    this.game = game

    this.animations.add('blast', [0, 1, 2, 3, 4]);

    // 15 - framerate, loop, kill_on_complete
    this.play('blast', 15, false, true);

    this.game.add.existing(this);
  }

}
