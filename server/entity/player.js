const { POWER, CAPACITY } = require('../constants');

class Player {

  constructor(id, color, spawnPosition) {
    this.spawnPosition = spawnPosition;
    this.id = id;
    this.color = color;

    this.power = 1;
    this.capacity = 1;
  }

  pickSpoil(spoil_type) {
    if (spoil_type === POWER){
      this.power += 1
    }

    if (spoil_type === CAPACITY){
      this.capacity += 1
    }
  }
}

exports.Player = Player;
