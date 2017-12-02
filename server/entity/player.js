const { POWER, INITIAL_POWER, STEP_POWER } = require('../constants');

class Player {

  constructor({ id, color, spawn, spawnGrid }) {
    this.id = id;
    this.color = color;
    this.spawn = spawn;
    this.spawnGrid = spawnGrid;

    this.power = INITIAL_POWER;
  }

  pickSpoil(spoil_type) {
    if (spoil_type === POWER){
      this.power += STEP_POWER
    }
  }

}

exports.Player = Player;
