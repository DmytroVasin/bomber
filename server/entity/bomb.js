var uuidv4 = require('uuid/v4');

const explosion_time = 2000

class Bomb {

  constructor(game, power, coordinates) {
    this.id = uuidv4();

    this.game = game;
    this.explosion_time = explosion_time
    this.power = power

    this.col = this.cellNumber(coordinates.x)
    this.row = this.cellNumber(coordinates.y)

    this.x   = this.centerCell(coordinates.x)
    this.y   = this.centerCell(coordinates.y)

    this.blastedCells = [];
  }

  cellNumber(coordinate) {
    return Math.floor(coordinate / 35)
  }

  centerCell(coordinate) {
    return (Math.floor(coordinate / 35) * 35 + 35 / 2)
  }

  detonate() {
    let row   = this.row;
    let col   = this.col;
    let power = this.power;

    this.game.nullifyMapCell(row, col);
    this.addToBlasted(row, col, 'center', false)

    let explosionDirections = [
      { x:  0, y: -1, end: 'up',    plumb: 'vertical'   },
      { x:  1, y:  0, end: 'right', plumb: 'horizontal' },
      { x:  0, y:  1, end: 'down',  plumb: 'vertical'   },
      { x: -1, y:  0, end: 'left',  plumb: 'horizontal' }
    ]

    for (let direction of explosionDirections ) {
      for(let i = 1; i <= power; i++) {
        let currentRow = row + (direction.y * i);
        let currentCol = col + (direction.x * i);

        let cell   = this.game.getMapCell(currentRow, currentCol);
        let isWall = cell == 1 // Non-Destructable
        let isBalk = cell == 2 // Destructable
        let isLast = (i == power);

        if (cell == 2) {
          this.game.nullifyMapCell(currentRow, currentCol);
        }

        if (isBalk || isWall || isLast) {
          this.addToBlasted(currentRow, currentCol, direction.end, isBalk)

          break;
        }

        this.addToBlasted(currentRow, currentCol, direction.plumb, isBalk)
      }
    }

    return this.blastedCells;
  }

  addToBlasted(row, col, direction, destroyed) {
    let spoil = this.craftSpoil();

    this.blastedCells.push({
      row: row,
      col: col,
      type: 'explosion_'+direction,
      destroyed: destroyed,
      spoil: spoil
    })
  }

  craftSpoil() {
    var randomNumber = Math.floor(Math.random() * 2)

    if (randomNumber === 0) {
      return 'speed'
    }

    return null;
  }
}

exports.Bomb = Bomb;
