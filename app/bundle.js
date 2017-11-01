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

  Game.state.add('boot', __webpack_require__(1));
  Game.state.add('load', __webpack_require__(2));
  Game.state.add('lobby', __webpack_require__(3));
  Game.state.add('select', __webpack_require__(4));
  Game.state.add('pending_game', __webpack_require__(5));

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

    // this.load.image('background', "images/background.png");
    this.load.spritesheet("game_slot", "images/game_slot.png", 522, 48);
    this.load.spritesheet("game_number", "images/game_number.png", 522, 48);
    this.load.image('background_select', "images/Background_select.png");
    this.load.image('select_stage', "images/select_stage.png");
    this.load.spritesheet('ok_button', "images/ok_button.png", 60, 60);
    this.load.image("danger_desert_thumbnail", "images/danger_desert_thumbnail.png");

    this.load.image('pending_game_backdrop', 'images/lobby_backdrop.png');
    this.load.spritesheet('start_game_button', "images/start_game_button.png", 202, 43);
    this.load.spritesheet('leave_game_button', "images/leave_game_button.png", 202, 43);
    this.load.spritesheet("character_square", "images/character_square.png", 89, 89);


    this.load.image("bomberman_head_white", "images/icon_white.png");
    this.load.image("bomberman_head_blue", "images/icon_blue.png");
    this.load.image("bomberman_head_green", "images/icon_green.png");
    this.load.image("bomberman_head_black", "images/icon_black.png");

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

module.exports = LobbyState;

LobbyState.prototype = {
  init: function () {
    clientSocket.on('display pending games', this.displayPendingGames.bind(this));
  },

  create: function () {
    console.log('LobbyState')

    Game.add.text(80, 150, 'Start', { font: '50px Areal', fill: '#FFFFFF' });
    Game.add.sprite(0, 0, 'background');

    clientSocket.emit('enter lobby', { message: 'Hello World' });



    var create_game = Game.add.button(slotXOffset, slotYOffset, 'game_slot', this.hostGameAction, null, 0, 1); // overFrame = 0, outFrame = 1
    var text        = Game.add.text(textXOffset, textYOffset, 'Host Game', { font: 'Carter One', fill: 'white', fontSize: 18 });
    text.anchor.setTo(0.5);

    create_game.addChild(text)

    // clientSocket.on('add slots', this.addSlots.bind(this));
    // clientSocket.on('update slot', this.updateSlot.bind(this));
  },

  hostGameAction: function() {
    debugger
    // WTF ?????????
    // clientSocket.emit('host game', { gameId: gameId });
    // WTF ?????????
    // clientSocket.removeAllListeners();

    // WTF ?????????
    Game.state.start('select', true, false);
  },

  displayPendingGames: function(pendingGames) {
    var xOffset = 155;
    var yOffset = 50;

    for(var i = 0; i < pendingGames.length; i++) {
      var game = Game.add.button(xOffset, yOffset, 'game_number', this.joinGameAction.bind(this, pendingGames[i]), null, 0, 1); // overFrame = 0, outFrame = 1
      var text = Game.add.text(textXOffset, textYOffset, 'ENTER TO GAME 1', { font: 'Carter One', fill: 'white', fontSize: 18 });
      text.anchor.setTo(0.5);

      game.addChild(text)

      yOffset += 50;
    }
  },

  joinGameAction: function(game_id) {
    debugger

    clientSocket.removeAllListeners();
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


// var stages = {name: "Comeback", thumbnailKey: "first_", tilemapName: "First", maxPlayers: 4, size: "medium"};

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
    Game.state.start('pending_game', true, false, 'First');
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
var numCharacterSquares = 4;

var minPlayerMessageOffsetX = 330;
var minPlayerMessageOffsetY = 425;

var characterOffsetX = 4.5;
var characterOffsetY = 4.5;

PendingGameState.prototype = {
  init: function (tilemapName) {
    debugger
    // this.tilemapName = tilemapName;

    clientSocket.on('show current players', this.populateCharacterSquares.bind(this));
  },

  create: function() {
    debugger
    Game.add.sprite(0, 0, 'background_select');
    Game.add.image(xOffset, yOffset, 'pending_game_backdrop');

    this.startGameButton = Game.add.button(buttonXOffset, startGameButtonYOffset, 'start_game_button', this.startGameAction, this, 2, 2);

    Game.add.button(buttonXOffset, leaveButtonYOffset, 'leave_game_button', this.leaveGameAction, null, 1, 0);

    this.characterSquares = this.drawCharacterSquares(4);

    this.characterImages = [];

    this.numPlayersInGame = 0;


    this.minPlayerMessage = Game.add.text(minPlayerMessageOffsetX, minPlayerMessageOffsetY, 'Cannot start game without\nat least 2 players.', { font: 'Carter One', fill: 'red', fontSize: 17, visible: false });
    // this.minPlayerMessage.visible  = false;

    // socket.on("show current players", this.populateCharacterSquares.bind(this));
    // socket.on("player joined", this.playerJoined.bind(this));
    // socket.on("player left", this.playerLeft.bind(this));
    // socket.on("start game on client", this.startGame);

    clientSocket.emit('enter pending game', { gameId: 'this.gameId' });
  },




  drawCharacterSquares: function(numOpenings) {
    var characterSquares = [];

    var xOffset = characterSquareStartingX;
    var yOffset = characterSquareStartingY;

    for(var i = 0; i < numCharacterSquares; i++) {
      var frame = i < numOpenings ? 0 : 1;
      characterSquares[i] = Game.add.sprite(xOffset, yOffset, 'character_square', frame);
      if(i % 2 == 0) {
        xOffset += characterSquareXDistance;
      } else {
        xOffset = characterSquareStartingX;
        yOffset += characterSquareYDistance;
      }
    }
    return characterSquares;
  },



  populateCharacterSquares: function(data) {
    this.numPlayersInGame = 0;

    for(var playerId in data.players) {
      var color = data.players[playerId].color;
      var xPosition = this.characterSquares[this.numPlayersInGame].position.x + characterOffsetX
      var yPosition = this.characterSquares[this.numPlayersInGame].position.y + characterOffsetY

      this.characterImages[playerId] = Game.add.image(xPosition, yPosition, 'bomberman_head_' + color);

    }

    this.minPlayerMessage.visible = true;

// >>>>>>>>>>>>>>>>>> STOP HERE








    //   this.numPlayersInGame++;
    // }
    // if(this.numPlayersInGame > 1) {
    //   this.activateStartGameButton();
    // } else {
    //   this.minPlayerMessage.visible = true;
    // }
  },


  leaveGameAction: function() {
    debugger;

    clientSocket.emit('leave pending game');
    clientSocket.removeAllListeners();

    Game.state.start('lobby');
  },

  startGameAction: function() {
    console.log('.............')
  }
}


/***/ })
/******/ ]);