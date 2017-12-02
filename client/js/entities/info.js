export default class Info {

  constructor({ game, player }) {
    this.game = game;
    this.player = player;

    this.style = { font: '20px Arial', fill: '#ffffff', align: 'left' }
    this.redStyle = { font: '30px Arial', fill: '#ff0044', align: 'center' };

    this.speedText = this.game.add.text(32, 432, this.speedLabel(), this.style);
    this.powerText = this.game.add.text(32, 464, this.powerLabel(), this.style);
    this.delayText = this.game.add.text(32, 496, this.delayLabel(), this.style);

    this.deadText  = this.game.add.text(this.game.world.centerX, this.game.world.height - 30, 'You died :(', this.redStyle);
    this.deadText.anchor.set(0.5);
    this.deadText.visible = false
  }

  refreshStatistic() {
    this.speedText.text = this.speedLabel();
    this.powerText.text = this.powerLabel();
    this.delayText.text = this.delayLabel();
  }

  showDeadInfo() {
    this.speedText.destroy()
    this.powerText.destroy()
    this.delayText.destroy()

    this.deadText.visible = true
  }


  speedLabel() {
    return `Speed: ${this.player.speed}`
  }

  powerLabel() {
    return `Power: ${this.player.power}`
  }

  delayLabel() {
    return `Bomb Delay: ${this.player.delay}`
  }
}
