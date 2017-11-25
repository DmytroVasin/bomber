import MapInfo from '../../game_levels/map_info';
import Player from '../entities/player';
import EnemyPlayer from '../entities/enemy_player';
import Bomb from '../entities/bomb';
import Spoil from '../entities/spoil';
import FireBlast from '../entities/fire_blast';
import Bone from '../entities/bone';

class GameLevel extends Phaser.State {
  init(game) {
    this.currentGame = game
    this.gameMap = MapInfo[this.currentGame.map_name];
    this.currentPlayerId = clientSocket.id;
  }

  create() {
    this.createMap();
    this.createPlayers();
    this.setEventHandlers();

    this.game.time.events.loop(400 , this.stopAnimationLoop.bind(this));
  }

  update() {
    this.game.physics.arcade.collide(this.player, this.blockLayer);
    this.game.physics.arcade.collide(this.player, this.enemies);

    this.game.physics.arcade.overlap(this.player, this.spoils, this.getSpoil, null, this);
    this.game.physics.arcade.overlap(this.player, this.blasts, this.getDied, null, this);
  }

  render () {
    this.bombs.forEachAlive(function (member) { this.game.debug.body(member);}, this);
    this.game.debug.spriteInfo(this.player, 32, 32);
  }

  createMap() {
    this.map = this.add.tilemap(this.gameMap.tilemap);

    this.map.addTilesetImage(this.gameMap.tileset);

    this.blockLayer = this.map.createLayer(this.gameMap.blockLayer);
    this.blockLayer.resizeWorld();

    this.map.setCollision(this.gameMap.collisionTiles, true, this.blockLayer);

    this.player  = null;
    this.bombs   = this.game.add.group();
    this.spoils  = this.game.add.group();
    this.blasts  = this.game.add.group();
    this.enemies = this.game.add.group();

    this.game.physics.arcade.enable(this.blockLayer);
  }

  createPlayers() {
    for (let player_info of this.currentGame.players_info) {
      let setup = {
        game:  this.game,
        id:    player_info.id,
        spawn: this.gameMap.spawn[player_info.spawnPosition],
        color: player_info.color
      }

      if (player_info.id === this.currentPlayerId) {
        this.player = new Player(setup);
      } else {
        this.enemies.add(new EnemyPlayer(setup))
      }
    }
  }

  setEventHandlers() {
    clientSocket.on('move player', this.onMovePlayer.bind(this));
    clientSocket.on('no opponents', this.onNoOpponents.bind(this));
    clientSocket.on('show bomb', this.onShowBomb.bind(this));
    clientSocket.on('detonate bomb', this.onDetonateBomb.bind(this));
    clientSocket.on('spoil was picked', this.onSpoilWasPicked.bind(this));
    clientSocket.on('show bones', this.onShowBones.bind(this));
  }

  getSpoil(player, spoil) {
    clientSocket.emit('pick up spoil', { spoil_id: spoil.id });
    spoil.kill();
  }

  getDied(player, blast) {
    if (player.alive) {
      clientSocket.emit('player died');
      player.kill();
    }
  }

  onMovePlayer({ id, x, y, faceDirection }) {
    let enemy = this.findEnemy(id);
    if (!enemy) { return; }

    enemy.goTo({ x: x, y: y, faceDirection: faceDirection })
  }

  stopAnimationLoop() {
    for (let enemy of this.enemies.children) {
      if (enemy.lastMoveAt && enemy.lastMoveAt < this.game.time.now - 200) {
        enemy.animations.stop();
      }
    }
  }

  onNoOpponents() {
    this.state.start('Win');
  }

  onShowBomb(data) {
    this.bombs.add(new Bomb(this.game, data.id, data.x, data.y));
  }

  onDetonateBomb(data) {
    // Remove Bomb:
    for (let bomb of this.bombs.children) {
      if (bomb.id === data.id) {
        bomb.destroy()
      }
    }
    // Render Blast:
    for (let cell of data.blastedCells) {
      this.blasts.add(new FireBlast(this.game, cell));
    };
    // Destroy Tiles:
    for (let cell of data.blastedCells) {
      if (!cell.destroyed) { continue }
      this.map.putTile(this.gameMap.emptyTileId, cell.col, cell.row, this.blockLayer);
    };
    // Add Spoils:
    for (let cell of data.blastedCells) {
      if (!cell.destroyed) { continue }
      if (!cell.spoil) { continue }

      this.spoils.add(new Spoil(this.game, cell.spoil));
    };
  }

  onSpoilWasPicked(data){
    let spoil = this.findSpoil(data.spoil_id);
    if (!spoil) { return; }

    if (data.player_id === this.player.id){
      this.player.pickSpoil(spoil.spoil_type)
    }

    this.spoils.remove(spoil);
  }

  onShowBones(data) {
    new Bone(this.game, data.col, data.row);

    let deadPlayer = this.findEnemy(data.id);
    if (!deadPlayer) { return; }

    deadPlayer.kill()
  }

  findEnemy(id) {
    for (let enemy of this.enemies.children) {
      if (enemy.id !== id) { continue }
      return enemy
    }
    return null;
  }

  findSpoil(id) {
    for (let spoil of this.spoils.children) {
      if (spoil.id !== id) { continue }
      return spoil
    }
    return null;
  }
}

export default GameLevel;
