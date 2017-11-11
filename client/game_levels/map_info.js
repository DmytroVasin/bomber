module.exports = [
  {
    tilemap: 'level_1',
    tileset: 'tiles',
    tileSize: 35,
    spawnLocations: [{x: 12, y: 6}, {x: 3, y: 1}, {x: 23, y: 2}, {x: 8, y: 1}],
    collisionTiles: [3, 4],
    groundLayer: 'Ground',
    blockLayer: 'Blocks',
    destructibleTileId: 4
  }, {
    tilemap: 'level_2',
    tileset: 'tiles',
    tileSize: 35,
    spawnLocations: [{x: 8, y: 1}, {x: 23, y: 1}, {x: 3, y: 1}, {x: 12, y: 6}],
    collisionTiles: [3, 4],
    groundLayer: 'Ground',
    blockLayer: 'Blocks',
    destructibleTileId: 4
  }
]
