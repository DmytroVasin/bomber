class Bomb {

  constructor(coordinates) {
    this.id = '1111111'

    this.col = this.cellNumber(coordinates.x)
    this.row = this.cellNumber(coordinates.y)

    this.x   = this.centerCell(coordinates.x)
    this.y   = this.centerCell(coordinates.y)
  }

  cellNumber(coordinate) {
    return Math.floor(coordinate / 35)
  }

  centerCell(coordinate) {
    return (Math.floor(coordinate / 35) * 35 + 35 / 2)
  }
}

exports.Bomb = Bomb;
