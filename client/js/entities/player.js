// https://github.com/cstuncsik/phaser-es6-demo/tree/master/src

export default class Player extends Phaser.Sprite {

  constructor(game, id, spawn, color) {
    super(game, spawn.x, spawn.y, 'bomberman_' + color);

    this.game = game
    this.id = id;

    this.position = spawn;
    this.prevPosition = {x: 0, y: 0}; // new Phaser.Point

    this.delay = 2000;
    this.power = 1; //we do not use it!
    this.speed = 150;
    this.faceDirection = 'down';
    this._lastBombTime = 0;

    this.game.physics.arcade.enable(this);

    this.body.setSize(20, 20, 0, 0);

    this.animations.add('up', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);
    this.animations.add('down', [8, 9, 10, 11, 12, 13, 14, 15], 15, true);
    this.animations.add('right', [16, 17, 18, 19, 20, 21, 22, 23], 15, true);
    this.animations.add('left', [24, 25, 26, 27, 28, 29, 30, 31], 15, true);

    // WHY WE NEED THAT ???
    this.game.add.existing(this);

    game.time.events.loop(100 , this.positionUpdaterLoop, this);
  }

  update () {
    this.handleMoves()
    this.handleBombs()
    this.drawStatistic()
  }

  handleMoves () {
    this.body.velocity.set(0);

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.body.velocity.x = -this.speed;
      this.animations.play('left');
      this.faceDirection = 'left';
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.body.velocity.x = this.speed;
      this.animations.play('right');
      this.faceDirection = 'right';
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      this.body.velocity.y = -this.speed;
      this.animations.play('up');
      this.faceDirection = 'up';
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      this.body.velocity.y = this.speed;
      this.animations.play('down')
      this.faceDirection = 'down';
    } else {
      this.animations.stop();
    }

    this.game.debug.body(this);
  }

  handleBombs() {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      let now = this.game.time.now;

      if (now > this._lastBombTime) {
        this._lastBombTime = now + this.delay;

        clientSocket.emit('create bomb', { x: this.body.position.x, y: this.body.position.y });
      }
    }
  }

  positionUpdaterLoop() {
    // If position changed - we should send notification.
    let newPosition = { x: this.position.x, y: this.position.y, faceDirection: this.faceDirection }

    if (this.prevPosition.x !== newPosition.x || this.prevPosition.y !== newPosition.y) {
      clientSocket.emit('update player position', newPosition);
      this.prevPosition = newPosition;
    }
  }

  pickSpoil(spoil_type){
    // increase SPEED
    if (spoil_type === 0){
      this.increaseSpeed()
    }

    // increase DELAY
    if (spoil_type === 2){
      this.increaseDelay()
    }

    // DRAW something or play something
  }

  increaseSpeed(){
    if (this.speed < 300) {
      this.speed = this.speed + 50
    }
  }

  increaseDelay(){
    if (this.delay > 500){
      this.delay -= 500
    }
  }

  drawStatistic() {
    // https://phaser.io/examples/v2/games/breakout

    // this.speedText = this.game.add.text(32, 432, 'Speed: '+this.speed, { font: "20px Arial", fill: "#ffffff", align: "left" });
    // this.powerText = this.game.add.text(32, 464, 'Power: '+this.power, { font: "20px Arial", fill: "#ffffff", align: "left" });
    // this.delayText = this.game.add.text(32, 496, 'Bomb Delay: '+this.delay, { font: "20px Arial", fill: "#ffffff", align: "left" });
  }
}
