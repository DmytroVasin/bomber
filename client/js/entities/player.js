import {
  PING, TILE_SIZE, MAX_SPEED, STEP_SPEED, INITIAL_SPEED, SPEED, POWER, DELAY,
  MIN_DELAY, STEP_DELAY, INITIAL_DELAY, INITIAL_POWER, STEP_POWER
} from '../utils/constants.js';

import Info from './info.js';
import { SpoilNotification, Text } from '../helpers/elements.js';

export default class Player extends Phaser.GameObjects.Sprite {

  constructor({ game, id, spawn, skin }) {
    super(game, (spawn.x) + TILE_SIZE / 2, (spawn.y)  + TILE_SIZE / 2, 'bomberman_' + skin);

    this.game = game;
    this.id = id;

    this.prevPosition = { x: spawn.x, y: spawn.y };

    this.delay = INITIAL_DELAY;
    this.power = INITIAL_POWER;
    this.speed = INITIAL_SPEED;
    this._lastBombTime = 0;

    this.game.add.existing(this);
    this.game.physics.add.existing(this);
    this.body.pushable = false;

    this.setSize(20, 20);
    this.game.time.addEvent({
      delay: PING,                // ms
      callback: this.positionUpdaterLoop.bind(this),
      callbackScope: this,
      loop: true
    });

    //const anims=game.anims;
    console.log("Creating player "+skin+" ...");
    this.anims.create({key:'up', frames: this.anims.generateFrameNumbers('bomberman_' + skin, { start: 9, end: 11 }),  frameRate:15, repeat: -1});
    this.anims.create({key:'down', frames: this.anims.generateFrameNumbers('bomberman_' + skin, { start: 0, end: 2 }),  frameRate:15, repeat: -1});
    this.anims.create({key:'right', frames: this.anims.generateFrameNumbers('bomberman_' + skin, { start: 6, end: 8 }),  frameRate:15, repeat: -1});
    this.anims.create({key:'left', frames: this.anims.generateFrameNumbers('bomberman_' + skin, { start: 3, end: 5 }),  frameRate:15, repeat: -1});
    //this.anims=anims;

    this.info = new Info({ game: this.game, player: this });

    this.defineKeyboard()
    this.defineJoyStick()
    this.defineSelf(skin)
    this.socket=this.game.registry.get('socketIO');
    this.alive=true;
  }

  update() {
    if (this.alive) {
      this.handleMoves()
      this.handleBombs()
    }

  }

  defineKeyboard() {
    this.cursorKeys  = this.game.input.keyboard.createCursorKeys();
  }

  defineJoyStick() {
    this.joystickKey  = this.game.joystickKey;
  }

  handleMoves() {
    this.body.velocity.set(0);
    let animationsArray = []

    if (this.cursorKeys.left.isDown|| this.game.joystickKey.includes('left')){
      this.body.velocity.x = -this.speed;
      animationsArray.push('left')
    } else if (this.cursorKeys.right.isDown|| this.game.joystickKey.includes('right')) {
      this.body.velocity.x = this.speed;
      animationsArray.push('right')
    }

    if (this.cursorKeys.up.isDown|| this.game.joystickKey.includes('up')) {
      this.body.velocity.y = -this.speed;
      animationsArray.push('up')
    } else if (this.cursorKeys.down.isDown|| this.game.joystickKey.includes('down')) {
      this.body.velocity.y = this.speed;
      animationsArray.push('down')
    }

    let currentAnimation = animationsArray[0]
    if (currentAnimation){
      this.anims.play(currentAnimation)
      return
    }

    this.anims.stop();
  }

  handleBombs() {
    if (this.cursorKeys.space.isDown ||this.game.joystickButton01Key.includes('down')) {
      let now = this.game.time.now;

      if (now > this._lastBombTime) {
        this._lastBombTime = now + this.delay;

        this.socket.emit('create bomb', { col: this.currentCol(), row: this.currentRow() });
        this.game.joystickButton01Key='';
      }
    }
  }

  currentCol() {
    return Math.floor(this.body.x / TILE_SIZE)
  }

  currentRow() {
    return Math.floor(this.body.y / TILE_SIZE)
  }

  positionUpdaterLoop() {
    let newPosition = { x: this.x, y: this.y }

    if (this.prevPosition.x !== newPosition.x || this.prevPosition.y !== newPosition.y) {
      this.socket.emit('update player position', newPosition);
      this.prevPosition = newPosition;
    }
  }

  becomesDead() {
    this.alive=false;
    this.info.showDeadInfo()
    this.destroy();
  }

  pickSpoil( spoil_type ){
    if ( spoil_type === SPEED ){ this.increaseSpeed() }
    if ( spoil_type === POWER ){ this.increasePower() }
    if ( spoil_type === DELAY ){ this.increaseDelay() }
  }

  increaseSpeed(){
    let asset = 'speed_up_no_bonus'

    if (this.speed < MAX_SPEED) {
      this.speed = this.speed + STEP_SPEED;
      this.info.refreshStatistic();
      asset = 'speed_up_bonus'
    }

    new SpoilNotification({ game: this.game, asset: asset, x: this.x, y: this.y })
  }

  increaseDelay(){
    let asset = 'delay_up_no_bonus'

    if (this.delay > MIN_DELAY){
      this.delay -= STEP_DELAY;
      this.info.refreshStatistic();
      asset = 'delay_up_bonus'
    }

    new SpoilNotification({ game: this.game, asset: asset, x: this.x, y: this.y })
  }

  increasePower(){
    let asset = 'power_up_bonus'

    this.power += STEP_POWER;
    this.info.refreshStatistic();

    new SpoilNotification({ game: this.game, asset: asset, x: this.x, y: this.y })
  }

  defineSelf(name) {
    let playerText = new Text({
      game: this.game,
      x: TILE_SIZE / 2,
      y: -10,
      text: `\u272E ${name} \u272E`,
      style: {
        font: '15px Areal',
        fill: '#FFFFFF',
          stroke: '#000000',
          strokeThickness: 3
      }
    })

    this.game.add.existing(playerText);
  }
}
