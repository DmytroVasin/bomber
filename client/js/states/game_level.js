import MapInfo from '../../game_levels/map_info';
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

    this.setEventHandlers();
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

  setEventHandlers() {
    clientSocket.on('move player', this.onMovePlayer.bind(this));
  }

  onMovePlayer(data) {
    console.log('-------------------------------------------')
    console.log(data);

    var playerId = data.id;
    var x = data.x;
    var y = data.y;

    var movingPlayer = this.enemyPlayers[data.id];

    if (!movingPlayer) {
      return;
    }

    // console.log('-----------------------------')
    // console.log("Player ID: " + playerId + " #=> " + x + ":" + y )
    // console.log(movingPlayer)
    // console.log('-----------------------------')

    if (movingPlayer.targetPosition) {
      // if (x == movingPlayer.targetPosition.x && y == movingPlayer.targetPosition.y) {
      //   return;
      // }

      movingPlayer.position.x = movingPlayer.targetPosition.x;
      movingPlayer.position.y = movingPlayer.targetPosition.y;
    }

    movingPlayer.targetPosition = { x: x, y: y };
  }

  initializePlayers() {
    for (let player_info of this.currentGame.players_info) {

      if (player_info.id == this.currentPlayerId) {
        this.player = new Player(this.game, player_info.id, this.gameMap.spawn[player_info.spawnPosition], player_info.color);
      } else {
        this.enemyPlayers[player_info.id] = new EnemyPlayer(this.game, player_info.id, this.gameMap.spawn[player_info.spawnPosition], player_info.color);
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
