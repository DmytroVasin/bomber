import MapInfo from '../../game_levels/map_info';
import Player from '../entities/player';
import EnemyPlayer from '../entities/enemy_player';
import Bomb from '../entities/bomb';
import Spoil from '../entities/spoil';

class GameLevel extends Phaser.State {
  init(game) {
    this.currentGame = game
    this.gameMap = MapInfo[this.currentGame.map_name];
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
    this.map = this.add.tilemap(this.gameMap.tilemap);

    this.map.addTilesetImage(this.gameMap.tileset);

    // DO WE NEED GROUD Layer>?????
    this.groundLayer = this.map.createLayer(this.gameMap.groundLayer);
    this.blockLayer = this.map.createLayer(this.gameMap.blockLayer);

    this.groundLayer.resizeWorld();
    this.blockLayer.resizeWorld();

    this.map.setCollision(this.gameMap.collisionTiles, true, this.blockLayer);

    this.spoils = this.game.add.group();

    this.game.physics.arcade.enable(this.blockLayer);
  }

  getSpoil(sprite, spoil) {
    clientSocket.emit('pick up spoil', { spoil_id: spoil.id });
    spoil.kill();
  }

  setEventHandlers() {
    clientSocket.on('move player', this.onMovePlayer.bind(this));
    clientSocket.on('no opponents', this.onNoOpponents.bind(this));
    clientSocket.on('show bomb', this.onShowBomb.bind(this));
    clientSocket.on('detonate bomb', this.onDetonateBomb.bind(this));
    clientSocket.on('spoil was picked', this.onSpoilWasPicked.bind(this));
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

      if (player_info.id === this.currentPlayerId) {
        this.player = new Player(this.game, player_info.id, this.gameMap.spawn[player_info.spawnPosition], player_info.color);
      } else {
        // SAME AS ENEMY PLAYER
        this.enemyPlayers[player_info.id] = new EnemyPlayer(this.game, player_info.id, this.gameMap.spawn[player_info.spawnPosition], player_info.color);
      }
    }
  }

  update() {
    this.game.physics.arcade.collide(this.player, this.blockLayer);

    this.game.physics.arcade.overlap(this.player, this.spoils, this.getSpoil, null, this);
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

  // SHOULD BE INSIDE BOMB????
  onDetonateBomb(data) {
    console.log('Bomb detonated... BOOOOM....')

    // Remove Bomb:
    for (let bomb of this.bombs.children) {
      if (bomb.id === data.id) {
        bomb.destroy()
      }
    }

    // Render Blast:
    for (let cell of data.blastedCells) {
      // WTF? - should be separate class ???
      let blastedSprite = new Phaser.Sprite(this.game, (cell.col * 35), (cell.row * 35), cell.type, 0);

      blastedSprite.animations.add('blast', [0, 1, 2, 3, 4]);
      this.game.add.existing(blastedSprite);
      blastedSprite.play('blast', 15, false, true); // 15 - framerate, loop, kill_on_complete
    };


    // Destroy Tiles:
    for (let cell of data.blastedCells) {
      if (!cell.destroyed) { continue }

      this.map.putTile(5, cell.col, cell.row, this.blockLayer); // 5 - Numer of tile from 'tileset.png' ( starts from 1 )
    };


    // Add Spoils:
    for (let cell of data.blastedCells) {
      if (!cell.destroyed) { continue }
      if (!cell.spoil) { continue }

      let spoiledItem = new Spoil(this.game, cell.spoil);
      this.spoils.add(spoiledItem);
    };

  }

  onSpoilWasPicked(){
    debugger

    console.log(this.spoils)
    console.log(data)
    // onPowerupAcquired

    // REMOVE TILE FOR ALL USER
    // FOR CRRENT USER INCREASE SPEED
    // DRAW something
  }
}

export default GameLevel;
