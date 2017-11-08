var MapInfo = require('../../../entity/common/map_info');

class GameLevel extends Phaser.State {
  init(game) {
    this.currentGame = game
    this.gameMap = MapInfo[this.currentGame.map_id];
  }

  create() {
    this.initializeMap();
  }

  initializeMap() {
    var map = this.add.tilemap(this.gameMap.tilemap);

    // map.addTilesetImage(this.gameMap.tilesetName, this.gameMap.tilesetImage, 35, 35);

    // var groundLayer = new Phaser.TilemapLayer(this.game, map, map.getLayerIndex(this.gameMap.groundLayer), this.game.width, this.game.height);
    // this.game.world.addAt(groundLayer, 0);
    // groundLayer.resizeWorld();

    // var blockLayer = new Phaser.TilemapLayer(this.game, map, map.getLayerIndex(this.gameMap.blockLayer), this.game.width, this.game.height);
    // this.game.world.addAt(blockLayer, 1);
    // blockLayer.resizeWorld();

    // map.setCollision(this.gameMap.collisionTiles, true, this.gameMap.blockLayer);

    // tilesets
    map.addTilesetImage(this.gameMap.tilesetName);
    //layers
    this.groundLayer = map.createLayer(this.gameMap.groundLayer);
    this.blockLayer = map.createLayer(this.gameMap.blockLayer);

    map.setCollision(this.gameMap.collisionTiles, true, this.blockLayer);
  }
}

export default GameLevel;


// STOPPED HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
