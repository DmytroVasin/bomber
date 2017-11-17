var uuidv4 = require('uuid/v4');

const explosion_time = 2000

class Bomb {

  constructor(coordinates) {
    this.id = uuidv4();

    this.col = this.cellNumber(coordinates.x)
    this.row = this.cellNumber(coordinates.y)

    this.x   = this.centerCell(coordinates.x)
    this.y   = this.centerCell(coordinates.y)

    this.explosion_time = explosion_time
  }

  cellNumber(coordinate) {
    return Math.floor(coordinate / 35)
  }

  centerCell(coordinate) {
    return (Math.floor(coordinate / 35) * 35 + 35 / 2)
  }
}

exports.Bomb = Bomb;
