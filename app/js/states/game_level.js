var MapInfo = require('../../../entity/common/map_info');
import Player from '../entities/player';

class GameLevel extends Phaser.State {
  init(game) {
    this.currentGame = game
    this.gameMap = MapInfo[this.currentGame.map_id];
    this.currentPlayerId = clientSocket.id;

    this.remotePlayers = {}
  }

  create() {
    this.initializeMap();
    this.initializePlayers();
  }

  initializeMap() {
    var map = this.add.tilemap(this.gameMap.tilemap);

    map.addTilesetImage(this.gameMap.tileset);

    this.groundLayer = map.createLayer(this.gameMap.groundLayer);
    this.blockLayer = map.createLayer(this.gameMap.blockLayer);

    this.groundLayer.resizeWorld();
    this.blockLayer.resizeWorld();

    map.setCollision(this.gameMap.collisionTiles, true, this.blockLayer);

    this.game.physics.arcade.enable(this.blockLayer);
  }


  initializePlayers() {
    for (let player of this.currentGame.players) {

      if (player.id == this.currentPlayerId) {
        this.player = new Player(this.game, player.id, player.xSpawn, player.ySpawn, player.color);
      } else {
        this.remotePlayers[player.id] = new Player(this.game, player.id, player.xSpawn, player.ySpawn, player.color);
      }
    }
  }

  update() {
    this.game.physics.arcade.collide(this.player, this.blockLayer);
  }

  render () {
    // this.game.debug.body(this.blockLayer);
  }
}

export default GameLevel;
