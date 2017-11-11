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
exports.characterOffsetY = exports.characterOffsetX = exports.minPlayerMessageOffsetY = exports.minPlayerMessageOffsetX = exports.characterSquareYDistance = exports.characterSquareXDistance = exports.characterSquareStartingY = exports.characterSquareStartingX = exports.leaveButtonYOffset = exports.startGameButtonYOffset = exports.buttonXOffset = exports.stageNameYOffset = exports.thumbnailYOffset = exports.thumbnailXOffset = exports.yOffset = exports.xOffset = void 0;
var xOffset = 180;
exports.xOffset = xOffset;
var yOffset = 25;
exports.yOffset = yOffset;
var thumbnailXOffset = 396;
exports.thumbnailXOffset = thumbnailXOffset;
var thumbnailYOffset = 125;
exports.thumbnailYOffset = thumbnailYOffset;
var stageNameYOffset = 320;
exports.stageNameYOffset = stageNameYOffset;
var buttonXOffset = 345;
exports.buttonXOffset = buttonXOffset;
var startGameButtonYOffset = 320;
exports.startGameButtonYOffset = startGameButtonYOffset;
var leaveButtonYOffset = 370;
exports.leaveButtonYOffset = leaveButtonYOffset;
var characterSquareStartingX = 345;
exports.characterSquareStartingX = characterSquareStartingX;
var characterSquareStartingY = 80;
exports.characterSquareStartingY = characterSquareStartingY;
var characterSquareXDistance = 105;
exports.characterSquareXDistance = characterSquareXDistance;
var characterSquareYDistance = 100;
exports.characterSquareYDistance = characterSquareYDistance;
var minPlayerMessageOffsetX = 330;
exports.minPlayerMessageOffsetX = minPlayerMessageOffsetX;
var minPlayerMessageOffsetY = 425;
exports.minPlayerMessageOffsetY = minPlayerMessageOffsetY;
var characterOffsetX = 4.5;
exports.characterOffsetX = characterOffsetX;
var characterOffsetY = 4.5;
exports.characterOffsetY = characterOffsetY;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _boot = _interopRequireDefault(__webpack_require__(2));

var _preload = _interopRequireDefault(__webpack_require__(3));

var _menu = _interopRequireDefault(__webpack_require__(4));

var _select_map = _interopRequireDefault(__webpack_require__(5));

var _pending_game = _interopRequireDefault(__webpack_require__(6));

var _game_level = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game =
/*#__PURE__*/
function (_Phaser$Game) {
  _inherits(Game, _Phaser$Game);

  function Game() {
    var _this;

    _classCallCheck(this, Game);

    _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 875, 525, Phaser.AUTO));

    _this.state.add('Boot', _boot.default);

    _this.state.add('Preload', _preload.default);

    _this.state.add('Menu', _menu.default);

    _this.state.add('SelectMap', _select_map.default);

    _this.state.add('PendingGame', _pending_game.default);

    _this.state.add('GameLevel', _game_level.default);

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
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot =
/*#__PURE__*/
function (_Phaser$State) {
  _inherits(Boot, _Phaser$State);

  function Boot() {
    _classCallCheck(this, Boot);

    return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).apply(this, arguments));
  }

  _createClass(Boot, [{
    key: "preload",
    value: function preload() {
      console.log('BootState');
    }
  }, {
    key: "create",
    value: function create() {
      // This is not mandatory, but useful, as it will make the game keep reacting to messages from the server even when the game window doesn’t have focus (which is a desired behavior for most games).
      this.stage.disableVisibilityChange = true;
      this.physics.startSystem(Phaser.Physics.ARCADE);
      this.state.start('Preload');
    }
  }]);

  return Boot;
}(Phaser.State);

var _default = Boot;
exports.default = _default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload =
/*#__PURE__*/
function (_Phaser$State) {
  _inherits(Preload, _Phaser$State);

  function Preload() {
    _classCallCheck(this, Preload);

    return _possibleConstructorReturn(this, (Preload.__proto__ || Object.getPrototypeOf(Preload)).apply(this, arguments));
  }

  _createClass(Preload, [{
    key: "preload",
    value: function preload() {
      console.log('LoadState'); // DIFFERENCE between spritsheet and image
      // this.load.image('background', "images/background.png");

      this.load.spritesheet("game_slot", 'images/game_slot.png', 522, 48);
      this.load.spritesheet("game_number", 'images/game_number.png', 522, 48);
      this.load.image('background_select', 'images/Background_select.png');
      this.load.image('select_stage', 'images/select_stage.png');
      this.load.image('danger_desert_thumbnail', 'images/danger_desert_thumbnail.png');
      this.load.image('pending_game_backdrop', 'images/lobby_backdrop.png');
      this.load.spritesheet('start_game_button', 'images/start_game_button.png', 202, 43);
      this.load.spritesheet('leave_game_button', 'images/leave_game_button.png', 202, 43);
      this.load.spritesheet('character_square', 'images/character_square.png', 89, 89);
      this.load.image('bomberman_head_white', 'images/icon_white.png');
      this.load.image('bomberman_head_blue', 'images/icon_blue.png');
      this.load.image('bomberman_head_red', 'images/icon_green.png');
      this.load.image('bomberman_head_black', 'images/icon_black.png');
      this.load.image('tiles', 'game_levels/tileset.png');
      this.load.tilemap('level_1', 'game_levels/level_1.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.tilemap('level_2', 'game_levels/level_2.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.spritesheet('bomberman_white', 'images/bomberman_white.png', 32, 64);
      this.load.spritesheet('bomberman_black', 'images/bomberman_black.png', 32, 64);
      this.load.spritesheet('bomberman_blue', 'images/bomberman_blue.png', 32, 64);
      this.load.spritesheet('bomberman_red', 'images/bomberman_red.png', 32, 64);
      this.add.text(80, 150, 'Loading...', {
        font: '30px Courier',
        fill: '#FFFFFF'
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.state.start('Menu');
    }
  }]);

  return Preload;
}(Phaser.State);

var _default = Preload;
exports.default = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var slotXOffset = 155;
var slotYOffset = 410;
var textXOffset = 260;
var textYOffset = 25;
var lobbyGames = [];

var Menu =
/*#__PURE__*/
function (_Phaser$State) {
  _inherits(Menu, _Phaser$State);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: "preload",
    value: function preload() {
      clientSocket.on('display pending games', this.displayPendingGames.bind(this)); // Do we have that state???? maybe we can copy displya panding game here .... from init...
    }
  }, {
    key: "create",
    value: function create() {
      console.log('MenuState');
      this.add.text(80, 150, 'Start', {
        font: '50px Areal',
        fill: '#FFFFFF'
      });
      this.add.sprite(0, 0, 'background');
      var create_game = this.add.button(slotXOffset, slotYOffset, 'game_slot', this.hostGameAction.bind(this), null, 0, 1); // overFrame = 0, outFrame = 1

      var text = this.add.text(textXOffset, textYOffset, 'Host Game', {
        font: 'Carter One',
        fill: 'white',
        fontSize: 18
      });
      text.anchor.setTo(0.5);
      create_game.addChild(text);
      clientSocket.emit('enter lobby', {
        message: 'Hello World'
      });
    }
  }, {
    key: "hostGameAction",
    value: function hostGameAction() {
      clientSocket.emit('leave lobby');
      this.state.start('SelectMap', true, false);
    }
  }, {
    key: "displayPendingGames",
    value: function displayPendingGames(pendingGames) {
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>???????????????'); // TODO: Refactro that S...

      for (var _i = 0; _i < lobbyGames.length; _i++) {
        var image = lobbyGames[_i];
        // NOTE: 1. Not optimal way to rerender, we should implement AddPlayer, RemovePlayer
        // NOTE: 2. You did not destroy object, it still in memory. Just marked as destroyed.
        image.destroy();
      }

      lobbyGames = [];
      var xOffset = 155;
      var yOffset = 50;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = pendingGames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _game = _step.value;
          var slot = this.add.button(xOffset, yOffset, 'game_number', this.joinGameAction.bind(this, _game.id), null, 0, 1); // overFrame = 0, outFrame = 1

          var text = this.add.text(textXOffset, textYOffset, "ENTER TO GAME " + _game.id, {
            font: 'Carter One',
            fill: 'white',
            fontSize: 18
          });
          text.anchor.setTo(0.5);
          slot.addChild(text);
          yOffset += 50;
          lobbyGames.push(slot);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "joinGameAction",
    value: function joinGameAction(game_id) {
      this.state.start('PendingGame', true, false, game_id);
    }
  }]);

  return Menu;
}(Phaser.State);

var _default = Menu;
exports.default = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(0);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectMap =
/*#__PURE__*/
function (_Phaser$State) {
  _inherits(SelectMap, _Phaser$State);

  function SelectMap() {
    _classCallCheck(this, SelectMap);

    return _possibleConstructorReturn(this, (SelectMap.__proto__ || Object.getPrototypeOf(SelectMap)).apply(this, arguments));
  }

  _createClass(SelectMap, [{
    key: "init",
    value: function init() {
      console.log('SelectState');
    }
  }, {
    key: "preload",
    value: function preload() {
      this.load.image('pinkBlock', 'images/assets/pinkBlock.png');
      this.load.image('blueBlock', 'images/assets/blueBlock.png');
      this.load.spritesheet('accept', 'images/assets/ok_but.png', 80, 80);
      this.load.image('prev', 'images/assets/arrow1.png');
      this.load.image('next', 'images/assets/arrow2.png');
      this.slider = new phaseSlider(this);
    }
  }, {
    key: "create",
    value: function create() {
      this.add.sprite(0, 0, 'background_select');
      var pinkBlock = this.add.image(0, 0, 'pinkBlock');
      var blueBlock = this.add.image(0, 0, 'blueBlock');
      this.slider.createSlider({
        x: this.game.width / 2 - 500 / 2,
        y: this.game.height / 2 - 400 / 2,
        customHandlePrev: 'prev',
        customHandleNext: 'next',
        objects: [pinkBlock, blueBlock]
      });
      this.add.button(this.game.width / 2 - 80 / 2, 425, 'accept', this.confirmStageSelection, this, 1, 0);
    }
  }, {
    key: "confirmStageSelection",
    value: function confirmStageSelection() {
      var _this = this;

      var map_id = this.slider.getCurrentIndex();
      clientSocket.emit('new game created', {
        map_id: map_id
      }, function (data) {
        _this.state.start('PendingGame', true, false, data.game_id);
      });
    }
  }]);

  return SelectMap;
}(Phaser.State);

var _default = SelectMap;
exports.default = _default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(0);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PendingGame =
/*#__PURE__*/
function (_Phaser$State) {
  _inherits(PendingGame, _Phaser$State);

  function PendingGame() {
    _classCallCheck(this, PendingGame);

    return _possibleConstructorReturn(this, (PendingGame.__proto__ || Object.getPrototypeOf(PendingGame)).apply(this, arguments));
  }

  _createClass(PendingGame, [{
    key: "init",
    value: function init(game_id) {
      this.profileBoxes = [];
      this.profileImages = [];
      this.game_id = game_id;
      clientSocket.on('update players', this.populateCharacterSquares.bind(this));
      clientSocket.on('launch game', this.startGame.bind(this));
    }
  }, {
    key: "create",
    value: function create() {
      this.add.sprite(0, 0, 'background_select');
      this.add.image(_constants.xOffset, _constants.yOffset, 'pending_game_backdrop');
      this.startGameButton = this.add.button(_constants.buttonXOffset, _constants.startGameButtonYOffset, 'start_game_button', this.startGameAction, this, 2, 2);
      this.startGameButton.input.enabled = false;
      this.startGameButton.input.useHandCursor = false;
      this.add.button(_constants.buttonXOffset, _constants.leaveButtonYOffset, 'leave_game_button', this.leaveGameAction, this, 1, 0);
      this.drawCharacterSquares();
      this.minPlayerMessage = this.add.text(_constants.minPlayerMessageOffsetX, _constants.minPlayerMessageOffsetY, 'Cannot start game without\nat least 2 players.', {
        font: 'Carter One',
        fill: 'red',
        fontSize: 17,
        visible: false
      });
      this.add.text(330, 100, this.game_id, {
        font: 'Carter One',
        fill: 'red',
        fontSize: 17
      });
      clientSocket.emit('enter pending game', {
        game_id: this.game_id
      });
    }
  }, {
    key: "drawCharacterSquares",
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
    key: "populateCharacterSquares",
    value: function populateCharacterSquares(data) {
      var _this = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.profileImages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _image = _step.value;

          // NOTE: 1. Not optimal way to rerender, we should implement AddPlayer, RemovePlayer
          // NOTE: 2. You did not destroy object, it still in memory. Just marked as destroyed.
          _image.destroy();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      data.players.forEach(function (player, i) {
        var playerSquare = _this.profileBoxes[i];

        var playerImage = _this.add.image(_constants.characterOffsetX, _constants.characterOffsetY, 'bomberman_head_' + player.color);

        _this.profileImages[i] = playerImage;
        playerSquare.addChild(playerImage);
      });

      if (data.players.length > 1) {
        this.enableStartGame();
      } else {
        this.disableStartGame();
      }
    }
  }, {
    key: "enableStartGame",
    value: function enableStartGame() {
      this.minPlayerMessage.visible = false;
      this.startGameButton.setFrames(1, 0);
      this.startGameButton.inputEnabled = true;
      this.startGameButton.input.useHandCursor = true;
    }
  }, {
    key: "disableStartGame",
    value: function disableStartGame() {
      this.minPlayerMessage.visible = true;
      this.startGameButton.setFrames(2, 2);
      this.startGameButton.inputEnabled = false;
      this.startGameButton.input.useHandCursor = false;
    }
  }, {
    key: "leaveGameAction",
    value: function leaveGameAction() {
      clientSocket.emit('leave pending game', {
        game_id: this.game_id
      });
      this.state.start('Menu');
    }
  }, {
    key: "startGameAction",
    value: function startGameAction() {
      clientSocket.emit('create game', {
        game_id: this.game_id
      });
    }
  }, {
    key: "startGame",
    value: function startGame(data) {
      this.state.start('GameLevel', true, false, data.game);
    }
  }]);

  return PendingGame;
}(Phaser.State);

var _default = PendingGame;
exports.default = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _player2 = _interopRequireDefault(__webpack_require__(8));

var _enemy_player = _interopRequireDefault(__webpack_require__(9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapInfo = __webpack_require__(10);

var GameLevel =
/*#__PURE__*/
function (_Phaser$State) {
  _inherits(GameLevel, _Phaser$State);

  function GameLevel() {
    _classCallCheck(this, GameLevel);

    return _possibleConstructorReturn(this, (GameLevel.__proto__ || Object.getPrototypeOf(GameLevel)).apply(this, arguments));
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init(game) {
      this.currentGame = game;
      this.gameMap = MapInfo[this.currentGame.map_id];
      this.currentPlayerId = clientSocket.id;
      this.enemyPlayers = {};
    }
  }, {
    key: "create",
    value: function create() {
      this.initializeMap();
      this.initializePlayers();
    }
  }, {
    key: "initializeMap",
    value: function initializeMap() {
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
  }, {
    key: "setEventHandlers",
    value: function setEventHandlers() {// clientSocket.on('move player', this.onMovePlayer.bind(this));
    }
  }, {
    key: "onMovePlayer",
    value: function onMovePlayer(data) {// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> STOP HERE
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
  }, {
    key: "initializePlayers",
    value: function initializePlayers() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.currentGame.players[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _player = _step.value;

          if (_player.id == this.currentPlayerId) {
            this.player = new _player2.default(this.game, _player.id, _player.xSpawn, _player.ySpawn, _player.color);
          } else {
            this.enemyPlayers[_player.id] = new _enemy_player.default(this.game, _player.id, _player.xSpawn, _player.ySpawn, _player.color);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.game.physics.arcade.collide(this.player, this.blockLayer);
    }
  }, {
    key: "render",
    value: function render() {// this.game.debug.body(this.blockLayer);
    }
  }]);

  return GameLevel;
}(Phaser.State);

var _default = GameLevel;
exports.default = _default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// https://github.com/cstuncsik/phaser-es6-demo/tree/master/src
var Player =
/*#__PURE__*/
function (_Phaser$Sprite) {
  _inherits(Player, _Phaser$Sprite);

  function Player(game, id, xSpawn, ySpawn, color) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, game, xSpawn, ySpawn, 'bomberman_' + color));
    _this.game = game;
    _this.id = id;
    _this.position = {
      x: xSpawn,
      y: ySpawn
    };
    _this.spawnPoint = {
      xSpawn: xSpawn,
      ySpawn: ySpawn
    };
    _this.facing = 'down';
    _this.speed = 250;

    _this.game.physics.arcade.enable(_this);

    _this.anchor.setTo(0.1, 0.6);

    _this.body.setSize(20, 19, 5, 16);

    _this.animations.add('up', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);

    _this.animations.add('down', [8, 9, 10, 11, 12, 13, 14, 15], 15, true);

    _this.animations.add('right', [16, 17, 18, 19, 20, 21, 22, 23], 15, true);

    _this.animations.add('left', [24, 25, 26, 27, 28, 29, 30, 31], 15, true);

    _this.game.add.existing(_this);

    return _this;
  }

  _createClass(Player, [{
    key: "update",
    value: function update() {
      this.body.velocity.set(0);

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        this.body.velocity.x = -this.speed;
        this.play('left');
      } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        this.body.velocity.x = this.speed;
        this.play('right');
      } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        this.body.velocity.y = -this.speed;
        this.play('up');
      } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        this.body.velocity.y = this.speed;
        this.play('down');
      } else {
        this.animations.stop();
      }

      console.log('--------------');
      this.game.debug.body(this);
    }
  }]);

  return Player;
}(Phaser.Sprite);

exports.default = Player;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnemyPlayer =
/*#__PURE__*/
function (_Phaser$Sprite) {
  _inherits(EnemyPlayer, _Phaser$Sprite);

  function EnemyPlayer(game, id, xSpawn, ySpawn, color) {
    var _this;

    _classCallCheck(this, EnemyPlayer);

    _this = _possibleConstructorReturn(this, (EnemyPlayer.__proto__ || Object.getPrototypeOf(EnemyPlayer)).call(this, game, xSpawn, ySpawn, 'bomberman_' + color));
    _this.game = game;
    _this.id = id;
    _this.position = {
      x: xSpawn,
      y: ySpawn
    };
    _this.spawnPoint = {
      xSpawn: xSpawn,
      ySpawn: ySpawn
    };
    _this.facing = 'down';
    _this.speed = 250;

    _this.game.physics.arcade.enable(_this);

    _this.anchor.setTo(0.1, 0.6);

    _this.body.setSize(20, 19, 5, 16);

    _this.animations.add('up', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);

    _this.animations.add('down', [8, 9, 10, 11, 12, 13, 14, 15], 15, true);

    _this.animations.add('right', [16, 17, 18, 19, 20, 21, 22, 23], 15, true);

    _this.animations.add('left', [24, 25, 26, 27, 28, 29, 30, 31], 15, true);

    _this.game.add.existing(_this);

    return _this;
  }

  _createClass(EnemyPlayer, [{
    key: "update",
    value: function update() {// this.body.velocity.set(0);
      // if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      //   this.body.velocity.x = -this.speed;
      //   this.play('left');
      // } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      //   this.body.velocity.x = this.speed;
      //   this.play('right');
      // } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      //   this.body.velocity.y = -this.speed;
      //   this.play('up');
      // } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      //   this.body.velocity.y = this.speed;
      //   this.play('down')
      // } else {
      //   this.animations.stop();
      // }
      // console.log('--------------')
      // this.game.debug.body(this);
    }
  }]);

  return EnemyPlayer;
}(Phaser.Sprite);

exports.default = EnemyPlayer;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = [{
  tilemap: 'level_1',
  tileset: 'tiles',
  tileSize: 35,
  spawnLocations: [{
    x: 12,
    y: 6
  }, {
    x: 3,
    y: 1
  }, {
    x: 23,
    y: 2
  }, {
    x: 8,
    y: 1
  }],
  collisionTiles: [3, 4],
  groundLayer: 'Ground',
  blockLayer: 'Blocks',
  destructibleTileId: 4
}, {
  tilemap: 'level_2',
  tileset: 'tiles',
  tileSize: 35,
  spawnLocations: [{
    x: 8,
    y: 1
  }, {
    x: 23,
    y: 1
  }, {
    x: 3,
    y: 1
  }, {
    x: 12,
    y: 6
  }],
  collisionTiles: [3, 4],
  groundLayer: 'Ground',
  blockLayer: 'Blocks',
  destructibleTileId: 4
}];

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map