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
exports.TextButton = exports.Text = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var TextButton =
/*#__PURE__*/
function (_Phaser$Button) {
  _inherits(TextButton, _Phaser$Button);

  function TextButton(_ref2) {
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
        upFrame = _ref2.upFrame,
        label = _ref2.label,
        style = _ref2.style;

    _classCallCheck(this, TextButton);

    _this2 = _possibleConstructorReturn(this, (TextButton.__proto__ || Object.getPrototypeOf(TextButton)).call(this, game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame));

    _this2.anchor.setTo(0.5);

    _this2.text = new Phaser.Text(_this2.game, 0, 0, label, style);

    _this2.text.anchor.setTo(0.5);

    _this2.addChild(_this2.text);

    _this2.game.add.existing(_this2);

    return _this2;
  }

  return TextButton;
}(Phaser.Button);

exports.TextButton = TextButton;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _boot = _interopRequireDefault(__webpack_require__(2));

var _preload = _interopRequireDefault(__webpack_require__(3));

var _menu = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import SelectMap from './states/select_map';
// import PendingGame from './states/pending_game';
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
      debugger; // Menu:

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
    } // hostGameAction() {
    //   this.state.start('SelectMap');
    // }

  }]);

  return Menu;
}(Phaser.State);

var _default = Menu;
exports.default = _default;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map