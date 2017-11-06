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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var xOffset = exports.xOffset = 180;
var yOffset = exports.yOffset = 25;

var thumbnailXOffset = exports.thumbnailXOffset = 396;
var thumbnailYOffset = exports.thumbnailYOffset = 125;
var stageNameYOffset = exports.stageNameYOffset = 320;

var buttonXOffset = exports.buttonXOffset = 345;
var startGameButtonYOffset = exports.startGameButtonYOffset = 320;
var leaveButtonYOffset = exports.leaveButtonYOffset = 370;

var characterSquareStartingX = exports.characterSquareStartingX = 345;
var characterSquareStartingY = exports.characterSquareStartingY = 80;
var characterSquareXDistance = exports.characterSquareXDistance = 105;
var characterSquareYDistance = exports.characterSquareYDistance = 100;

var minPlayerMessageOffsetX = exports.minPlayerMessageOffsetX = 330;
var minPlayerMessageOffsetY = exports.minPlayerMessageOffsetY = 425;

var characterOffsetX = exports.characterOffsetX = 4.5;
var characterOffsetY = exports.characterOffsetY = 4.5;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _boot = __webpack_require__(2);

var _boot2 = _interopRequireDefault(_boot);

var _preload = __webpack_require__(3);

var _preload2 = _interopRequireDefault(_preload);

var _menu = __webpack_require__(4);

var _menu2 = _interopRequireDefault(_menu);

var _select_map = __webpack_require__(5);

var _select_map2 = _interopRequireDefault(_select_map);

var _pending_game = __webpack_require__(6);

var _pending_game2 = _interopRequireDefault(_pending_game);

var _game_level = __webpack_require__(7);

var _game_level2 = _interopRequireDefault(_game_level);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // https://github.com/cstuncsik/phaser-es6-demo/tree/master/src

var Game = function (_Phaser$Game) {
  _inherits(Game, _Phaser$Game);

  function Game() {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 875, 525, Phaser.AUTO));

    _this.state.add('Boot', _boot2.default);
    _this.state.add('Preload', _preload2.default);
    _this.state.add('Menu', _menu2.default);
    _this.state.add('SelectMap', _select_map2.default);
    _this.state.add('PendingGame', _pending_game2.default);
    _this.state.add('GameLevel', _game_level2.default);

    _this.state.start('Boot');
    return _this;
  }

  return Game;
}(Phaser.Game);

new Game();
window.clientSocket = io.connect();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = function (_Phaser$State) {
  _inherits(Boot, _Phaser$State);

  function Boot() {
    _classCallCheck(this, Boot);

    return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).apply(this, arguments));
  }

  _createClass(Boot, [{
    key: 'preload',
    value: function preload() {
      console.log('BootState');
    }
  }, {
    key: 'create',
    value: function create() {
      // This is not mandatory, but useful, as it will make the game keep reacting to messages from the server even when the game window doesn’t have focus (which is a desired behavior for most games).
      this.stage.disableVisibilityChange = true;

      this.physics.startSystem(Phaser.Physics.ARCADE);

      this.state.start('Preload');
    }
  }]);

  return Boot;
}(Phaser.State);

exports.default = Boot;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload = function (_Phaser$State) {
  _inherits(Preload, _Phaser$State);

  function Preload() {
    _classCallCheck(this, Preload);

    return _possibleConstructorReturn(this, (Preload.__proto__ || Object.getPrototypeOf(Preload)).apply(this, arguments));
  }

  _createClass(Preload, [{
    key: 'preload',
    value: function preload() {
      console.log('LoadState');

      // this.load.image('background', "images/background.png");
      this.load.spritesheet("game_slot", 'images/game_slot.png', 522, 48);
      this.load.spritesheet("game_number", 'images/game_number.png', 522, 48);
      this.load.image('background_select', 'images/Background_select.png');
      this.load.image('select_stage', 'images/select_stage.png');
      this.load.spritesheet('ok_button', 'images/ok_button.png', 60, 60);
      this.load.image('danger_desert_thumbnail', 'images/danger_desert_thumbnail.png');

      this.load.image('pending_game_backdrop', 'images/lobby_backdrop.png');
      this.load.spritesheet('start_game_button', 'images/start_game_button.png', 202, 43);
      this.load.spritesheet('leave_game_button', 'images/leave_game_button.png', 202, 43);
      this.load.spritesheet('character_square', 'images/character_square.png', 89, 89);

      this.load.image('bomberman_head_white', 'images/icon_white.png');
      this.load.image('bomberman_head_blue', 'images/icon_blue.png');
      this.load.image('bomberman_head_green', 'images/icon_green.png');
      this.load.image('bomberman_head_black', 'images/icon_black.png');

      this.load.tilemap('FirstLevel', 'game_levels/first_level.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.image('tiles', 'game_levels/tileset.png');

      this.add.text(80, 150, 'Loading...', { font: '30px Courier', fill: '#FFFFFF' });
    }
  }, {
    key: 'create',
    value: function create() {
      this.state.start('Menu');
    }
  }]);

  return Preload;
}(Phaser.State);

exports.default = Preload;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var slotXOffset = 155;
var slotYOffset = 410;

var textXOffset = 260;
var textYOffset = 25;

var lobbyGames = [];

var Menu = function (_Phaser$State) {
  _inherits(Menu, _Phaser$State);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'preload',
    value: function preload() {
      clientSocket.on('display pending games', this.displayPendingGames.bind(this));
      // Do we have that state???? maybe we can copy displya panding game here .... from init...
    }
  }, {
    key: 'create',
    value: function create() {
      console.log('MenuState');

      this.add.text(80, 150, 'Start', { font: '50px Areal', fill: '#FFFFFF' });
      this.add.sprite(0, 0, 'background');

      var create_game = this.add.button(slotXOffset, slotYOffset, 'game_slot', this.hostGameAction.bind(this), null, 0, 1); // overFrame = 0, outFrame = 1
      var text = this.add.text(textXOffset, textYOffset, 'Host Game', { font: 'Carter One', fill: 'white', fontSize: 18 });
      text.anchor.setTo(0.5);

      create_game.addChild(text);

      clientSocket.emit('enter lobby', { message: 'Hello World' });
    }
  }, {
    key: 'hostGameAction',
    value: function hostGameAction() {
      clientSocket.emit('leave lobby');
      this.state.start('SelectMap', true, false);
    }
  }, {
    key: 'displayPendingGames',
    value: function displayPendingGames(pendingGames) {
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>???????????????');
      // TODO: Refactro that S...
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = lobbyGames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var image = _step.value;

          // NOTE: 1. Not optimal way to rerender, we should implement AddPlayer, RemovePlayer
          // NOTE: 2. You did not destroy object, it still in memory. Just marked as destroyed.
          image.destroy();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      lobbyGames = [];

      var xOffset = 155;
      var yOffset = 50;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = pendingGames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var game = _step2.value;

          var slot = this.add.button(xOffset, yOffset, 'game_number', this.joinGameAction.bind(this, game.id), null, 0, 1); // overFrame = 0, outFrame = 1
          var text = this.add.text(textXOffset, textYOffset, "ENTER TO GAME " + game.id, { font: 'Carter One', fill: 'white', fontSize: 18 });
          text.anchor.setTo(0.5);

          slot.addChild(text);

          yOffset += 50;

          lobbyGames.push(slot);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'joinGameAction',
    value: function joinGameAction(game_id) {
      this.state.start('PendingGame', true, false, game_id);
    }
  }]);

  return Menu;
}(Phaser.State);

exports.default = Menu;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import Player from '../prefabs/player';
// import Enemy from '../prefabs/enemy';
// import HUD from '../prefabs/hud';
//
// TODO: Slider: https://github.com/netgfx/PhaseSlider/blob/15c748f5ba7ff3eb9c17bd6a55f3aa9540183915/examples/core_example1.js

var SelectMap = function (_Phaser$State) {
  _inherits(SelectMap, _Phaser$State);

  function SelectMap() {
    _classCallCheck(this, SelectMap);

    return _possibleConstructorReturn(this, (SelectMap.__proto__ || Object.getPrototypeOf(SelectMap)).apply(this, arguments));
  }

  _createClass(SelectMap, [{
    key: 'init',
    value: function init() {
      console.log('SelectState');
    }
  }, {
    key: 'create',
    value: function create() {
      this.add.sprite(0, 0, 'background_select');
      this.add.image(_constants.xOffset, _constants.yOffset, 'select_stage');
      this.add.image(_constants.thumbnailXOffset, _constants.thumbnailYOffset, 'danger_desert_thumbnail');

      this.add.button(625, 425, 'ok_button', this.confirmStageSelection, this, 1, 0); // OverFrame = 1, Outframe = 0

      this.add.text(this.camera.width / 2, _constants.stageNameYOffset, 'Zone 1', { font: 'Carter One', fill: 'white', fontSize: 28 });
      this.add.text(360, 380, 'Max # of players: 4', { font: 'Carter One', fill: 'white', fontSize: 18 });
      this.add.text(360, 410, 'Map size: medium', { font: 'Carter One', fill: 'white', fontSize: 18 });
    }
  }, {
    key: 'confirmStageSelection',
    value: function confirmStageSelection() {
      var newGameName = this.randomGameName();

      clientSocket.emit('new game created', { game_id: newGameName });

      this.state.start('PendingGame', true, false, newGameName);
    }
  }, {
    key: 'randomGameName',
    value: function randomGameName() {
      return new Date().valueOf().toString();
    }
  }]);

  return SelectMap;
}(Phaser.State);

exports.default = SelectMap;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectMap = function (_Phaser$State) {
  _inherits(SelectMap, _Phaser$State);

  function SelectMap() {
    _classCallCheck(this, SelectMap);

    return _possibleConstructorReturn(this, (SelectMap.__proto__ || Object.getPrototypeOf(SelectMap)).apply(this, arguments));
  }

  _createClass(SelectMap, [{
    key: 'init',
    value: function init(game_id) {
      this.profileBoxes = [];
      this.profileImages = [];

      this.game_id = game_id;

      clientSocket.on('update players', this.populateCharacterSquares.bind(this));
      clientSocket.on('launch game', this.startGame.bind(this));
    }
  }, {
    key: 'create',
    value: function create() {
      this.add.sprite(0, 0, 'background_select');
      this.add.image(_constants.xOffset, _constants.yOffset, 'pending_game_backdrop');

      this.startGameButton = this.add.button(_constants.buttonXOffset, _constants.startGameButtonYOffset, 'start_game_button', this.startGameAction, this, 2, 2);
      this.startGameButton.input.enabled = false;
      this.startGameButton.input.useHandCursor = false;

      this.add.button(_constants.buttonXOffset, _constants.leaveButtonYOffset, 'leave_game_button', this.leaveGameAction, this, 1, 0);

      this.drawCharacterSquares();

      this.minPlayerMessage = this.add.text(_constants.minPlayerMessageOffsetX, _constants.minPlayerMessageOffsetY, 'Cannot start game without\nat least 2 players.', { font: 'Carter One', fill: 'red', fontSize: 17, visible: false });

      this.add.text(330, 100, this.game_id, { font: 'Carter One', fill: 'red', fontSize: 17 });

      clientSocket.emit('enter pending game', { game_id: this.game_id });
    }
  }, {
    key: 'drawCharacterSquares',
    value: function drawCharacterSquares() {
      var xOffset = _constants.characterSquareStartingX;
      var yOffset = _constants.characterSquareStartingY;

      for (var i = 0; i < 2; i++) {
        var profileBox = this.add.sprite(xOffset, yOffset, 'character_square', 0);
        this.profileBoxes[i] = profileBox;

        if (i % 2 == 0) {
          xOffset += _constants.characterSquareXDistance;
        } else {
          xOffset = _constants.characterSquareStartingX;
          yOffset += _constants.characterSquareYDistance;
        }
      }
    }
  }, {
    key: 'populateCharacterSquares',
    value: function populateCharacterSquares(data) {
      var _this2 = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.profileImages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var image = _step.value;

          // NOTE: 1. Not optimal way to rerender, we should implement AddPlayer, RemovePlayer
          // NOTE: 2. You did not destroy object, it still in memory. Just marked as destroyed.
          image.destroy();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      data.players.forEach(function (player, i) {
        var playerSquare = _this2.profileBoxes[i];
        var playerImage = _this2.add.image(_constants.characterOffsetX, _constants.characterOffsetY, 'bomberman_head_' + player.color);

        _this2.profileImages[i] = playerImage;

        playerSquare.addChild(playerImage);
      });

      if (data.players.length > 1) {
        this.enableStartGame();
      } else {
        this.disableStartGame();
      }
    }
  }, {
    key: 'enableStartGame',
    value: function enableStartGame() {
      this.minPlayerMessage.visible = false;

      this.startGameButton.setFrames(1, 0);
      this.startGameButton.inputEnabled = true;
      this.startGameButton.input.useHandCursor = true;
    }
  }, {
    key: 'disableStartGame',
    value: function disableStartGame() {
      this.minPlayerMessage.visible = true;

      this.startGameButton.setFrames(2, 2);
      this.startGameButton.inputEnabled = false;
      this.startGameButton.input.useHandCursor = false;
    }
  }, {
    key: 'leaveGameAction',
    value: function leaveGameAction() {
      clientSocket.emit('leave pending game', { game_id: this.game_id });

      this.state.start('Menu');
    }
  }, {
    key: 'startGameAction',
    value: function startGameAction() {
      clientSocket.emit('create game', { game_id: this.game_id });
    }
  }, {
    key: 'startGame',
    value: function startGame(data) {
      this.state.start('GameLevel', true, false, data.game.id);
    }
  }]);

  return SelectMap;
}(Phaser.State);

exports.default = SelectMap;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapInfo = __webpack_require__(8);

var GameLevel = function (_Phaser$State) {
  _inherits(GameLevel, _Phaser$State);

  function GameLevel() {
    _classCallCheck(this, GameLevel);

    return _possibleConstructorReturn(this, (GameLevel.__proto__ || Object.getPrototypeOf(GameLevel)).apply(this, arguments));
  }

  _createClass(GameLevel, [{
    key: 'create',
    value: function create() {
      this.initializeMap();
    }
  }, {
    key: 'initializeMap',
    value: function initializeMap() {
      var map = this.add.tilemap('FirstLevel');
      var mapInfo = MapInfo['FirstLevel'];

      map.addTilesetImage(mapInfo.tilesetName, mapInfo.tilesetImage, 35, 35);

      var groundLayer = new Phaser.TilemapLayer(this.game, map, map.getLayerIndex(mapInfo.groundLayer), this.game.width, this.game.height);
      this.game.world.addAt(groundLayer, 0);
      groundLayer.resizeWorld();

      var blockLayer = new Phaser.TilemapLayer(this.game, map, map.getLayerIndex(mapInfo.blockLayer), this.game.width, this.game.height);
      this.game.world.addAt(blockLayer, 1);
      blockLayer.resizeWorld();

      map.setCollision(mapInfo.collisionTiles, true, mapInfo.blockLayer);
    }
  }]);

  return GameLevel;
}(Phaser.State);

exports.default = GameLevel;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MapInfo = {
  FirstLevel: {
    spawnLocations: [{ x: 8, y: 1 }, { x: 23, y: 1 }, { x: 3, y: 1 }, { x: 12, y: 6 }],
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
//# sourceMappingURL=bundle.js.map