var MapInfo = require('../../game_levels/map_info');
import Player from '../entities/player';
import EnemyPlayer from '../entities/enemy_player';

class GameLevel extends Phaser.State {
  init(game) {
    this.currentGame = game
    this.gameMap = MapInfo[this.currentGame.map_id];
    this.currentPlayerId = clientSocket.id;

    this.enemyPlayers = {}
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



    this.setEventHandlers();
  }

  setEventHandlers() {
    // clientSocket.on('move player', this.onMovePlayer.bind(this));
  }

  onMovePlayer(data) {

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> STOP HERE




        // if (player && data.id == player.id || this.gameFrozen) {
        //     return;
        // }
        // var movingPlayer = this.remotePlayers[data.id];
        // if (movingPlayer.targetPosition) {
        //     if (data.x == movingPlayer.targetPosition.x && data.y == movingPlayer.targetPosition.y) {
        //         return;
        //     }
        //     movingPlayer.animations.play(data.facing);
        //     movingPlayer.position.x = movingPlayer.targetPosition.x;
        //     movingPlayer.position.y = movingPlayer.targetPosition.y;
        //     movingPlayer.distanceToCover = {
        //         x: data.x - movingPlayer.targetPosition.x,
        //         y: data.y - movingPlayer.targetPosition.y
        //     };
        //     movingPlayer.distanceCovered = {x: 0, y: 0};
        // }
        // movingPlayer.targetPosition = {x: data.x, y: data.y};
        // movingPlayer.lastMoveTime = game.time.now;


  }


  initializePlayers() {
    for (let player of this.currentGame.players) {

      if (player.id == this.currentPlayerId) {
        this.player = new Player(this.game, player.id, player.xSpawn, player.ySpawn, player.color);
      } else {
        this.enemyPlayers[player.id] = new EnemyPlayer(this.game, player.id, player.xSpawn, player.ySpawn, player.color);
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
