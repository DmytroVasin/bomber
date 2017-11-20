class Player {

  constructor(id, color, spawnPosition) {
    this.spawnPosition = spawnPosition;
    this.id = id;
    this.color = color;

    this.power = 3;
  }
}

exports.Player = Player;
