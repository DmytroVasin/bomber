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
exports.GameSlots = exports.SpoilNotification = exports.PlayerSlots = exports.TextButton = exports.Button = exports.Text = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

  _createClass(TextButton, [{
    key: "disable",
    value: function disable() {
      this.setFrames(3, 3);
      this.inputEnabled = false;
      this.input.useHandCursor = false;
    }
  }, {
    key: "enable",
    value: function enable() {
      this.setFrames(1, 0, 2);
      this.inputEnabled = true;
      this.input.useHandCursor = true;
    }
  }]);

  return TextButton;
}(Phaser.Button);

exports.TextButton = TextButton;

var PlayerSlots =
/*#__PURE__*/
function (_Phaser$Group) {
  _inherits(PlayerSlots, _Phaser$Group);

  function PlayerSlots(_ref4) {
    var _this4;

    var game = _ref4.game,
        max_players = _ref4.max_players,
        players = _ref4.players,
        x = _ref4.x,
        y = _ref4.y,
        asset_empty = _ref4.asset_empty,
        asset_player = _ref4.asset_player,
        style = _ref4.style;

    _classCallCheck(this, PlayerSlots);

    _this4 = _possibleConstructorReturn(this, (PlayerSlots.__proto__ || Object.getPrototypeOf(PlayerSlots)).call(this, game));
    var xOffset = x;

    for (var i = 0; i < max_players; i++) {
      var slotBox = void 0;
      var slotName = void 0;
      var _player = players[i];

      if (_player) {
        slotBox = new Phaser.Image(_this4.game, xOffset, y, asset_player + _player.skin);
        slotName = new Phaser.Text(_this4.game, slotBox.width / 2, slotBox.height + 15, _player.skin, style);
        slotName.anchor.setTo(0.5);
        slotBox.addChild(slotName);
      } else {
        slotBox = new Phaser.Image(_this4.game, xOffset, y, asset_empty);
      }

      _this4.add(slotBox);

      xOffset += 170;
    }

    return _this4;
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
function (_Phaser$Group2) {
  _inherits(SpoilNotification, _Phaser$Group2);

  function SpoilNotification(_ref5) {
    var _this5;

    var game = _ref5.game,
        asset = _ref5.asset,
        x = _ref5.x,
        y = _ref5.y;

    _classCallCheck(this, SpoilNotification);

    _this5 = _possibleConstructorReturn(this, (SpoilNotification.__proto__ || Object.getPrototypeOf(SpoilNotification)).call(this, game));
    _this5.picture = new Phaser.Image(_this5.game, x, y - 20, asset);

    _this5.picture.anchor.setTo(0.5);

    _this5.add(_this5.picture);

    _this5.tween = _this5.game.add.tween(_this5.picture);

    _this5.tween.to({
      y: _this5.picture.y - 25,
      alpha: 0
    }, 600);

    _this5.tween.onComplete.add(_this5.finish, _this5);

    _this5.tween.start();

    return _this5;
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

var GameSlots =
/*#__PURE__*/
function (_Phaser$Group3) {
  _inherits(GameSlots, _Phaser$Group3);

  function GameSlots(_ref6) {
    var _this6;

    var game = _ref6.game,
        availableGames = _ref6.availableGames,
        callback = _ref6.callback,
        callbackContext = _ref6.callbackContext,
        x = _ref6.x,
        y = _ref6.y,
        style = _ref6.style;

    _classCallCheck(this, GameSlots);

    _this6 = _possibleConstructorReturn(this, (GameSlots.__proto__ || Object.getPrototypeOf(GameSlots)).call(this, game));
    var game_slot_asset = 'slot_backdrop';
    var game_enter_asset = 'list_icon';
    var yOffset = y;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = availableGames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _availableGame = _step.value;
        var gameBox = new Phaser.Image(_this6.game, x, yOffset, game_slot_asset);
        var button = new Phaser.Button(_this6.game, gameBox.width - 100, 12, game_enter_asset, callback.bind(callbackContext, {
          game_id: _availableGame.id
        }), null, 1, 0, 2, 1);
        var text = new Phaser.Text(_this6.game, 30, 25, "Join Game: ".concat(_availableGame.name), style);
        gameBox.addChild(button);
        gameBox.addChild(text);

        _this6.add(gameBox);

        yOffset += 105;
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

    return _this6;
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STEP_POWER = exports.INITIAL_POWER = exports.MIN_DELAY = exports.STEP_DELAY = exports.INITIAL_DELAY = exports.MAX_SPEED = exports.STEP_SPEED = exports.INITIAL_SPEED = exports.DELAY = exports.POWER = exports.SPEED = exports.PING = exports.EXPLOSION_TIME = exports.TILE_SIZE = exports.LAYER = exports.TILESET = exports.AVAILABLE_MAPS = void 0;
var AVAILABLE_MAPS = ['hot_map', 'cold_map'];
exports.AVAILABLE_MAPS = AVAILABLE_MAPS;
var TILESET = 'tiles';
exports.TILESET = TILESET;
var LAYER = 'Blocks';
exports.LAYER = LAYER;
var TILE_SIZE = 35;
exports.TILE_SIZE = TILE_SIZE;
var EXPLOSION_TIME = 2000;
exports.EXPLOSION_TIME = EXPLOSION_TIME;
var PING = 100;
exports.PING = PING;
var SPEED = 0;
exports.SPEED = SPEED;
var POWER = 1;
exports.POWER = POWER;
var DELAY = 2;
exports.DELAY = DELAY;
var INITIAL_SPEED = 150;
exports.INITIAL_SPEED = INITIAL_SPEED;
var STEP_SPEED = 50;
exports.STEP_SPEED = STEP_SPEED;
var MAX_SPEED = 350;
exports.MAX_SPEED = MAX_SPEED;
var INITIAL_DELAY = 2000;
exports.INITIAL_DELAY = INITIAL_DELAY;
var STEP_DELAY = 500;
exports.STEP_DELAY = STEP_DELAY;
var MIN_DELAY = 500;
exports.MIN_DELAY = MIN_DELAY;
var INITIAL_POWER = 1;
exports.INITIAL_POWER = INITIAL_POWER;
var STEP_POWER = 1;
exports.STEP_POWER = STEP_POWER;

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

var _win = _interopRequireDefault(__webpack_require__(15));

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

    _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 980, 630, Phaser.AUTO, 'game-container'));

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

var _elements = __webpack_require__(0);

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
    key: "create",
    value: function create() {
      // This is not mandatory, but useful, as it will make the game keep reacting to messages from the server even when the game window doesn’t have focus (which is a desired behavior for most games).
      // The game pauses when I open a new tab in the same window, but does not pause when I focus on another application
      this.game.stage.disableVisibilityChange = true;
      new _elements.Text({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY,
        text: 'Loading...',
        style: {
          font: '30px Areal',
          fill: '#FFFFFF'
        }
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
      // Menu:
      this.load.image('main_menu', 'images/menu/main_menu.png');
      this.load.image('slot_backdrop', 'images/menu/slot_backdrop.png');
      this.load.spritesheet('buttons', 'images/menu/buttons.png', 200, 75);
      this.load.spritesheet('check_icon', 'images/menu/accepts.png', 75, 75);
      this.load.spritesheet('list_icon', 'images/menu/game_enter.png', 75, 75);
      this.load.image('hot_map_preview', 'images/menu/hot_map_preview.png');
      this.load.image('cold_map_preview', 'images/menu/cold_map_preview.png');
      this.load.image('prev', 'images/menu/left_arrow.png');
      this.load.image('next', 'images/menu/right_arrow.png'); // Map:

      this.load.image('tiles', 'maps/tileset.png');
      this.load.tilemap('hot_map', 'maps/hot_map.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.tilemap('cold_map', 'maps/cold_map.json', null, Phaser.Tilemap.TILED_JSON); // Game:

      this.load.spritesheet('explosion_center', 'images/game/explosion_center.png', 35, 35);
      this.load.spritesheet('explosion_horizontal', 'images/game/explosion_horizontal.png', 35, 35);
      this.load.spritesheet('explosion_vertical', 'images/game/explosion_vertical.png', 35, 35);
      this.load.spritesheet('explosion_up', 'images/game/explosion_up.png', 35, 35);
      this.load.spritesheet('explosion_right', 'images/game/explosion_right.png', 35, 35);
      this.load.spritesheet('explosion_down', 'images/game/explosion_down.png', 35, 35);
      this.load.spritesheet('explosion_left', 'images/game/explosion_left.png', 35, 35);
      this.load.spritesheet('spoil_tileset', 'images/game/spoil_tileset.png', 35, 35);
      this.load.spritesheet('bone_tileset', 'images/game/bone_tileset.png', 35, 35);
      this.load.spritesheet('bomb_tileset', 'images/game/bombs.png', 35, 35);
      this.load.image('speed_up_bonus', 'images/game/speed_up_bonus.png');
      this.load.image('speed_up_no_bonus', 'images/game/speed_up_no_bonus.png');
      this.load.image('delay_up_bonus', 'images/game/delay_up_bonus.png');
      this.load.image('delay_up_no_bonus', 'images/game/delay_up_no_bonus.png');
      this.load.image('power_up_bonus', 'images/game/power_up_bonus.png');
      this.load.image('placeholder_power', 'images/game/placeholder_power.png');
      this.load.image('placeholder_speed', 'images/game/placeholder_speed.png');
      this.load.image('placeholder_time', 'images/game/placeholder_time.png'); // Skins:

      this.load.image('bomberman_head_blank', 'images/game/chars/0-face.png');
      this.load.image('bomberman_head_Theodora', 'images/game/chars/1-face.png');
      this.load.image('bomberman_head_Ringo', 'images/game/chars/2-face.png');
      this.load.image('bomberman_head_Jeniffer', 'images/game/chars/3-face.png');
      this.load.image('bomberman_head_Godard', 'images/game/chars/4-face.png');
      this.load.image('bomberman_head_Biarid', 'images/game/chars/5-face.png');
      this.load.image('bomberman_head_Solia', 'images/game/chars/6-face.png');
      this.load.image('bomberman_head_Kedan', 'images/game/chars/7-face.png');
      this.load.image('bomberman_head_Nigob', 'images/game/chars/8-face.png');
      this.load.image('bomberman_head_Baradir', 'images/game/chars/9-face.png');
      this.load.image('bomberman_head_Raviel', 'images/game/chars/10-face.png');
      this.load.image('bomberman_head_Valpo', 'images/game/chars/11-face.png');
      this.load.spritesheet('bomberman_Theodora', 'images/game/chars/1-preview.png', 32, 32);
      this.load.spritesheet('bomberman_Ringo', 'images/game/chars/2-preview.png', 32, 32);
      this.load.spritesheet('bomberman_Jeniffer', 'images/game/chars/3-preview.png', 32, 32);
      this.load.spritesheet('bomberman_Godard', 'images/game/chars/4-preview.png', 32, 32);
      this.load.spritesheet('bomberman_Biarid', 'images/game/chars/5-preview.png', 32, 32);
      this.load.spritesheet('bomberman_Solia', 'images/game/chars/6-preview.png', 32, 32);
      this.load.spritesheet('bomberman_Kedan', 'images/game/chars/7-preview.png', 32, 32);
      this.load.spritesheet('bomberman_Nigob', 'images/game/chars/8-preview.png', 32, 32);
      this.load.spritesheet('bomberman_Baradir', 'images/game/chars/9-preview.png', 32, 32);
      this.load.spritesheet('bomberman_Raviel', 'images/game/chars/10-preview.png', 32, 32);
      this.load.spritesheet('bomberman_Valpo', 'images/game/chars/11-preview.png', 32, 32);
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
      this.slotsWithGame = null;
      clientSocket.on('display pending games', this.displayPendingGames.bind(this));
    }
  }, {
    key: "create",
    value: function create() {
      var background = this.add.image(this.game.world.centerX, this.game.world.centerY, 'main_menu');
      background.anchor.setTo(0.5);
      new _elements.Text({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY - 215,
        text: 'Main Menu',
        style: {
          font: '35px Areal',
          fill: '#9ec0ba',
          stroke: '#7f9995',
          strokeThickness: 3
        }
      });
      new _elements.TextButton({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY + 195,
        asset: 'buttons',
        callback: this.hostGameAction,
        callbackContext: this,
        overFrame: 1,
        outFrame: 0,
        downFrame: 2,
        upFrame: 0,
        label: 'New Game',
        style: {
          font: '20px Areal',
          fill: '#000000'
        }
      });
      clientSocket.emit('enter lobby', this.displayPendingGames.bind(this));
    }
  }, {
    key: "displayPendingGames",
    value: function displayPendingGames(availableGames) {
      // NOTE: That is not optimal way to preview slots,
      //       we should implement AddSlotToGroup, RemoveSlotFromGroup
      // I triying to care about readability, not about performance.
      if (this.slotsWithGame) {
        this.slotsWithGame.destroy();
      }

      this.slotsWithGame = new _elements.GameSlots({
        game: this.game,
        availableGames: availableGames,
        callback: this.joinGameAction,
        callbackContext: this,
        x: this.game.world.centerX - 220,
        y: 160,
        style: {
          font: '35px Areal',
          fill: '#efefef',
          stroke: '#ae743a',
          strokeThickness: 3
        }
      });
    }
  }, {
    key: "joinGameAction",
    value: function joinGameAction(game_id) {
      clientSocket.emit('leave lobby');
      this.state.start('PendingGame', true, false, game_id);
    }
  }, {
    key: "hostGameAction",
    value: function hostGameAction() {
      clientSocket.emit('leave lobby');
      this.state.start('SelectMap');
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
      var background = this.add.image(this.game.world.centerX, this.game.world.centerY, 'main_menu');
      background.anchor.setTo(0.5);
      new _elements.Text({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY - 215,
        text: 'Select Map',
        style: {
          font: '35px Areal',
          fill: '#9ec0ba',
          stroke: '#6f7975',
          strokeThickness: 3
        }
      }); // WARN: https://github.com/netgfx/PhaseSlider/issues/1

      var hotMapImage = new Phaser.Image(this.game, 0, 0, 'hot_map_preview');
      var coldMapImage = new Phaser.Image(this.game, 0, 0, 'cold_map_preview');
      this.slider.createSlider({
        x: this.game.world.centerX - hotMapImage.width / 2,
        y: this.game.world.centerY - coldMapImage.height / 2,
        width: hotMapImage.width,
        height: hotMapImage.height,
        customHandlePrev: 'prev',
        customHandleNext: 'next',
        objects: [hotMapImage, coldMapImage]
      });
      new _elements.Button({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY + 195,
        asset: 'check_icon',
        callback: this.confirmStageSelection,
        callbackContext: this,
        overFrame: 1,
        outFrame: 0,
        downFrame: 2,
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
      this.game_id = game_id;
      this.slotsWithPlayer = null;
      clientSocket.on('update game', this.displayGameInfo.bind(this));
      clientSocket.on('launch game', this.launchGame.bind(this));
      clientSocket.emit('enter pending game', {
        game_id: this.game_id
      });
    }
  }, {
    key: "create",
    value: function create() {
      var background = this.add.image(this.game.world.centerX, this.game.world.centerY, 'main_menu');
      background.anchor.setTo(0.5);
      this.gameTitle = new _elements.Text({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY - 215,
        text: '',
        style: {
          font: '35px Areal',
          fill: '#9ec0ba',
          stroke: '#6f7975',
          strokeThickness: 3
        }
      });
      this.startGameButton = new _elements.TextButton({
        game: this.game,
        x: this.game.world.centerX + 105,
        y: this.game.world.centerY + 195,
        asset: 'buttons',
        callback: this.startGameAction,
        callbackContext: this,
        overFrame: 1,
        outFrame: 0,
        downFrame: 2,
        upFrame: 0,
        label: 'Start Game',
        style: {
          font: '20px Areal',
          fill: '#000000'
        }
      });
      this.startGameButton.disable();
      new _elements.TextButton({
        game: this.game,
        x: this.game.world.centerX - 105,
        y: this.game.world.centerY + 195,
        asset: 'buttons',
        callback: this.leaveGameAction,
        callbackContext: this,
        overFrame: 1,
        outFrame: 0,
        downFrame: 2,
        upFrame: 0,
        label: 'Leave Game',
        style: {
          font: '20px Areal',
          fill: '#000000'
        }
      });
    }
  }, {
    key: "displayGameInfo",
    value: function displayGameInfo(_ref2) {
      var current_game = _ref2.current_game;
      var players = Object.values(current_game.players);
      this.gameTitle.text = current_game.name;

      if (this.slotsWithPlayer) {
        this.slotsWithPlayer.destroy();
      }

      this.slotsWithPlayer = new _elements.PlayerSlots({
        game: this.game,
        max_players: current_game.max_players,
        players: players,
        x: this.game.world.centerX - 245,
        y: this.game.world.centerY - 80,
        asset_empty: 'bomberman_head_blank',
        asset_player: 'bomberman_head_',
        style: {
          font: '20px Areal',
          fill: '#48291c'
        }
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
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      console.log(game);
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import FireBlast from '../entities/fire_blast';
// import Bone from '../entities/bone';
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
      this.game.physics.arcade.overlap(this.player, this.spoils, this.onPlayerVsSpoil, null, this); // this.game.physics.arcade.overlap(this.player, this.blasts, this.onPlayerVsBlast, null, this);

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
        this.onPlayerWin();
      }
    }
  }, {
    key: "createMap",
    value: function createMap() {
      this.map = this.add.tilemap(this.currentGame.map_name);
      this.map.addTilesetImage(_constants.TILESET);
      this.blockLayer = this.map.createLayer(_constants.LAYER);
      this.blockLayer.resizeWorld();
      this.map.setCollision(this.blockLayer.layer.properties.collisionTiles);
      this.player = null; // this.bones   = this.game.add.group();

      this.bombs = this.game.add.group();
      this.spoils = this.game.add.group(); // this.blasts  = this.game.add.group();

      this.enemies = this.game.add.group(); // this.game.physics.arcade.enable(this.blockLayer);

      this.spoils.add(new _spoil.default(this.game, {
        id: 1,
        col: 10,
        row: 7,
        spoil_type: 0
      }));
      this.spoils.add(new _spoil.default(this.game, {
        id: 2,
        col: 7,
        row: 5,
        spoil_type: 2
      }));
      this.spoils.add(new _spoil.default(this.game, {
        id: 4,
        col: 9,
        row: 7,
        spoil_type: 1
      }));
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
          skin: player.skin,
          play: this
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
      clientSocket.on('move player', this.onMovePlayer.bind(this)); // clientSocket.on('player win', this.onPlayerWin.bind(this));
      // clientSocket.on('show bomb', this.onShowBomb.bind(this));
      // clientSocket.on('detonate bomb', this.onDetonateBomb.bind(this));
      // clientSocket.on('spoil was picked', this.onSpoilWasPicked.bind(this));
      // clientSocket.on('show bones', this.onShowBones.bind(this));
      // clientSocket.on('player disconnect', this.onPlayerDisconnect.bind(this));
    }
  }, {
    key: "onPlayerVsSpoil",
    value: function onPlayerVsSpoil(player, spoil) {
      this.player.pickSpoil(spoil.spoil_type);
      (0, _utils.findAndDestroyFrom)(spoil.id, this.spoils);
      spoil.kill();
    } // onPlayerVsBlast(player, blast) {
    //   if (player.alive) {
    //     clientSocket.emit('player died', { col: player.currentCol(), row: player.currentRow() });
    //     player.becomesDead()
    //   }
    // }

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
    } // onDetonateBomb({ bomb_id, blastedCells }) {
    //   // Remove Bomb:
    //   findAndDestroyFrom(bomb_id, this.bombs)
    //   // Render Blast:
    //   for (let cell of blastedCells) {
    //     this.blasts.add(new FireBlast(this.game, cell));
    //   };
    //   // Destroy Tiles:
    //   for (let cell of blastedCells) {
    //     if (!cell.destroyed) { continue }
    //     this.map.putTile(this.blockLayer.layer.properties.empty, cell.col, cell.row, this.blockLayer);
    //   };
    //   // Add Spoils:
    //   for (let cell of blastedCells) {
    //     if (!cell.destroyed) { continue }
    //     if (!cell.spoil) { continue }
    //     this.spoils.add(new Spoil(this.game, cell.spoil));
    //   };
    // }
    // onSpoilWasPicked({ player_id, spoil_id, spoil_type }){
    //   if (player_id === this.player.id){
    //     this.player.pickSpoil(spoil_type)
    //   }
    //   findAndDestroyFrom(spoil_id, this.spoils)
    // }
    // onShowBones({ player_id, col, row }) {
    //   this.bones.add(new Bone(this.game, col, row));
    //   findAndDestroyFrom(player_id, this.enemies)
    // }

  }, {
    key: "onPlayerWin",
    value: function onPlayerWin(winner_skin) {
      this.state.start('Win', true, false, winner_skin);
    } // onPlayerDisconnect({ player_id }) {
    //   findAndDestroyFrom(player_id, this.enemies);
    //   if (this.enemies.children.length >= 1) { return }
    //   this.onPlayerWin()
    // }

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

var _constants = __webpack_require__(1);

var _info = _interopRequireDefault(__webpack_require__(11));

var _elements = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player =
/*#__PURE__*/
function (_Phaser$Sprite) {
  _inherits(Player, _Phaser$Sprite);

  function Player(_ref) {
    var _this;

    var game = _ref.game,
        id = _ref.id,
        spawn = _ref.spawn,
        skin = _ref.skin,
        play = _ref.play;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, game, spawn.x, spawn.y, 'bomberman_' + skin));
    _this.play = play;
    _this.game = game;
    _this.id = id;
    _this.prevPosition = {
      x: spawn.x,
      y: spawn.y
    };
    _this.delay = _constants.INITIAL_DELAY;
    _this.power = _constants.INITIAL_POWER;
    _this.speed = _constants.INITIAL_SPEED;
    _this._lastBombTime = 0;

    _this.game.add.existing(_this);

    _this.game.physics.arcade.enable(_this);

    _this.body.setSize(20, 20, 6, 6);

    game.time.events.loop(_constants.PING, _this.positionUpdaterLoop.bind(_this));

    _this.animations.add('up', [9, 10, 11], 15, true);

    _this.animations.add('down', [0, 1, 2], 15, true);

    _this.animations.add('right', [6, 7, 8], 15, true);

    _this.animations.add('left', [3, 4, 5], 15, true);

    _this.info = new _info.default({
      game: _this.game,
      player: _this
    });

    _this.defineKeyboard();

    _this.defineSelf(skin);

    return _this;
  }

  _createClass(Player, [{
    key: "update",
    value: function update() {
      if (this.alive) {
        this.handleMoves();
        this.handleBombs();
      }

      this.game.debug.body(this);
      this.game.debug.spriteInfo(this, 32, 32);
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
          this.play.onShowBomb({
            bomb_id: 'xxx',
            col: this.currentCol(),
            row: this.currentRow()
          });
        }
      }
    }
  }, {
    key: "currentCol",
    value: function currentCol() {
      return Math.floor(this.body.position.x / _constants.TILE_SIZE);
    }
  }, {
    key: "currentRow",
    value: function currentRow() {
      return Math.floor(this.body.position.y / _constants.TILE_SIZE);
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
    } //   becomesDead() {
    //     this.info.showDeadInfo()
    //     this.kill();
    //   }

  }, {
    key: "pickSpoil",
    value: function pickSpoil(spoil_type) {
      if (spoil_type === _constants.SPEED) {
        this.increaseSpeed();
      }

      if (spoil_type === _constants.POWER) {
        this.increasePower();
      }

      if (spoil_type === _constants.DELAY) {
        this.increaseDelay();
      }
    }
  }, {
    key: "increaseSpeed",
    value: function increaseSpeed() {
      var asset = 'speed_up_no_bonus';

      if (this.speed < _constants.MAX_SPEED) {
        this.speed = this.speed + _constants.STEP_SPEED;
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

      if (this.delay > _constants.MIN_DELAY) {
        this.delay -= _constants.STEP_DELAY;
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
      this.power += _constants.STEP_POWER;
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
    value: function defineSelf(name) {
      var playerText = new _elements.Text({
        game: this.game,
        x: _constants.TILE_SIZE / 2,
        y: -10,
        text: "\u272E ".concat(name, " \u272E"),
        style: {
          font: '15px Areal',
          fill: '#FFFFFF',
          stroke: '#000000',
          strokeThickness: 3
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
      font: '14px Arial',
      fill: '#ffffff',
      align: 'left' // this.redStyle = { font: '30px Arial', fill: '#ff0044', align: 'center' };

    };
    var bootsIcon = new Phaser.Image(this.game, 5, 2, 'placeholder_speed');
    this.speedText = new Phaser.Text(this.game, 35, 7, this.speedLabel(), this.style);
    bootsIcon.addChild(this.speedText);
    this.game.add.existing(bootsIcon);
    var powerIcon = new Phaser.Image(this.game, 110, 2, 'placeholder_power');
    this.powerText = new Phaser.Text(this.game, 35, 7, this.powerLabel(), this.style);
    powerIcon.addChild(this.powerText);
    this.game.add.existing(powerIcon);
    var delayIcon = new Phaser.Image(this.game, 215, 2, 'placeholder_time');
    this.delayText = new Phaser.Text(this.game, 35, 7, this.delayLabel(), this.style);
    delayIcon.addChild(this.delayText);
    this.game.add.existing(delayIcon); // this.deadText = this.game.add.text(this.game.world.centerX, this.game.world.height - 30, 'You died :(', this.redStyle);
    // this.deadText.anchor.set(0.5);
    // this.deadText.visible = false
  }

  _createClass(Info, [{
    key: "refreshStatistic",
    value: function refreshStatistic() {
      this.speedText.text = this.speedLabel();
      this.powerText.text = this.powerLabel();
      this.delayText.text = this.delayLabel();
    } // showDeadInfo() {
    //   this.deadText.visible = true
    // }

  }, {
    key: "speedLabel",
    value: function speedLabel() {
      return this.player.speed;
    }
  }, {
    key: "powerLabel",
    value: function powerLabel() {
      return "x ".concat(this.player.power);
    }
  }, {
    key: "delayLabel",
    value: function delayLabel() {
      return "".concat(this.player.delay / 1000, " sec.");
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

var _constants = __webpack_require__(1);

var _elements = __webpack_require__(0);

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

  function EnemyPlayer(_ref) {
    var _this;

    var game = _ref.game,
        id = _ref.id,
        spawn = _ref.spawn,
        skin = _ref.skin;

    _classCallCheck(this, EnemyPlayer);

    _this = _possibleConstructorReturn(this, (EnemyPlayer.__proto__ || Object.getPrototypeOf(EnemyPlayer)).call(this, game, spawn.x, spawn.y, 'bomberman_' + skin));
    _this.game = game;
    _this.id = id;
    _this.currentPosition = spawn; // this.lastMoveAt = 0;

    _this.game.physics.arcade.enable(_this);

    _this.body.setSize(20, 20, 6, 6);

    _this.body.immovable = true;

    _this.animations.add('up', [9, 10, 11], 15, true);

    _this.animations.add('down', [0, 1, 2], 15, true);

    _this.animations.add('right', [6, 7, 8], 15, true);

    _this.animations.add('left', [3, 4, 5], 15, true);

    _this.defineSelf(skin);

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
      this.game.add.tween(this).to(newPosition, _constants.PING, Phaser.Easing.Linear.None, true);
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
  }, {
    key: "defineSelf",
    value: function defineSelf(name) {
      var playerText = new _elements.Text({
        game: this.game,
        x: _constants.TILE_SIZE / 2,
        y: -10,
        text: name,
        style: {
          font: '14px Areal',
          fill: '#FFFFFF',
          stroke: '#000000',
          strokeThickness: 3
        }
      });
      this.addChild(playerText);
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

var _constants = __webpack_require__(1);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bomb =
/*#__PURE__*/
function (_Phaser$Sprite) {
  _inherits(Bomb, _Phaser$Sprite);

  function Bomb(game, id, col, row) {
    var _this;

    _classCallCheck(this, Bomb);

    var centerCol = col * _constants.TILE_SIZE + _constants.TILE_SIZE / 2;
    var centerRow = row * _constants.TILE_SIZE + _constants.TILE_SIZE / 2;
    _this = _possibleConstructorReturn(this, (Bomb.__proto__ || Object.getPrototypeOf(Bomb)).call(this, game, centerCol, centerRow, 'bomb_tileset'));

    _this.scale.setTo(0.7);

    _this.anchor.setTo(0.5);

    _this.game = game;
    _this.id = id;

    _this.game.physics.arcade.enable(_this);

    _this.game.add.tween(_this.scale).to({
      x: 1.2,
      y: 1.2
    }, _constants.EXPLOSION_TIME, Phaser.Easing.Linear.None, true);

    _this.body.immovable = true; // TODO: https://phaser.io/docs/2.4.4/Phaser.AnimationManager.html#add

    _this.animations.add('bomb', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 6, true);

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

var _constants = __webpack_require__(1);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spoil =
/*#__PURE__*/
function (_Phaser$Sprite) {
  _inherits(Spoil, _Phaser$Sprite);

  function Spoil(game, spoil) {
    var _this;

    _classCallCheck(this, Spoil);

    var spoil_type;

    if (spoil.spoil_type === _constants.DELAY) {
      spoil_type = 0;
    }

    if (spoil.spoil_type === _constants.POWER) {
      spoil_type = 1;
    }

    if (spoil.spoil_type === _constants.SPEED) {
      spoil_type = 2;
    }

    _this = _possibleConstructorReturn(this, (Spoil.__proto__ || Object.getPrototypeOf(Spoil)).call(this, game, spoil.col * _constants.TILE_SIZE, spoil.row * _constants.TILE_SIZE, 'spoil_tileset', spoil_type));
    _this.id = spoil.id;
    _this.spoil_type = spoil.spoil_type;

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
    value: function init(winner_skin) {
      this.skin = winner_skin;
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
      if (this.skin) {
        return "Player: \"".concat(this.skin, "\" won! Press Enter to return to main menu.");
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