var MapInfo = require('../../../entity/common/map_info');
import Player from '../entities/player';

class GameLevel extends Phaser.State {
  init(game) {
    this.currentGame = game
    this.gameMap = MapInfo[this.currentGame.map_id];
    this.currentPlayerId = clientSocket.id
  }

  create() {
    this.initializeMap();

    gggggame.physics.arcade.enable(this.blockLayer);

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
  }


  initializePlayers() {
    for (let player of this.currentGame.players) {

      if (player.id == this.currentPlayerId) {
        this.player = new Player(player.id, player.xSpawn, player.ySpawn, player.color);
      } else {
        // this.remotePlayers[data.id] = new RemotePlayer(data.x, data.y, data.id, data.color);
      }
    }
  }

  update() {
    gggggame.physics.arcade.collide(this.player, this.blockLayer);
    this.player.handleInput();
  }

  render () {
    gggggame.debug.body(this.player);

    this.groundLayer.debug = true
    this.blockLayer.debug = true
  }
}

export default GameLevel;
