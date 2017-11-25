export default class Info {

  constructor({ game, player }) {
    this.game = game;
    this.player = player;

    this.style = { font: '20px Arial', fill: '#ffffff', align: 'left' }

    this.speedText = this.game.add.text(32, 432, this.speedLabel(), this.style);
    this.powerText = this.game.add.text(32, 464, this.powerLabel(), this.style);
    this.delayText = this.game.add.text(32, 496, this.delayLabel(), this.style);
  }

  refreshStatistic() {
    this.speedText.text = this.speedLabel();
    this.powerText.text = this.powerLabel();
    this.delayText.text = this.delayLabel();
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
