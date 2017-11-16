import MapInfo from '../../game_levels/map_info';
import Player from '../entities/player';
import EnemyPlayer from '../entities/enemy_player';
import Bomb from '../entities/bomb';

class GameLevel extends Phaser.State {
  init(game) {
    this.currentGame = game
    this.gameMap = MapInfo[this.currentGame.map_id];
    this.currentPlayerId = clientSocket.id;

    this.enemyPlayers = {}
  }

  create() {
    this.initializeMap();

    this.bombs = this.game.add.group();

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
    clientSocket.on('no opponents', this.onNoOpponents.bind(this));
    clientSocket.on('show bomb', this.onShowBomb.bind(this));
    clientSocket.on('detonate bomb', this.onDetonateBomb.bind(this));
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
    this.bombs.forEachAlive(function (member) { this.game.debug.body(member);}, this);
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


  onNoOpponents() {
    this.state.start('Win');
  }

  onShowBomb(data) {
    console.log('Bomb was placed...')
    this.bombs.add(new Bomb(this.game, data.id, data.x, data.y));
  }

  onDetonateBomb(bomb_id) {
    // STOP HERE
    console.log('Bomb detonated... BOOOOM....')
  }
}

export default GameLevel;
