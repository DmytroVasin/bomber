export default class Spoil extends Phaser.Sprite {

  constructor(game, spoil) {

    let spoil_type;
    if (spoil.spoil_type === 0) { // SPEED
      spoil_type = 0
    }
    if (spoil.spoil_type === 1) { // POWER
      spoil_type =  1
    }
    if (spoil.spoil_type === 2) { // CAPACITY
      spoil_type = 2
    }

    super(game, spoil.col * 35, spoil.row * 35, 'spoil_tiles', spoil_type);

    this.id = spoil.id

    this.row = spoil.row
    this.col = spoil.col

    this.spoil_type = spoil.spoil_type

    this.game.physics.arcade.enable(this);
  }

}
