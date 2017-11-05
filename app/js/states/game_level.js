var BLACK_HEX_CODE = "#000000";
var TILE_SIZE = 35;

var MapInfo = require("../../../entity/common/map_info");

var GameLevelState = function () {
};

module.exports = GameLevelState;

GameLevelState.prototype = {
  remotePlayers: {},

  gameFrozen: true,
  // INIT, PRELOAD, INITIALIZE - What difference ????
  init: function (id) {
  },

  create: function () {
    this.initializeMap();
  },


  initializeMap: function () {
    this.map = Game.add.tilemap('FirstLevel');

    var mapInfo = MapInfo['FirstLevel'];

    this.map.addTilesetImage(mapInfo.tilesetName, mapInfo.tilesetImage, 35, 35);

    this.groundLayer = new Phaser.TilemapLayer(Game, this.map, this.map.getLayerIndex(mapInfo.groundLayer), Game.width, Game.height);
    Game.world.addAt(this.groundLayer, 0);
    this.groundLayer.resizeWorld();

    this.blockLayer = new Phaser.TilemapLayer(Game, this.map, this.map.getLayerIndex(mapInfo.blockLayer), Game.width, Game.height);
    Game.world.addAt(this.blockLayer, 1);
    this.blockLayer.resizeWorld();


    this.map.setCollision(mapInfo.collisionTiles, true, mapInfo.blockLayer);
  }
}
