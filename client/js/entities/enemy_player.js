import { TILE_SIZE, PING } from '../utils/constants.js';
import { Text } from '../helpers/elements.js';

export default class EnemyPlayer extends Phaser.GameObjects.Sprite {

  constructor({ game, id, spawn, skin }) {
    super(game, (spawn.x) + TILE_SIZE / 2, (spawn.y)  + TILE_SIZE / 2, 'bomberman_' + skin);

    this.game = game
    this.id = id;

    this.currentPosition = spawn;
    this.lastMoveAt = 0;
    
    this.game.add.existing(this);
    this.game.physics.add.existing(this);
    this.body.pushable = false;
    this.setSize(20, 20);

    const anims=game.anims;
    anims.create({key:'up', frames: anims.generateFrameNumbers('bomberman_' + skin, { start: 9, end: 11 }),  frameRate:15, repeat: -1});
    anims.create({key:'down', frames: anims.generateFrameNumbers('bomberman_' + skin, { start: 0, end: 2 }),  frameRate:15, repeat: -1});
    anims.create({key:'right', frames: anims.generateFrameNumbers('bomberman_' + skin, { start: 6, end: 8 }),  frameRate:15, repeat: -1});
    anims.create({key:'left', frames: anims.generateFrameNumbers('bomberman_' + skin, { start: 3, end: 5 }),  frameRate:15, repeat: -1});


    this.defineSelf(skin)
  }

  update () {

  }

  goTo(newPosition) {
    this.lastMoveAt =  this.game.time.now;

    this.animateFace(newPosition);

     this.tween = this.game.tweens.add({
      targets: this,
      x: newPosition.x,
      y: newPosition.y,
      duration: PING
    });
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

    this.anims.play(face)
    this.currentPosition = newPosition;
  }

  defineSelf(name) {
    let playerText = new Text({
      game: this.game,
      x: TILE_SIZE / 2,
      y: -10,
      text: name,
      style: {
        font: '14px Areal',
        fill: '#FFFFFF',
          stroke: '#000000',
          strokeThickness: 3
      }
    })

    this.game.add.existing(playerText);
  }
}
