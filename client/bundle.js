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
exports.PlayerSlots = exports.TextButton = exports.Button = exports.Text = void 0;

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _boot = _interopRequireDefault(__webpack_require__(2));

var _preload = _interopRequireDefault(__webpack_require__(3));

var _menu = _interopRequireDefault(__webpack_require__(4));

var _select_map = _interopRequireDefault(__webpack_require__(5));

var _pending_game = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Play from './states/play';
// import Win from './states/win';
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

    _this.state.add('PendingGame', _pending_game.default); // this.state.add('Play',         Play);
    // this.state.add('Win',          Win);


    _this.state.start('Boot');

    return _this;
  }

  return Game;
}(Phaser.Game);

new Game();

/***/ }),
/* 2 */
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
/* 4 */
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
    }
  }, {
    key: "hostGameAction",
    value: function hostGameAction() {
      this.state.start('SelectMap');
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

var _constants = __webpack_require__(6);

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
      var map_name = _constants.AVAILABLE_MAPS[this.slider.getCurrentIndex()]; // https://phaser.io/docs/2.6.2/Phaser.StateManager.html#start


      this.state.start('PendingGame', true, false, map_name);
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
      this.slotsWithPlayer = null;
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
        text: 'NONAME GAME',
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
      var dummy_game = {
        name: 'Sun Game',
        max_players: 3,
        players: {
          uuid_1: {
            skin: 'Theodora'
          },
          uuid_2: {
            skin: 'Biarid'
          }
        }
      };
      this.displayGameInfo({
        current_game: dummy_game
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
      this.state.start('Menu');
    }
  }, {
    key: "startGameAction",
    value: function startGameAction() {// Start Game Action...
    }
  }]);

  return PendingGame;
}(Phaser.State);

var _default = PendingGame;
exports.default = _default;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map