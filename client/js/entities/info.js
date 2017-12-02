export default class Info {

  constructor({ game, player }) {
    this.game = game;
    this.player = player;

    this.style    = { font: '20px Arial', fill: '#ffffff', align: 'left' }
    this.redStyle = { font: '30px Arial', fill: '#ff0044', align: 'center' };

    let bootsIcon  = new Phaser.Image(this.game, 10, 10, 'speed');
    this.speedText = new Phaser.Text(this.game, 37, 3, this.speedLabel(), this.style);
    bootsIcon.addChild(this.speedText)
    this.game.add.existing(bootsIcon);

    let powerIcon  = new Phaser.Image(this.game, 110, 10, 'delay');
    this.powerText = new Phaser.Text(this.game, 37, 3, this.powerLabel(), this.style);
    powerIcon.addChild(this.powerText)
    this.game.add.existing(powerIcon);

    let delayIcon  = new Phaser.Image(this.game, 185, 10, 'power');
    this.delayText = new Phaser.Text(this.game, 37, 3, this.delayLabel(), this.style);
    delayIcon.addChild(this.delayText)
    this.game.add.existing(delayIcon);

    this.deadText = this.game.add.text(this.game.world.centerX, this.game.world.height - 30, 'You died :(', this.redStyle);
    this.deadText.anchor.set(0.5);
    this.deadText.visible = false
  }

  refreshStatistic() {
    this.speedText.text = this.speedLabel();
    this.powerText.text = this.powerLabel();
    this.delayText.text = this.delayLabel();
  }

  showDeadInfo() {
    this.deadText.visible = true
  }

  speedLabel() {
    return `x ${this.player.speed}`
  }

  powerLabel() {
    return `x ${this.player.power}`
  }

  delayLabel() {
    return `x ${this.player.delay / 1000} sec.`
  }
}
