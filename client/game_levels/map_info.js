const mapInfo = [
  {
    tilemap: 'level_1',
    tileset: 'tiles',
    spawn: [
      { x: 8  * 35, y: 2 * 35 },
      { x: 23 * 35, y: 2 * 35 },
      { x: 3  * 35, y: 2 * 35 },
      { x: 12 * 35, y: 6 * 35 }
    ],
    collisionTiles: [3, 4],
    groundLayer: 'Ground',
    blockLayer: 'Blocks',
    destructibleTileId: 4
  }, {
    tilemap: 'level_2',
    tileset: 'tiles',
    spawn: [
      { x: 3  * 35, y: 2 * 35 },
      { x: 12 * 35, y: 6 * 35 },
      { x: 8  * 35, y: 2 * 35 },
      { x: 23 * 35, y: 2 * 35 }
    ],
    collisionTiles: [3, 4],
    groundLayer: 'Ground',
    blockLayer: 'Blocks',
    destructibleTileId: 4
  }
]

export default mapInfo;
