/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// http://perplexingtech.weebly.com/game-dev-blog/using-states-in-phaserjs-javascript-game-developement

window.Game = new Phaser.Game(875, 525, Phaser.AUTO, 'bombattack');

start();

function start() {
  clientSocket = io.connect();

  Game.state.add('boot',         __webpack_require__(1));
  Game.state.add('load',         __webpack_require__(2));
  Game.state.add('lobby',        __webpack_require__(3));
  Game.state.add('select',       __webpack_require__(4));
  Game.state.add('pending_game', __webpack_require__(5));
  Game.state.add('game_level',   __webpack_require__(6));

  Game.state.start('boot');
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var BootState = function () {

};

module.exports = BootState;

BootState.prototype = {

  create: function () {
    console.log('BootState')

    // This is not mandatory, but useful, as it will make the game keep reacting to messages from the server even when the game window doesn’t have focus (which is a desired behavior for most games).
    Game.stage.disableVisibilityChange = true;

    Game.physics.startSystem(Phaser.Physics.ARCADE);
    Game.state.start('load');
  }

};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var LoadState = function () {

};

module.exports = LoadState;

LoadState.prototype = {
  preload: function () {
    console.log('LoadState')

    // Game.load.image('background', "images/background.png");
    Game.load.spritesheet("game_slot", 'images/game_slot.png', 522, 48);
    Game.load.spritesheet("game_number", 'images/game_number.png', 522, 48);
    Game.load.image('background_select', 'images/Background_select.png');
    Game.load.image('select_stage', 'images/select_stage.png');
    Game.load.spritesheet('ok_button', 'images/ok_button.png', 60, 60);
    Game.load.image('danger_desert_thumbnail', 'images/danger_desert_thumbnail.png');

    Game.load.image('pending_game_backdrop', 'images/lobby_backdrop.png');
    Game.load.spritesheet('start_game_button', 'images/start_game_button.png', 202, 43);
    Game.load.spritesheet('leave_game_button', 'images/leave_game_button.png', 202, 43);
    Game.load.spritesheet('character_square', 'images/character_square.png', 89, 89);


    Game.load.image('bomberman_head_white', 'images/icon_white.png');
    Game.load.image('bomberman_head_blue', 'images/icon_blue.png');
    Game.load.image('bomberman_head_green', 'images/icon_green.png');
    Game.load.image('bomberman_head_black', 'images/icon_black.png');


    Game.load.tilemap('FirstLevel', 'game_levels/first_level.json', null, Phaser.Tilemap.TILED_JSON);
    Game.load.image('tiles', 'game_levels/tileset.png');


    Game.add.text(80, 150, 'Loading...', { font: '30px Courier', fill: '#FFFFFF' });
  },

  create: function () {
    Game.state.start('lobby');
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var LobbyState = function () {

};

var slotXOffset = 155;
var slotYOffset = 410;

var textXOffset = 260;
var textYOffset = 25;

var lobbyGames = []

module.exports = LobbyState;

LobbyState.prototype = {
  init: function () {
    clientSocket.on('display pending games', this.displayPendingGames.bind(this));
  },

  preload: function() {
    // Do we have that state???? maybe we can copy displya panding game here .... from init...
  },

  create: function () {
    console.log('LobbyState')

    Game.add.text(80, 150, 'Start', { font: '50px Areal', fill: '#FFFFFF' });
    Game.add.sprite(0, 0, 'background');


    var create_game = Game.add.button(slotXOffset, slotYOffset, 'game_slot', this.hostGameAction, null, 0, 1); // overFrame = 0, outFrame = 1
    var text        = Game.add.text(textXOffset, textYOffset, 'Host Game', { font: 'Carter One', fill: 'white', fontSize: 18 });
    text.anchor.setTo(0.5);

    create_game.addChild(text)

    clientSocket.emit('enter lobby', { message: 'Hello World' });
  },

  hostGameAction: function() {
    clientSocket.emit('leave lobby');
    Game.state.start('select', true, false);
  },

  displayPendingGames: function(pendingGames) {
    // TODO: Refactro that S...
    for (let image of lobbyGames) {
      // NOTE: 1. Not optimal way to rerender, we should implement AddPlayer, RemovePlayer
      // NOTE: 2. You did not destroy object, it still in memory. Just marked as destroyed.
      image.destroy();
    }

    lobbyGames = [];

    var xOffset = 155;
    var yOffset = 50;

    for (let game of pendingGames) {
      var slot = Game.add.button(xOffset, yOffset, 'game_number', this.joinGameAction.bind(this, game.id), null, 0, 1); // overFrame = 0, outFrame = 1
      var text = Game.add.text(textXOffset, textYOffset, "ENTER TO GAME " + game.id, { font: 'Carter One', fill: 'white', fontSize: 18 });
      text.anchor.setTo(0.5);

      slot.addChild(text)

      yOffset += 50;

      lobbyGames.push(slot)
    }
  },

  joinGameAction: function(game_id) {
    Game.state.start('pending_game', true, false, game_id);
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var SelectState = function () {

};

module.exports = SelectState;

var xOffset = 180;
var yOffset = 25;
var thumbnailXOffset = 396;
var thumbnailYOffset = 125;
var stageNameYOffset = 320;

SelectState.prototype = {
  init: function () {
    console.log('SelectState')
  },

  create: function () {
    Game.add.sprite(0, 0, 'background_select');
    Game.add.image(xOffset, yOffset, 'select_stage');
    Game.add.image(thumbnailXOffset, thumbnailYOffset, 'danger_desert_thumbnail');

    Game.add.button(625, 425, 'ok_button', this.confirmStageSelection, this, 1, 0); // OverFrame = 1, Outframe = 0

    Game.add.text(Game.camera.width / 2, stageNameYOffset, 'Zone 1', { font: 'Carter One', fill: 'white', fontSize: 28 });
    Game.add.text(360, 380, 'Max # of players: 4', { font: 'Carter One', fill: 'white', fontSize: 18 });
    Game.add.text(360, 410, 'Map size: medium', { font: 'Carter One', fill: 'white', fontSize: 18 });
  },

  confirmStageSelection: function() {
    var newGameName = this.randomGameName();

    clientSocket.emit('new game created', { game_id: newGameName });

    Game.state.start('pending_game', true, false, newGameName);
  },

  randomGameName: function(){
    return (new Date()).valueOf().toString();
  }
};

module.exports = SelectState;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var PendingGameState = function() {};

module.exports = PendingGameState;

var xOffset = 180;
var yOffset = 25;

var buttonXOffset = 345;
var startGameButtonYOffset = 320;
var leaveButtonYOffset = 370;

var characterSquareStartingX = 345;
var characterSquareStartingY = 80;
var characterSquareXDistance = 105;
var characterSquareYDistance = 100;

var minPlayerMessageOffsetX = 330;
var minPlayerMessageOffsetY = 425;

var characterOffsetX = 4.5;
var characterOffsetY = 4.5;

var profileBoxes = []
var profileImages = [];

PendingGameState.prototype = {
  init: function (game_id) {
    this.game_id = game_id;

    clientSocket.on('update players', this.populateCharacterSquares.bind(this));
    clientSocket.on('launch game', this.startGame.bind(this));
  },

  create: function() {
    Game.add.sprite(0, 0, 'background_select');
    Game.add.image(xOffset, yOffset, 'pending_game_backdrop');

    this.startGameButton = Game.add.button(buttonXOffset, startGameButtonYOffset, 'start_game_button', this.startGameAction, this, 2, 2);
    this.startGameButton.input.enabled = false
    this.startGameButton.input.useHandCursor = false

    Game.add.button(buttonXOffset, leaveButtonYOffset, 'leave_game_button', this.leaveGameAction, this, 1, 0);

    this.drawCharacterSquares();

    this.minPlayerMessage = Game.add.text(minPlayerMessageOffsetX, minPlayerMessageOffsetY, 'Cannot start game without\nat least 2 players.', { font: 'Carter One', fill: 'red', fontSize: 17, visible: false });

    // DEBUGGG:
    Game.add.text(330, 100, this.game_id, { font: 'Carter One', fill: 'red', fontSize: 17});

    clientSocket.emit('enter pending game', { game_id: this.game_id });
  },

  drawCharacterSquares: function() {
    var xOffset = characterSquareStartingX;
    var yOffset = characterSquareStartingY;

    for(var i = 0; i < 4; i++) {
      var frame = i < 4 ? 0 : 1;

      var profileBox = Game.add.sprite(xOffset, yOffset, 'character_square', frame);
      profileBoxes[i] = profileBox

      if(i % 2 == 0) {
        xOffset += characterSquareXDistance;
      } else {
        xOffset = characterSquareStartingX;
        yOffset += characterSquareYDistance;
      }
    }
  },

  populateCharacterSquares: function(data) {
    for (let image of profileImages) {
      // NOTE: 1. Not optimal way to rerender, we should implement AddPlayer, RemovePlayer
      // NOTE: 2. You did not destroy object, it still in memory. Just marked as destroyed.
      image.destroy();
    }

    data.players.forEach( (player, i) => {
      var playerSquare = profileBoxes[i]
      var playerImage = Game.add.image(characterOffsetX, characterOffsetY, 'bomberman_head_' + player.color);

      profileImages[i] = playerImage

      playerSquare.addChild(playerImage)
    })

    if(data.players.length > 1) {
      this.enableStartGame();
    } else {
      this.disableStartGame();
    }
  },

  enableStartGame: function() {
    this.minPlayerMessage.visible = false;

    this.startGameButton.setFrames(1, 0);
    this.startGameButton.inputEnabled = true;
    this.startGameButton.input.useHandCursor = true
  },

  disableStartGame: function (){
    this.minPlayerMessage.visible = true;

    this.startGameButton.setFrames(2, 2);
    this.startGameButton.inputEnabled = false;
    this.startGameButton.input.useHandCursor = false
  },

  leaveGameAction: function() {
    clientSocket.emit('leave pending game', { game_id: this.game_id });

    Game.state.start('lobby');
  },

  startGameAction: function() {
    clientSocket.emit('create game', { game_id: this.game_id });
  },




  startGame: function(data) {
    // socket.removeAllListeners();
    Game.state.start('game_level', true, false, data.game.id);
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var BLACK_HEX_CODE = "#000000";
var TILE_SIZE = 35;

var MapInfo = __webpack_require__(7);

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


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var MapInfo = {
  FirstLevel: {
    spawnLocations: [{x: 8, y: 1}, {x: 23, y: 1}, {x: 3, y: 1}, {x: 12, y: 6}],
    collisionTiles: [3, 4],
    groundLayer: "Ground",
    blockLayer: "Blocks",
    tilesetName: "tiles",
    tilesetImage: "tiles",
    destructibleTileId: 4
  }
};

module.exports = MapInfo;


/***/ })
/******/ ]);
