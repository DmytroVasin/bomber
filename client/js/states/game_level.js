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

    this.game.time.events.loop(400 , this.stopAnimationLoop, this);
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
    var movingPlayer = this.enemyPlayers[data.id];

    if (!movingPlayer) {
      return;
    }

    movingPlayer.animations.play(data.faceDirection)
    movingPlayer.goTo({ x: data.x, y: data.y })

    movingPlayer.lastMoveAt = this.game.time.now;
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

  stopAnimationLoop() {
    for (let id in this.enemyPlayers) {
      let enemy = this.enemyPlayers[id];

      if (enemy.lastMoveAt) {
        if (enemy.lastMoveAt < this.game.time.now - 200) {
          enemy.animations.stop();
        }
      }
    }
  }
}

export default GameLevel;
