var MapInfo = require("../../../entity/common/map_info");

class GameLevel extends Phaser.State {
  create() {
    this.initializeMap();
  }

  initializeMap() {
    var map = this.add.tilemap('FirstLevel');
    var mapInfo = MapInfo['FirstLevel'];

    map.addTilesetImage(mapInfo.tilesetName, mapInfo.tilesetImage, 35, 35);

    var groundLayer = new Phaser.TilemapLayer(this.game, map, map.getLayerIndex(mapInfo.groundLayer), this.game.width, this.game.height);
    this.game.world.addAt(groundLayer, 0);
    groundLayer.resizeWorld();

    var blockLayer = new Phaser.TilemapLayer(this.game, map, map.getLayerIndex(mapInfo.blockLayer), this.game.width, this.game.height);
    this.game.world.addAt(blockLayer, 1);
    blockLayer.resizeWorld();


    map.setCollision(mapInfo.collisionTiles, true, mapInfo.blockLayer);
  }
}

export default GameLevel;
