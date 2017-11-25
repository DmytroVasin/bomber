const { TILE_SIZE, POWER, INITIAL_POWER, STEP_POWER } = require('../constants');

class Player {

  constructor(id, color, spawnPosition) {
    this.spawnPosition = spawnPosition;
    this.id = id;
    this.color = color;

    this.power = INITIAL_POWER;
  }

  pickSpoil(spoil_type) {
    if (spoil_type === POWER){
      this.power += STEP_POWER
    }
  }

  currentCol() {
    return Math.floor(this.x / TILE_SIZE)
  }

  currentRow() {
    return Math.floor(this.y / TILE_SIZE)
  }

}

exports.Player = Player;
