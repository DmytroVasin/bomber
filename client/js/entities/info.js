export default class Info {

  constructor({ game, player }) {
    this.game = game;
    this.player = player;

    this.style    = { font: '14px Arial', fill: '#ffffff', align: 'left' }
    this.redStyle = { font: '30px Arial', fill: '#ff0044', align: 'center' };

    let bootsIcon  = new Phaser.Image(this.game, 5, 2, 'placeholder_speed');
    this.speedText = new Phaser.Text(this.game, 35, 7, this.speedLabel(), this.style);
    bootsIcon.addChild(this.speedText)
    this.game.add.existing(bootsIcon);

    let powerIcon  = new Phaser.Image(this.game, 110, 2, 'placeholder_power');
    this.powerText = new Phaser.Text(this.game, 35, 7, this.powerLabel(), this.style);
    powerIcon.addChild(this.powerText)
    this.game.add.existing(powerIcon);

    let delayIcon  = new Phaser.Image(this.game, 215, 2, 'placeholder_time');
    this.delayText = new Phaser.Text(this.game, 35, 7, this.delayLabel(), this.style);
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
    return this.player.speed
  }

  powerLabel() {
    return `x ${this.player.power}`
  }

  delayLabel() {
    return `${this.player.delay / 1000} sec.`
  }
}
