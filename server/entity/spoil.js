const {
  SPEED, POWER, CAPACITY
} = require('../constants');

var uuidv4 = require('uuid/v4');

class Spoil {

  constructor(row, col) {
    this.id = uuidv4();

    this.row = row;
    this.col = col;

    this.spoil_type = this.spoilType()
  }

  spoilType(){
    return 0
    // return [SPEED, POWER, CAPACITY][Math.floor(Math.random() * 3)]
  }
}

exports.Spoil = Spoil;
