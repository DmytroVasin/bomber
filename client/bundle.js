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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpoilNotification = exports.PlayerSlots = exports.GameSlots = exports.TextButton = exports.Button = exports.Text = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// https://gist.github.com/woubuc/6ef002051aeef453a95b
var Text =
/*#__PURE__*/
function (_Phaser$Text) {
  _inherits(Text, _Phaser$Text);

  function Text(_ref) {
    var _this;

    var game = _ref.game,
        x = _ref.x,
        y = _ref.y,
        text = _ref.text,
        style = _ref.style;

    _classCallCheck(this, Text);

    _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, game, x, y, text, style));

    _this.anchor.setTo(0.5);

    _this.game.add.existing(_this);

    return _this;
  }

  return Text;
}(Phaser.Text);

exports.Text = Text;

var Button =
/*#__PURE__*/
function (_Phaser$Button) {
  _inherits(Button, _Phaser$Button);

  function Button(_ref2) {
    var _this2;

    var game = _ref2.game,
        x = _ref2.x,
        y = _ref2.y,
        asset = _ref2.asset,
        callback = _ref2.callback,
        callbackContext = _ref2.callbackContext,
        overFrame = _ref2.overFrame,
        outFrame = _ref2.outFrame,
        downFrame = _ref2.downFrame,
        upFrame = _ref2.upFrame;

    _classCallCheck(this, Button);

    _this2 = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame));

    _this2.anchor.setTo(0.5);

    _this2.game.add.existing(_this2);

    return _this2;
  }

  _createClass(Button, [{
    key: "disable",
    value: function disable() {
      this.setFrames(2, 2);
      this.inputEnabled = false;
      this.input.useHandCursor = false;
    }
  }, {
    key: "enable",
    value: function enable() {
      this.setFrames(1, 0);
      this.inputEnabled = true;
      this.input.useHandCursor = true;
    }
  }]);

  return Button;
}(Phaser.Button);

exports.Button = Button;

var TextButton =
/*#__PURE__*/
function (_Phaser$Button2) {
  _inherits(TextButton, _Phaser$Button2);

  function TextButton(_ref3) {
    var _this3;

    var game = _ref3.game,
        x = _ref3.x,
        y = _ref3.y,
        asset = _ref3.asset,
        callback = _ref3.callback,
        callbackContext = _ref3.callbackContext,
        overFrame = _ref3.overFrame,
        outFrame = _ref3.outFrame,
        downFrame = _ref3.downFrame,
        upFrame = _ref3.upFrame,
        label = _ref3.label,
        style = _ref3.style;

    _classCallCheck(this, TextButton);

    _this3 = _possibleConstructorReturn(this, (TextButton.__proto__ || Object.getPrototypeOf(TextButton)).call(this, game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame));

    _this3.anchor.setTo(0.5);

    _this3.text = new Phaser.Text(_this3.game, 0, 0, label, style);

    _this3.text.anchor.setTo(0.5);

    _this3.addChild(_this3.text);

    _this3.game.add.existing(_this3);

    return _this3;
  }

  return TextButton;
}(Phaser.Button);

exports.TextButton = TextButton;

var GameSlots =
/*#__PURE__*/
function (_Phaser$Group) {
  _inherits(GameSlots, _Phaser$Group);

  function GameSlots(_ref4) {
    var _this4;

    var game = _ref4.game,
        availableGames = _ref4.availableGames,
        callback = _ref4.callback,
        callbackContext = _ref4.callbackContext,
        x = _ref4.x,
        y = _ref4.y,
        asset = _ref4.asset,
        overFrame = _ref4.overFrame,
        outFrame = _ref4.outFrame,
        downFrame = _ref4.downFrame,
        upFrame = _ref4.upFrame,
        style = _ref4.style;

    _classCallCheck(this, GameSlots);

    _this4 = _possibleConstructorReturn(this, (GameSlots.__proto__ || Object.getPrototypeOf(GameSlots)).call(this, game));
    var yOffset = y;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = availableGames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _availableGame = _step.value;
        var slot = new Phaser.Button(_this4.game, x, yOffset, asset, callback.bind(callbackContext, {
          game_id: _availableGame.id
        }), null, overFrame, outFrame, downFrame, upFrame);
        slot.anchor.setTo(0.5);
        slot.text = new Phaser.Text(_this4.game, 0, 0, "Join Game: ".concat(_availableGame.name), style);
        slot.text.anchor.setTo(0.5);
        slot.addChild(slot.text);

        _this4.add(slot);

        yOffset += 50;
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

    return _this4;
  }

  _createClass(GameSlots, [{
    key: "destroy",
    value: function destroy() {
      this.callAll('kill'); // destroy
    }
  }]);

  return GameSlots;
}(Phaser.Group);

exports.GameSlots = GameSlots;

var PlayerSlots =
/*#__PURE__*/
function (_Phaser$Group2) {
  _inherits(PlayerSlots, _Phaser$Group2);

  function PlayerSlots(_ref5) {
    var _this5;

    var game = _ref5.game,
        max_players = _ref5.max_players,
        players = _ref5.players,
        x = _ref5.x,
        y = _ref5.y,
        asset_box = _ref5.asset_box,
        asset_player = _ref5.asset_player;

    _classCallCheck(this, PlayerSlots);

    _this5 = _possibleConstructorReturn(this, (PlayerSlots.__proto__ || Object.getPrototypeOf(PlayerSlots)).call(this, game));
    var xOffset = x;

    for (var i = 0; i < max_players; i++) {
      var _player = players[i];
      var slotBox = new Phaser.Sprite(_this5.game, xOffset, y, asset_box, 0);

      if (_player) {
        var slotPlayer = new Phaser.Image(_this5.game, 5, 5, asset_player + _player.color);
        slotBox.addChild(slotPlayer);
      }

      _this5.add(slotBox);

      xOffset += 100;
    }

    return _this5;
  }

  _createClass(PlayerSlots, [{
    key: "destroy",
    value: function destroy() {
      this.callAll('kill');
    }
  }]);

  return PlayerSlots;
}(Phaser.Group);

exports.PlayerSlots = PlayerSlots;

var SpoilNotification =
/*#__PURE__*/
function (_Phaser$Group3) {
  _inherits(SpoilNotification, _Phaser$Group3);

  function SpoilNotification(_ref6) {
    var _this6;

    var game = _ref6.game,
        asset = _ref6.asset,
        x = _ref6.x,
        y = _ref6.y;

    _classCallCheck(this, SpoilNotification);

    _this6 = _possibleConstructorReturn(this, (SpoilNotification.__proto__ || Object.getPrototypeOf(SpoilNotification)).call(this, game));
    _this6.picture = new Phaser.Image(_this6.game, x, y - 20, asset);

    _this6.picture.anchor.setTo(0.5);

    _this6.add(_this6.picture);

    _this6.tween = _this6.game.add.tween(_this6.picture);

    _this6.tween.to({
      y: _this6.picture.y - 25,
      alpha: 0
    }, 600);

    _this6.tween.onComplete.add(_this6.finish, _this6);

    _this6.tween.start();

    return _this6;
  }

  _createClass(SpoilNotification, [{
    key: "finish",
    value: function finish() {
      this.callAll('kill');
    }
  }]);

  return SpoilNotification;
}(Phaser.Group);

exports.SpoilNotification = SpoilNotification;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LAYER = exports.TILESET = exports.AVAILABLE_MAPS = exports.characterOffsetY = exports.characterOffsetX = exports.characterSquareYDistance = exports.characterSquareXDistance = exports.characterSquareStartingY = exports.characterSquareStartingX = exports.leaveButtonYOffset = exports.startGameButtonYOffset = exports.buttonXOffset = exports.stageNameYOffset = exports.thumbnailYOffset = exports.thumbnailXOffset = exports.yOffset = exports.xOffset = void 0;
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
var characterOffsetX = 4.5;
exports.characterOffsetX = characterOffsetX;
var characterOffsetY = 4.5;
exports.characterOffsetY = characterOffsetY;
var AVAILABLE_MAPS = ['hot_map', 'cold_map'];
exports.AVAILABLE_MAPS = AVAILABLE_MAPS;
var TILESET = 'tiles';
exports.TILESET = TILESET;
var LAYER = 'Blocks';
exports.LAYER = LAYER;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _boot = _interopRequireDefault(__webpack_require__(3));

var _preload = _interopRequireDefault(__webpack_require__(4));

var _menu = _interopRequireDefault(__webpack_require__(5));

var _select_map = _interopRequireDefault(__webpack_require__(6));

var _pending_game = _interopRequireDefault(__webpack_require__(7));

var _play = _interopRequireDefault(__webpack_require__(8));

var _win = _interopRequireDefault(__webpack_require__(17));

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

    // 960 / 600
    _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 875, 525, Phaser.AUTO, 'game-container'));

    _this.state.add('Boot', _boot.default);

    _this.state.add('Preload', _preload.default);

    _this.state.add('Menu', _menu.default);

    _this.state.add('SelectMap', _select_map.default);

    _this.state.add('PendingGame', _pending_game.default);

    _this.state.add('Play', _play.default);

    _this.state.add('Win', _win.default);

    _this.state.start('Boot');

    return _this;
  }

  return Game;
}(Phaser.Game);

new Game();

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
      this.game.stage.backgroundColor = '#000';
    }
  }, {
    key: "create",
    value: function create() {
      // This is not mandatory, but useful, as it will make the game keep reacting to messages from the server even when the game window doesn’t have focus (which is a desired behavior for most games).
      this.game.stage.disableVisibilityChange = true;
      this.add.text(80, 150, 'Loading...', {
        font: '30px Courier',
        fill: '#FFFFFF'
      });
      this.state.start('Preload');
    }
  }]);

  return Boot;
}(Phaser.State);

var _default = Boot;
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
      this.load.image('background', "images/background.png");
      this.load.spritesheet("game_slot", 'images/game_slot.png', 522, 48);
      this.load.spritesheet("game_number", 'images/game_number.png', 522, 48);
      this.load.image('background_select', 'images/Background_select.png');
      this.load.image('select_stage', 'images/select_stage.png');
      this.load.image('pending_game_backdrop', 'images/lobby_backdrop.png');
      this.load.spritesheet('start_game_button', 'images/start_game_button.png', 202, 43);
      this.load.spritesheet('leave_game_button', 'images/leave_game_button.png', 202, 43);
      this.load.spritesheet('character_square', 'images/character_square.png', 89, 89);
      this.load.image('pinkBlock', 'images/assets/pinkBlock.png');
      this.load.image('blueBlock', 'images/assets/blueBlock.png');
      this.load.spritesheet('accept', 'images/assets/accept.png', 80, 80);
      this.load.image('prev', 'images/assets/prev.png');
      this.load.image('next', 'images/assets/next.png');
      this.load.image('bomberman_head_white', 'images/icon_white.png');
      this.load.image('bomberman_head_blue', 'images/icon_blue.png');
      this.load.image('bomberman_head_red', 'images/icon_red.png');
      this.load.image('bomberman_head_black', 'images/icon_black.png');
      this.load.image('tiles', 'maps/tileset.png');
      this.load.tilemap('hot_map', 'maps/hot_map.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.tilemap('cold_map', 'maps/cold_map.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.spritesheet('bomberman_white', 'images/bomberman_white.png', 32, 64);
      this.load.spritesheet('bomberman_black', 'images/bomberman_black.png', 32, 64);
      this.load.spritesheet('bomberman_blue', 'images/bomberman_blue.png', 32, 64);
      this.load.spritesheet('bomberman_red', 'images/bomberman_red.png', 32, 64);
      this.load.spritesheet('bomb', 'images/bomb.png', 35, 35);
      this.load.spritesheet('explosion_center', 'images/explosion_center.png', 30, 30);
      this.load.spritesheet('explosion_horizontal', 'images/explosion_horizontal.png', 30, 30);
      this.load.spritesheet('explosion_vertical', 'images/explosion_vertical.png', 30, 30);
      this.load.spritesheet('explosion_up', 'images/explosion_up.png', 30, 30);
      this.load.spritesheet('explosion_right', 'images/explosion_right.png', 30, 30);
      this.load.spritesheet('explosion_down', 'images/explosion_down.png', 30, 30);
      this.load.spritesheet('explosion_left', 'images/explosion_left.png', 30, 30);
      this.load.spritesheet('spoil_tiles', 'images/spoil_tiles.png', 35, 35);
      this.load.spritesheet('bone', 'images/bone.png', 35, 35);
      this.load.image('speed_up_bonus', 'images/speed_up_bonus.png');
      this.load.image('speed_up_no_bonus', 'images/speed_up_bonus.png');
      this.load.image('delay_up_bonus', 'images/delay_up_bonus.png');
      this.load.image('delay_up_no_bonus', 'images/delay_up_bonus.png');
      this.load.image('power_up_bonus', 'images/power_up_bonus.png');
      this.load.image('speed', 'images/speed.png');
      this.load.image('power', 'images/power.png');
      this.load.image('delay', 'images/delay.png');
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elements = __webpack_require__(0);

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
var slotsWithGame = null;

var Menu =
/*#__PURE__*/
function (_Phaser$State) {
  _inherits(Menu, _Phaser$State);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      clientSocket.on('display pending games', this.displayPendingGames.bind(this));
    }
  }, {
    key: "create",
    value: function create() {
      this.add.sprite(0, 0, 'background');
      new _elements.Text({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY,
        text: 'new Start',
        style: {
          font: '50px Areal',
          fill: '#FFFFFF'
        }
      });
      new _elements.TextButton({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY + 100,
        asset: 'game_slot',
        callback: this.hostGameAction,
        callbackContext: this,
        overFrame: 0,
        outFrame: 1,
        downFrame: 2,
        upFrame: 1,
        label: 'New Game',
        style: {
          font: '20px Areal',
          fill: '#FFFFFF'
        }
      });
      clientSocket.emit('enter lobby', this.displayPendingGames.bind(this));
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "hostGameAction",
    value: function hostGameAction() {
      clientSocket.emit('leave lobby');
      this.state.start('SelectMap');
    }
  }, {
    key: "displayPendingGames",
    value: function displayPendingGames(availableGames) {
      // NOTE: That is not optimal way to preview slots,
      //       we should implement AddSlotToGroup, RemoveSlotFromGroup
      // I triying to care about readability, not about performance.
      if (slotsWithGame) {
        slotsWithGame.destroy();
      }

      slotsWithGame = new _elements.GameSlots({
        game: this.game,
        availableGames: availableGames,
        callback: this.joinGameAction,
        callbackContext: this,
        x: this.game.world.centerX,
        y: 50,
        asset: 'game_number',
        overFrame: 0,
        outFrame: 1,
        downFrame: 2,
        upFrame: 1,
        style: {
          font: '20px Areal',
          fill: '#FFFFFF'
        }
      });
    }
  }, {
    key: "joinGameAction",
    value: function joinGameAction(game_id) {
      clientSocket.emit('leave lobby'); // https://phaser.io/docs/2.6.2/Phaser.StateManager.html#start

      this.state.start('PendingGame', true, false, game_id);
    }
  }]);

  return Menu;
}(Phaser.State);

var _default = Menu;
exports.default = _default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(1);

var _elements = __webpack_require__(0);

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
      this.slider = new phaseSlider(this);
    }
  }, {
    key: "create",
    value: function create() {
      this.add.sprite(0, 0, 'background_select');
      var pinkBlock = this.add.image(0, 0, 'pinkBlock');
      var blueBlock = this.add.image(0, 0, 'blueBlock'); // WARN: https://github.com/netgfx/PhaseSlider/issues/1

      this.slider.createSlider({
        x: this.game.world.centerX - pinkBlock.width / 2,
        y: this.game.world.centerY - pinkBlock.height / 2,
        customHandlePrev: 'prev',
        customHandleNext: 'next',
        objects: [pinkBlock, blueBlock]
      });
      new _elements.Button({
        game: this.game,
        x: this.game.world.centerX,
        y: 425,
        asset: 'accept',
        callback: this.confirmStageSelection,
        callbackContext: this,
        overFrame: 1,
        outFrame: 0,
        downFrame: 1,
        upFrame: 0
      });
    }
  }, {
    key: "confirmStageSelection",
    value: function confirmStageSelection() {
      var map_name = _constants.AVAILABLE_MAPS[this.slider.getCurrentIndex()];

      clientSocket.emit('create game', map_name, this.joinToNewGame.bind(this));
    }
  }, {
    key: "joinToNewGame",
    value: function joinToNewGame(game_id) {
      this.state.start('PendingGame', true, false, game_id);
    }
  }]);

  return SelectMap;
}(Phaser.State);

var _default = SelectMap;
exports.default = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elements = __webpack_require__(0);

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
    value: function init(_ref) {
      var game_id = _ref.game_id;
      this.profileBoxes = [];
      this.profileImages = [];
      this.slotsWithPlayer = null;
      this.game_id = game_id;
      clientSocket.on('update game', this.displayGameInfo.bind(this));
      clientSocket.on('launch game', this.launchGame.bind(this));
      clientSocket.emit('enter pending game', {
        game_id: this.game_id
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.add.sprite(0, 0, 'background_select');
      this.gameTitle = new _elements.Text({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY - 240,
        text: '',
        style: {
          font: '24px Areal',
          fill: '#FFFFFF'
        }
      });
      this.startGameButton = new _elements.Button({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY + 100,
        asset: 'start_game_button',
        callback: this.startGameAction,
        callbackContext: this,
        overFrame: 1,
        outFrame: 0,
        downFrame: 2,
        upFrame: 0
      });
      this.startGameButton.disable();
      new _elements.Button({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY + 150,
        asset: 'leave_game_button',
        callback: this.leaveGameAction,
        callbackContext: this,
        overFrame: 1,
        outFrame: 0,
        downFrame: 1,
        upFrame: 0
      });
    }
  }, {
    key: "displayGameInfo",
    value: function displayGameInfo(_ref2) {
      var current_game = _ref2.current_game;
      var players = Object.values(current_game.players);
      this.gameTitle.text = "Game name: ".concat(current_game.name);

      if (this.slotsWithPlayer) {
        this.slotsWithPlayer.destroy();
      }

      this.slotsWithPlayer = new _elements.PlayerSlots({
        game: this.game,
        max_players: current_game.max_players,
        players: players,
        x: this.game.world.centerX - 150,
        y: 100,
        asset_box: 'character_square',
        asset_player: 'bomberman_head_'
      });

      if (players.length > 1) {
        this.startGameButton.enable();
      } else {
        this.startGameButton.disable();
      }
    }
  }, {
    key: "leaveGameAction",
    value: function leaveGameAction() {
      clientSocket.emit('leave pending game');
      this.state.start('Menu');
    }
  }, {
    key: "startGameAction",
    value: function startGameAction() {
      clientSocket.emit('start game');
    }
  }, {
    key: "launchGame",
    value: function launchGame(game) {
      this.state.start('Play', true, false, game);
    }
  }]);

  return PendingGame;
}(Phaser.State);

var _default = PendingGame;
exports.default = _default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(9);

var _constants = __webpack_require__(1);

var _player = _interopRequireDefault(__webpack_require__(10));

var _enemy_player = _interopRequireDefault(__webpack_require__(12));

var _bomb = _interopRequireDefault(__webpack_require__(13));

var _spoil = _interopRequireDefault(__webpack_require__(14));

var _fire_blast = _interopRequireDefault(__webpack_require__(15));

var _bone = _interopRequireDefault(__webpack_require__(16));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Play =
/*#__PURE__*/
function (_Phaser$State) {
  _inherits(Play, _Phaser$State);

  function Play() {
    _classCallCheck(this, Play);

    return _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).apply(this, arguments));
  }

  _createClass(Play, [{
    key: "init",
    value: function init(game) {
      this.currentGame = game;
    }
  }, {
    key: "create",
    value: function create() {
      this.createMap();
      this.createPlayers();
      this.setEventHandlers();
      this.game.time.events.loop(400, this.stopAnimationLoop.bind(this));
    }
  }, {
    key: "update",
    value: function update() {
      this.game.physics.arcade.collide(this.player, this.blockLayer);
      this.game.physics.arcade.collide(this.player, this.enemies);
      this.game.physics.arcade.collide(this.player, this.bombs);
      this.game.physics.arcade.overlap(this.player, this.spoils, this.onPlayerVsSpoil, null, this);
      this.game.physics.arcade.overlap(this.player, this.blasts, this.onPlayerVsBlast, null, this);
    }
  }, {
    key: "createMap",
    value: function createMap() {
      this.map = this.add.tilemap(this.currentGame.map_name);
      this.map.addTilesetImage(_constants.TILESET);
      this.blockLayer = this.map.createLayer(_constants.LAYER);
      this.blockLayer.resizeWorld();
      this.map.setCollision(this.blockLayer.layer.properties.collisionTiles);
      this.player = null;
      this.bones = this.game.add.group();
      this.bombs = this.game.add.group();
      this.spoils = this.game.add.group();
      this.blasts = this.game.add.group();
      this.enemies = this.game.add.group();
      this.game.physics.arcade.enable(this.blockLayer);
    }
  }, {
    key: "createPlayers",
    value: function createPlayers() {
      var _arr = Object.values(this.currentGame.players);

      for (var _i = 0; _i < _arr.length; _i++) {
        var player = _arr[_i];
        var setup = {
          game: this.game,
          id: player.id,
          spawn: player.spawn,
          color: player.color
        };

        if (player.id === clientSocket.id) {
          this.player = new _player.default(setup);
        } else {
          this.enemies.add(new _enemy_player.default(setup));
        }
      }
    }
  }, {
    key: "setEventHandlers",
    value: function setEventHandlers() {
      clientSocket.on('move player', this.onMovePlayer.bind(this));
      clientSocket.on('player win', this.onPlayerWin.bind(this));
      clientSocket.on('show bomb', this.onShowBomb.bind(this));
      clientSocket.on('detonate bomb', this.onDetonateBomb.bind(this));
      clientSocket.on('spoil was picked', this.onSpoilWasPicked.bind(this));
      clientSocket.on('show bones', this.onShowBones.bind(this));
      clientSocket.on('player disconnect', this.onPlayerDisconnect.bind(this));
    }
  }, {
    key: "onPlayerVsSpoil",
    value: function onPlayerVsSpoil(player, spoil) {
      clientSocket.emit('pick up spoil', {
        spoil_id: spoil.id
      });
      spoil.kill();
    }
  }, {
    key: "onPlayerVsBlast",
    value: function onPlayerVsBlast(player, blast) {
      if (player.alive) {
        clientSocket.emit('player died', {
          col: player.currentCol(),
          row: player.currentRow()
        });
        player.becomesDead();
      }
    }
  }, {
    key: "onMovePlayer",
    value: function onMovePlayer(_ref) {
      var player_id = _ref.player_id,
          x = _ref.x,
          y = _ref.y;
      var enemy = (0, _utils.findFrom)(player_id, this.enemies);

      if (!enemy) {
        return;
      }

      enemy.goTo({
        x: x,
        y: y
      });
    }
  }, {
    key: "stopAnimationLoop",
    value: function stopAnimationLoop() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.enemies.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _enemy = _step.value;

          if (_enemy.lastMoveAt < this.game.time.now - 200) {
            _enemy.animations.stop();
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
    key: "onShowBomb",
    value: function onShowBomb(_ref2) {
      var bomb_id = _ref2.bomb_id,
          col = _ref2.col,
          row = _ref2.row;
      this.bombs.add(new _bomb.default(this.game, bomb_id, col, row));
    }
  }, {
    key: "onDetonateBomb",
    value: function onDetonateBomb(_ref3) {
      var bomb_id = _ref3.bomb_id,
          blastedCells = _ref3.blastedCells;
      // Remove Bomb:
      (0, _utils.findAndDestroyFrom)(bomb_id, this.bombs); // Render Blast:

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = blastedCells[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _cell3 = _step2.value;
          this.blasts.add(new _fire_blast.default(this.game, _cell3));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      ; // Destroy Tiles:

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = blastedCells[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _cell4 = _step3.value;

          if (!_cell4.destroyed) {
            continue;
          }

          this.map.putTile(this.blockLayer.layer.properties.empty, _cell4.col, _cell4.row, this.blockLayer);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      ; // Add Spoils:

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = blastedCells[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _cell5 = _step4.value;

          if (!_cell5.destroyed) {
            continue;
          }

          if (!_cell5.spoil) {
            continue;
          }

          this.spoils.add(new _spoil.default(this.game, _cell5.spoil));
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      ;
    }
  }, {
    key: "onSpoilWasPicked",
    value: function onSpoilWasPicked(_ref4) {
      var player_id = _ref4.player_id,
          spoil_id = _ref4.spoil_id,
          spoil_type = _ref4.spoil_type;

      if (player_id === this.player.id) {
        this.player.pickSpoil(spoil_type);
      }

      (0, _utils.findAndDestroyFrom)(spoil_id, this.spoils);
    }
  }, {
    key: "onShowBones",
    value: function onShowBones(_ref5) {
      var player_id = _ref5.player_id,
          col = _ref5.col,
          row = _ref5.row;
      this.bones.add(new _bone.default(this.game, col, row));
      (0, _utils.findAndDestroyFrom)(player_id, this.enemies);
    }
  }, {
    key: "onPlayerWin",
    value: function onPlayerWin(winner_color) {
      clientSocket.emit('leave game');
      this.state.start('Win', true, false, winner_color);
    }
  }, {
    key: "onPlayerDisconnect",
    value: function onPlayerDisconnect(_ref6) {
      var player_id = _ref6.player_id;
      (0, _utils.findAndDestroyFrom)(player_id, this.enemies);

      if (this.enemies.children.length >= 1) {
        return;
      }

      this.onPlayerWin();
    }
  }]);

  return Play;
}(Phaser.State);

var _default = Play;
exports.default = _default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAndDestroyFrom = exports.findFrom = void 0;

var findFrom = function findFrom(id, entities) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = entities.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _entity = _step.value;

      if (_entity.id !== id) {
        continue;
      }

      return _entity;
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

  return null;
};

exports.findFrom = findFrom;

var findAndDestroyFrom = function findAndDestroyFrom(id, entities) {
  var entity = findFrom(id, entities);

  if (!entity) {
    return;
  }

  entity.destroy();
};

exports.findAndDestroyFrom = findAndDestroyFrom;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _info = _interopRequireDefault(__webpack_require__(11));

var _elements = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PING = 100; // - Need to be depended on positionUpdaterLoop

var TILE_SIZE = 35;
var SPEED = 0;
var POWER = 1;
var DELAY = 2;
var MAX_SPEED = 350;
var STEP_SPEED = 50;
var INITIAL_SPEED = 150;
var MIN_DELAY = 500;
var STEP_DELAY = 500;
var INITIAL_DELAY = 2000;
var INITIAL_POWER = 1;
var STEP_POWER = 1;

var Player =
/*#__PURE__*/
function (_Phaser$Sprite) {
  _inherits(Player, _Phaser$Sprite);

  function Player(_ref) {
    var _this;

    var game = _ref.game,
        id = _ref.id,
        spawn = _ref.spawn,
        color = _ref.color;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, game, spawn.x, spawn.y, 'bomberman_' + color));
    _this.game = game;
    _this.id = id;
    _this.prevPosition = {
      x: spawn.x,
      y: spawn.y
    };
    _this.delay = INITIAL_DELAY;
    _this.power = INITIAL_POWER;
    _this.speed = INITIAL_SPEED;
    _this._lastBombTime = 0;

    _this.game.add.existing(_this);

    _this.game.physics.arcade.enable(_this);

    _this.body.setSize(20, 20, 0, 0);

    game.time.events.loop(PING, _this.positionUpdaterLoop.bind(_this));

    _this.animations.add('up', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);

    _this.animations.add('down', [8, 9, 10, 11, 12, 13, 14, 15], 15, true);

    _this.animations.add('right', [16, 17, 18, 19, 20, 21, 22, 23], 15, true);

    _this.animations.add('left', [24, 25, 26, 27, 28, 29, 30, 31], 15, true);

    _this.info = new _info.default({
      game: _this.game,
      player: _this
    });

    _this.defineKeyboard();

    _this.defineSelf();

    return _this;
  }

  _createClass(Player, [{
    key: "update",
    value: function update() {
      if (this.alive) {
        this.handleMoves();
        this.handleBombs();
      }

      this.game.debug.body(this); // this.game.debug.spriteInfo(this, 32, 32);
    }
  }, {
    key: "defineKeyboard",
    value: function defineKeyboard() {
      this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
      this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
      this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
      this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
      this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }
  }, {
    key: "handleMoves",
    value: function handleMoves() {
      this.body.velocity.set(0);
      var animationsArray = [];

      if (this.leftKey.isDown) {
        this.body.velocity.x = -this.speed;
        animationsArray.push('left');
      } else if (this.rightKey.isDown) {
        this.body.velocity.x = this.speed;
        animationsArray.push('right');
      }

      if (this.upKey.isDown) {
        this.body.velocity.y = -this.speed;
        animationsArray.push('up');
      } else if (this.downKey.isDown) {
        this.body.velocity.y = this.speed;
        animationsArray.push('down');
      }

      var currentAnimation = animationsArray[0];

      if (currentAnimation) {
        this.animations.play(currentAnimation);
        return;
      }

      this.animations.stop();
    }
  }, {
    key: "handleBombs",
    value: function handleBombs() {
      if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
        var now = this.game.time.now;

        if (now > this._lastBombTime) {
          this._lastBombTime = now + this.delay;
          clientSocket.emit('create bomb', {
            col: this.currentCol(),
            row: this.currentRow()
          });
        }
      }
    }
  }, {
    key: "currentCol",
    value: function currentCol() {
      return Math.floor(this.body.position.x / TILE_SIZE);
    }
  }, {
    key: "currentRow",
    value: function currentRow() {
      return Math.floor(this.body.position.y / TILE_SIZE);
    }
  }, {
    key: "positionUpdaterLoop",
    value: function positionUpdaterLoop() {
      var newPosition = {
        x: this.position.x,
        y: this.position.y
      };

      if (this.prevPosition.x !== newPosition.x || this.prevPosition.y !== newPosition.y) {
        clientSocket.emit('update player position', newPosition);
        this.prevPosition = newPosition;
      }
    }
  }, {
    key: "becomesDead",
    value: function becomesDead() {
      this.info.showDeadInfo();
      this.kill();
    }
  }, {
    key: "pickSpoil",
    value: function pickSpoil(spoil_type) {
      if (spoil_type === SPEED) {
        this.increaseSpeed();
      }

      if (spoil_type === POWER) {
        this.increasePower();
      }

      if (spoil_type === DELAY) {
        this.increaseDelay();
      } // Play something

    }
  }, {
    key: "increaseSpeed",
    value: function increaseSpeed() {
      var asset = 'speed_up_no_bonus';

      if (this.speed < MAX_SPEED) {
        this.speed = this.speed + STEP_SPEED;
        this.info.refreshStatistic();
        asset = 'speed_up_bonus';
      }

      new _elements.SpoilNotification({
        game: this.game,
        asset: asset,
        x: this.position.x,
        y: this.position.y
      });
    }
  }, {
    key: "increaseDelay",
    value: function increaseDelay() {
      var asset = 'delay_up_no_bonus';

      if (this.delay > MIN_DELAY) {
        this.delay -= STEP_DELAY;
        this.info.refreshStatistic();
        asset = 'delay_up_bonus';
      }

      new _elements.SpoilNotification({
        game: this.game,
        asset: asset,
        x: this.position.x,
        y: this.position.y
      });
    }
  }, {
    key: "increasePower",
    value: function increasePower() {
      var asset = 'power_up_bonus';
      this.power += STEP_POWER;
      this.info.refreshStatistic();
      new _elements.SpoilNotification({
        game: this.game,
        asset: asset,
        x: this.position.x,
        y: this.position.y
      });
    }
  }, {
    key: "defineSelf",
    value: function defineSelf() {
      var playerText = new _elements.Text({
        game: this.game,
        x: 10,
        y: -10,
        text: 'Me',
        style: {
          font: '15px Areal',
          fill: '#FFFFFF'
        }
      });
      this.addChild(playerText);
    }
  }]);

  return Player;
}(Phaser.Sprite);

exports.default = Player;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Info =
/*#__PURE__*/
function () {
  function Info(_ref) {
    var game = _ref.game,
        player = _ref.player;

    _classCallCheck(this, Info);

    this.game = game;
    this.player = player;
    this.style = {
      font: '20px Arial',
      fill: '#ffffff',
      align: 'left'
    };
    this.redStyle = {
      font: '30px Arial',
      fill: '#ff0044',
      align: 'center'
    };
    var bootsIcon = new Phaser.Image(this.game, 10, 10, 'speed');
    this.speedText = new Phaser.Text(this.game, 37, 3, this.speedLabel(), this.style);
    bootsIcon.addChild(this.speedText);
    this.game.add.existing(bootsIcon);
    var powerIcon = new Phaser.Image(this.game, 110, 10, 'delay');
    this.powerText = new Phaser.Text(this.game, 37, 3, this.powerLabel(), this.style);
    powerIcon.addChild(this.powerText);
    this.game.add.existing(powerIcon);
    var delayIcon = new Phaser.Image(this.game, 185, 10, 'power');
    this.delayText = new Phaser.Text(this.game, 37, 3, this.delayLabel(), this.style);
    delayIcon.addChild(this.delayText);
    this.game.add.existing(delayIcon);
    this.deadText = this.game.add.text(this.game.world.centerX, this.game.world.height - 30, 'You died :(', this.redStyle);
    this.deadText.anchor.set(0.5);
    this.deadText.visible = false;
  }

  _createClass(Info, [{
    key: "refreshStatistic",
    value: function refreshStatistic() {
      this.speedText.text = this.speedLabel();
      this.powerText.text = this.powerLabel();
      this.delayText.text = this.delayLabel();
    }
  }, {
    key: "showDeadInfo",
    value: function showDeadInfo() {
      this.deadText.visible = true;
    }
  }, {
    key: "speedLabel",
    value: function speedLabel() {
      return "x ".concat(this.player.speed);
    }
  }, {
    key: "powerLabel",
    value: function powerLabel() {
      return "x ".concat(this.player.power);
    }
  }, {
    key: "delayLabel",
    value: function delayLabel() {
      return "x ".concat(this.player.delay / 1000, " sec.");
    }
  }]);

  return Info;
}();

exports.default = Info;

/***/ }),
/* 12 */
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

var PING = 100;

var EnemyPlayer =
/*#__PURE__*/
function (_Phaser$Sprite) {
  _inherits(EnemyPlayer, _Phaser$Sprite);

  function EnemyPlayer(_ref) {
    var _this;

    var game = _ref.game,
        id = _ref.id,
        spawn = _ref.spawn,
        color = _ref.color;

    _classCallCheck(this, EnemyPlayer);

    _this = _possibleConstructorReturn(this, (EnemyPlayer.__proto__ || Object.getPrototypeOf(EnemyPlayer)).call(this, game, spawn.x, spawn.y, 'bomberman_' + color));
    _this.game = game;
    _this.id = id;
    _this.currentPosition = spawn;
    _this.lastMoveAt = 0;

    _this.game.physics.arcade.enable(_this);

    _this.body.setSize(20, 20, 0, 0);

    _this.body.immovable = true;

    _this.animations.add('up', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);

    _this.animations.add('down', [8, 9, 10, 11, 12, 13, 14, 15], 15, true);

    _this.animations.add('right', [16, 17, 18, 19, 20, 21, 22, 23], 15, true);

    _this.animations.add('left', [24, 25, 26, 27, 28, 29, 30, 31], 15, true);

    return _this;
  }

  _createClass(EnemyPlayer, [{
    key: "update",
    value: function update() {
      this.game.debug.body(this);
    }
  }, {
    key: "goTo",
    value: function goTo(newPosition) {
      this.lastMoveAt = this.game.time.now;
      this.animateFace(newPosition);
      this.game.add.tween(this).to(newPosition, PING, Phaser.Easing.Linear.None, true);
    }
  }, {
    key: "animateFace",
    value: function animateFace(newPosition) {
      var face = 'down';
      var diffX = newPosition.x - this.currentPosition.x;
      var diffY = newPosition.y - this.currentPosition.y;

      if (diffX < 0) {
        face = 'left';
      } else if (diffX > 0) {
        face = 'right';
      } else if (diffY < 0) {
        face = 'up';
      } else if (diffY > 0) {
        face = 'down';
      }

      this.animations.play(face);
      this.currentPosition = newPosition;
    }
  }]);

  return EnemyPlayer;
}(Phaser.Sprite);

exports.default = EnemyPlayer;

/***/ }),
/* 13 */
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

var TILE_SIZE = 35;
var explosion_time = 2000;

var Bomb =
/*#__PURE__*/
function (_Phaser$Sprite) {
  _inherits(Bomb, _Phaser$Sprite);

  function Bomb(game, id, col, row) {
    var _this;

    _classCallCheck(this, Bomb);

    var centerCol = col * TILE_SIZE + TILE_SIZE / 2;
    var centerRow = row * TILE_SIZE + TILE_SIZE / 2;
    _this = _possibleConstructorReturn(this, (Bomb.__proto__ || Object.getPrototypeOf(Bomb)).call(this, game, centerCol, centerRow, 'bomb'));

    _this.scale.setTo(0.7);

    _this.anchor.setTo(0.5);

    _this.game = game;
    _this.id = id;

    _this.game.physics.arcade.enable(_this);

    _this.game.add.tween(_this.scale).to({
      x: 1.2,
      y: 1.2
    }, explosion_time, Phaser.Easing.Linear.None, true);

    _this.body.immovable = true;

    _this.animations.add('bomb', [0, 1, 2], 3, true);

    _this.animations.play('bomb');

    return _this;
  }

  _createClass(Bomb, [{
    key: "update",
    value: function update() {
      this.game.debug.body(this);
    }
  }]);

  return Bomb;
}(Phaser.Sprite);

exports.default = Bomb;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SPEED = 0;
var POWER = 1;
var DELAY = 2;
var TILE_SIZE = 35;

var Spoil =
/*#__PURE__*/
function (_Phaser$Sprite) {
  _inherits(Spoil, _Phaser$Sprite);

  function Spoil(game, spoil) {
    var _this;

    _classCallCheck(this, Spoil);

    var spoil_type;

    if (spoil.spoil_type === SPEED) {
      spoil_type = 0;
    }

    if (spoil.spoil_type === POWER) {
      spoil_type = 1;
    }

    if (spoil.spoil_type === DELAY) {
      spoil_type = 2;
    }

    _this = _possibleConstructorReturn(this, (Spoil.__proto__ || Object.getPrototypeOf(Spoil)).call(this, game, spoil.col * TILE_SIZE, spoil.row * TILE_SIZE, 'spoil_tiles', spoil_type));
    _this.id = spoil.id;

    _this.game.physics.arcade.enable(_this);

    return _this;
  }

  return Spoil;
}(Phaser.Sprite);

exports.default = Spoil;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TILE_SIZE = 35;

var FireBlast =
/*#__PURE__*/
function (_Phaser$Sprite) {
  _inherits(FireBlast, _Phaser$Sprite);

  function FireBlast(game, cell) {
    var _this;

    _classCallCheck(this, FireBlast);

    _this = _possibleConstructorReturn(this, (FireBlast.__proto__ || Object.getPrototypeOf(FireBlast)).call(this, game, cell.col * TILE_SIZE, cell.row * TILE_SIZE, cell.type, 0));
    _this.game = game;

    _this.animations.add('blast', [0, 1, 2, 3, 4]); // 15 - framerate, loop, kill_on_complete


    _this.play('blast', 15, false, true);

    _this.game.physics.arcade.enable(_this);

    return _this;
  }

  return FireBlast;
}(Phaser.Sprite);

exports.default = FireBlast;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TILE_SIZE = 35;

var Bone =
/*#__PURE__*/
function (_Phaser$Sprite) {
  _inherits(Bone, _Phaser$Sprite);

  function Bone(game, col, row) {
    _classCallCheck(this, Bone);

    return _possibleConstructorReturn(this, (Bone.__proto__ || Object.getPrototypeOf(Bone)).call(this, game, col * TILE_SIZE, row * TILE_SIZE, 'bone', 0));
  }

  return Bone;
}(Phaser.Sprite);

exports.default = Bone;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elements = __webpack_require__(0);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Win =
/*#__PURE__*/
function (_Phaser$State) {
  _inherits(Win, _Phaser$State);

  function Win() {
    _classCallCheck(this, Win);

    return _possibleConstructorReturn(this, (Win.__proto__ || Object.getPrototypeOf(Win)).apply(this, arguments));
  }

  _createClass(Win, [{
    key: "init",
    value: function init(winner_color) {
      this.color = winner_color;
    }
  }, {
    key: "create",
    value: function create() {
      new _elements.Text({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY,
        text: this.winnerText(),
        style: {
          font: '30px Areal',
          fill: '#FFFFFF'
        }
      });
    }
  }, {
    key: "update",
    value: function update() {
      if (this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
        this.returnToMenu();
      }
    }
  }, {
    key: "returnToMenu",
    value: function returnToMenu() {
      this.state.start('Menu');
    }
  }, {
    key: "winnerText",
    value: function winnerText() {
      if (this.color) {
        return "Player with color: \"".concat(this.color, "\" won! Press Enter to return to main menu.");
      }

      return 'Opponent left! Press Enter to return to main menu.';
    }
  }]);

  return Win;
}(Phaser.State);

var _default = Win;
exports.default = _default;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map