import { TILE_SIZE } from '../utils/constants.js';

export default class Info {

  constructor({ game, player }) {
    this.game = game;
    this.player = player;

    this.style    = { font: '14px Arial', fill: '#ffffff', align: 'left' }
    this.redStyle = { font: '30px Arial', fill: '#ff0044', align: 'center' };

    let bootsIcon  = this.game.add.image(TILE_SIZE*2, TILE_SIZE / 2, 'placeholder_speed');
    this.speedText = this.game.add.text(TILE_SIZE*2, TILE_SIZE / 4, this.speedLabel(), this.style);
    this.game.add.existing(bootsIcon);
    this.game.add.existing(this.speedText);

    let powerIcon  = this.game.add.image(TILE_SIZE*5, TILE_SIZE / 2, 'placeholder_power');
    this.powerText = this.game.add.text(TILE_SIZE*5, TILE_SIZE / 4, this.powerLabel(), this.style);
    this.game.add.existing(powerIcon);
    this.game.add.existing(this.powerText);

    let delayIcon  = this.game.add.image(TILE_SIZE*8, TILE_SIZE / 2, 'placeholder_time');
    this.delayText = this.game.add.text(TILE_SIZE*8, TILE_SIZE / 4, this.delayLabel(), this.style);
    this.game.add.existing(delayIcon);
    this.game.add.existing(this.delayText);

    this.deadText = this.game.add.text(this.game.sys.canvas.clientWidth/2, this.game.sys.canvas.clientWidth/2 - 30, 'You died :(', this.redStyle);
    this.deadText.setOrigin(0.5,0.5);
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
