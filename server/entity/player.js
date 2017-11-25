const { TILE_SIZE, POWER } = require('../constants');

class Player {

  constructor(id, color, spawnPosition) {
    this.spawnPosition = spawnPosition;
    this.id = id;
    this.color = color;

    this.power = 1;
    // this.delay = 1;
    // THIS ALL SET UP in "updatePlayerPosition"
    // DO WE HAVVE this.x this.y???
    // DOP WE NEED ? faceDirection
  }

  pickSpoil(spoil_type) {
    if (spoil_type === POWER){
      this.power += 1
    }
  }

  currentCol() {
    console.log('--------------------------------------')
    console.log(this.x)
    console.log(this.y)
    console.log('--------------------------------------')
    return Math.floor(this.x / TILE_SIZE)
  }

  currentRow() {
    return Math.floor(this.y / TILE_SIZE)
  }

}

exports.Player = Player;
