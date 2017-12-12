const { POWER, INITIAL_POWER, STEP_POWER } = require('../constants');

class Player {

  constructor({ id, skin, spawn, spawnOnGrid }) {
    this.id          = id;
    this.skin        = skin;
    this.spawn       = spawn;
    this.spawnOnGrid = spawnOnGrid;

    this.isAlive = true;

    this.power = INITIAL_POWER;
  }

  // pickSpoil(spoil_type) {
  //   if (spoil_type === POWER){
  //     this.power += STEP_POWER
  //   }
  // }

  // dead() {
  //   this.isAlive = false;
  // }

}

exports.Player = Player;
