import { TILE_SIZE, EXPLOSION_TIME } from '../utils/constants.js';

export default class Bomb extends Phaser.GameObjects.Sprite {

  constructor(game, id, col, row) {
    super(game, (col * TILE_SIZE) + TILE_SIZE / 2, (row * TILE_SIZE) + TILE_SIZE / 2, 'bomb_tileset');
    this.game = game
    this.id = id;

    this.game.add.existing(this);
    this.game.physics.add.existing(this);
    this.body.pushable = false;

    this.tween = this.game.tweens.add({
      targets: this,
      scale: { to: { x: 1.2, y: 1.2 } },
      alpha: { value: 0, duration: 5000, ease: 'Power1', delay: 600 },
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1,
      repeatDelay: 1000,
      hold: 1000,
      duraton: EXPLOSION_TIME
    });

    const anims=game.anims;
    anims.create({key:'bomb', frames: anims.generateFrameNumbers('bomb_tileset', { start: 0, end: 13 }),  frameRate:6, repeat: -1});

    this.anims.play('bomb');
    this.tween.play();
  }

  update() {

  }

}
