// https://github.com/cstuncsik/phaser-es6-demo/tree/master/src

import Info from './info';
import { SpoilNotification, Text } from '../helpers/elements';

const PING = 100 // - Need to be depended on positionUpdaterLoop
const TILE_SIZE = 35

const SPEED = 0
const POWER = 1
const DELAY = 2

const MAX_SPEED = 350
const STEP_SPEED = 50
const INITIAL_SPEED = 150

const MIN_DELAY = 500
const STEP_DELAY = 500
const INITIAL_DELAY = 2000

const INITIAL_POWER = 1
const STEP_POWER = 1

export default class Player extends Phaser.Sprite {

  constructor({ game, id, spawn, color }) {
    super(game, spawn.x, spawn.y, 'bomberman_' + color);

    this.game = game;
    this.id = id;

    this.prevPosition = { x: spawn.x, y: spawn.y };

    this.delay = INITIAL_DELAY;
    this.power = INITIAL_POWER;
    this.speed = INITIAL_SPEED;
    this._lastBombTime = 0;

    this.game.add.existing(this);
    this.game.physics.arcade.enable(this);
    this.body.setSize(20, 20, 0, 0);

    game.time.events.loop(PING , this.positionUpdaterLoop.bind(this));

    this.animations.add('up', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);
    this.animations.add('down', [8, 9, 10, 11, 12, 13, 14, 15], 15, true);
    this.animations.add('right', [16, 17, 18, 19, 20, 21, 22, 23], 15, true);
    this.animations.add('left', [24, 25, 26, 27, 28, 29, 30, 31], 15, true);

    this.info = new Info({ game: this.game, player: this });

    this.defineKeyboard()
    this.defineSelf()
  }

  update() {
    if (this.alive) {
      this.handleMoves()
      this.handleBombs()
    }

    this.game.debug.body(this);
    // this.game.debug.spriteInfo(this, 32, 32);
  }

  defineKeyboard() {
    this.upKey    = this.game.input.keyboard.addKey(Phaser.Keyboard.UP)
    this.downKey  = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
    this.leftKey  = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
    this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
  }

  handleMoves() {
    this.body.velocity.set(0);
    let animationsArray = []

    if (this.leftKey.isDown){
      this.body.velocity.x = -this.speed;
      animationsArray.push('left')
    } else if (this.rightKey.isDown) {
      this.body.velocity.x = this.speed;
      animationsArray.push('right')
    }

    if (this.upKey.isDown) {
      this.body.velocity.y = -this.speed;
      animationsArray.push('up')
    } else if (this.downKey.isDown) {
      this.body.velocity.y = this.speed;
      animationsArray.push('down')
    }

    let currentAnimation = animationsArray[0]
    if (currentAnimation){
      this.animations.play(currentAnimation)
      return
    }

    this.animations.stop();
  }

  handleBombs() {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      let now = this.game.time.now;

      if (now > this._lastBombTime) {
        this._lastBombTime = now + this.delay;

        clientSocket.emit('create bomb', { col: this.currentCol(), row: this.currentRow() });
      }
    }
  }

  currentCol() {
    return Math.floor(this.body.position.x / TILE_SIZE)
  }

  currentRow() {
    return Math.floor(this.body.position.y / TILE_SIZE)
  }

  positionUpdaterLoop() {
    let newPosition = { x: this.position.x, y: this.position.y }

    if (this.prevPosition.x !== newPosition.x || this.prevPosition.y !== newPosition.y) {
      clientSocket.emit('update player position', newPosition);
      this.prevPosition = newPosition;
    }
  }

  becomesDead() {
    this.info.showDeadInfo()
    this.kill();
  }

  pickSpoil( spoil_type ){
    if ( spoil_type === SPEED ){ this.increaseSpeed() }
    if ( spoil_type === POWER ){ this.increasePower() }
    if ( spoil_type === DELAY ){ this.increaseDelay() }

    // Play something
  }

  increaseSpeed(){
    let asset = 'speed_up_no_bonus'

    if (this.speed < MAX_SPEED) {
      this.speed = this.speed + STEP_SPEED;
      this.info.refreshStatistic();
      asset = 'speed_up_bonus'
    }

    new SpoilNotification({ game: this.game, asset: asset, x: this.position.x, y: this.position.y })
  }

  increaseDelay(){
    let asset = 'delay_up_no_bonus'

    if (this.delay > MIN_DELAY){
      this.delay -= STEP_DELAY;
      this.info.refreshStatistic();
      asset = 'delay_up_bonus'
    }

    new SpoilNotification({ game: this.game, asset: asset, x: this.position.x, y: this.position.y })
  }

  increasePower(){
    let asset = 'power_up_bonus'

    this.power += STEP_POWER;
    this.info.refreshStatistic();

    new SpoilNotification({ game: this.game, asset: asset, x: this.position.x, y: this.position.y })
  }

  defineSelf() {
    let playerText = new Text({
      game: this.game,
      x: 10,
      y: -10,
      text: 'Me',
      style: {
        font: '15px Areal',
        fill: '#FFFFFF'
      }
    })

    this.addChild(playerText);
  }
}
