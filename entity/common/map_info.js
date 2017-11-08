var MapInfo = [
  {
    tilemap: 'level_1',
    tileSize: 35,
    spawnLocations: [{x: 8, y: 1}, {x: 23, y: 1}, {x: 3, y: 1}, {x: 12, y: 6}],
    collisionTiles: [3, 4],
    groundLayer: 'Ground',
    blockLayer: 'Blocks',
    tilesetName: 'tiles',
    tilesetImage: 'tiles',
    destructibleTileId: 4
  }, {
    tilemap: 'level_2',
    tileSize: 35,
    spawnLocations: [{x: 8, y: 1}, {x: 23, y: 1}, {x: 3, y: 1}, {x: 12, y: 6}],
    collisionTiles: [3, 4],
    groundLayer: 'Ground',
    blockLayer: 'Blocks',
    tilesetName: 'tiles',
    tilesetImage: 'tiles',
    destructibleTileId: 4
  }
]

module.exports = MapInfo;
