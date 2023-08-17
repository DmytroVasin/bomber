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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/js/app.js":
/*!**************************!*\
  !*** ./client/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _boot = _interopRequireDefault(__webpack_require__(/*! ./states/boot.js */ "./client/js/states/boot.js"));
var _preload = _interopRequireDefault(__webpack_require__(/*! ./states/preload.js */ "./client/js/states/preload.js"));
var _menu = _interopRequireDefault(__webpack_require__(/*! ./states/menu.js */ "./client/js/states/menu.js"));
var _select_map = _interopRequireDefault(__webpack_require__(/*! ./states/select_map.js */ "./client/js/states/select_map.js"));
var _pending_game = _interopRequireDefault(__webpack_require__(/*! ./states/pending_game.js */ "./client/js/states/pending_game.js"));
var _play = _interopRequireDefault(__webpack_require__(/*! ./states/play.js */ "./client/js/states/play.js"));
var _win = _interopRequireDefault(__webpack_require__(/*! ./states/win.js */ "./client/js/states/win.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
//rexUI: RexUIPlugin;  // Declare scene property 'rexUI' as RexUIPlugin type
var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 980,
  height: 630,
  pixelArt: false,
  audio: {
    noAudio: false
  },
  scale: {
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [_boot["default"], _preload["default"], _menu["default"], _select_map["default"], _pending_game["default"], _play["default"], _win["default"]],
  physics: {
    "default": "arcade",
    arcade: {
      gravity: {
        y: 0
      }
    }
  } /*,
    plugins: {
     scene: [{
         key: 'rexUI',
         plugin: RexUIPlugin,
         mapping: 'rexUI'
       }
       // ...
     ]
    }*/
};

var game = new Phaser.Game(config);

/***/ }),

/***/ "./client/js/entities/bomb.js":
/*!************************************!*\
  !*** ./client/js/entities/bomb.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constants = __webpack_require__(/*! ../utils/constants.js */ "./client/js/utils/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Bomb = /*#__PURE__*/function (_Phaser$GameObjects$S) {
  _inherits(Bomb, _Phaser$GameObjects$S);
  var _super = _createSuper(Bomb);
  function Bomb(game, id, col, row) {
    var _this;
    _classCallCheck(this, Bomb);
    _this = _super.call(this, game, col * _constants.TILE_SIZE + _constants.TILE_SIZE / 2, row * _constants.TILE_SIZE + _constants.TILE_SIZE / 2, 'bomb_tileset');
    _this.game = game;
    _this.id = id;
    _this.game.add.existing(_assertThisInitialized(_this));
    _this.game.physics.add.existing(_assertThisInitialized(_this));
    _this.body.pushable = false;
    _this.tween = _this.game.tweens.add({
      targets: _assertThisInitialized(_this),
      scale: {
        to: {
          x: 1.2,
          y: 1.2
        }
      },
      alpha: {
        value: 0,
        duration: 5000,
        ease: 'Power1',
        delay: 600
      },
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1,
      repeatDelay: 1000,
      hold: 1000,
      duraton: _constants.EXPLOSION_TIME
    });
    var anims = game.anims;
    anims.create({
      key: 'bomb',
      frames: anims.generateFrameNumbers('bomb_tileset', {
        start: 0,
        end: 13
      }),
      frameRate: 6,
      repeat: -1
    });
    _this.anims.play('bomb');
    _this.tween.play();
    return _this;
  }
  _createClass(Bomb, [{
    key: "update",
    value: function update() {}
  }]);
  return Bomb;
}(Phaser.GameObjects.Sprite);
exports["default"] = Bomb;

/***/ }),

/***/ "./client/js/entities/bone.js":
/*!************************************!*\
  !*** ./client/js/entities/bone.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constants = __webpack_require__(/*! ../utils/constants.js */ "./client/js/utils/constants.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Bone = /*#__PURE__*/function (_Phaser$GameObjects$S) {
  _inherits(Bone, _Phaser$GameObjects$S);
  var _super = _createSuper(Bone);
  function Bone(game, col, row) {
    var _this;
    _classCallCheck(this, Bone);
    _this = _super.call(this, game, col * _constants.TILE_SIZE + _constants.TILE_SIZE / 2, row * _constants.TILE_SIZE + _constants.TILE_SIZE / 2, 'bone_tileset');
    _this.game = game;
    _this.game.add.existing(_assertThisInitialized(_this));
    return _this;
  }
  return _createClass(Bone);
}(Phaser.GameObjects.Sprite);
exports["default"] = Bone;

/***/ }),

/***/ "./client/js/entities/enemy_player.js":
/*!********************************************!*\
  !*** ./client/js/entities/enemy_player.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constants = __webpack_require__(/*! ../utils/constants.js */ "./client/js/utils/constants.js");
var _elements = __webpack_require__(/*! ../helpers/elements.js */ "./client/js/helpers/elements.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var EnemyPlayer = /*#__PURE__*/function (_Phaser$GameObjects$S) {
  _inherits(EnemyPlayer, _Phaser$GameObjects$S);
  var _super = _createSuper(EnemyPlayer);
  function EnemyPlayer(_ref) {
    var _this;
    var game = _ref.game,
      id = _ref.id,
      spawn = _ref.spawn,
      skin = _ref.skin;
    _classCallCheck(this, EnemyPlayer);
    _this = _super.call(this, game, spawn.x + _constants.TILE_SIZE / 2, spawn.y + _constants.TILE_SIZE / 2, 'bomberman_' + skin);
    _this.game = game;
    _this.id = id;
    _this.skin = skin;
    _this.currentPosition = spawn;
    _this.lastMoveAt = 0;
    _this.game.add.existing(_assertThisInitialized(_this));
    _this.game.physics.add.existing(_assertThisInitialized(_this));
    _this.body.pushable = false;
    _this.setSize(20, 20);

    //const anims=game.anims;
    _this.anims.create({
      key: 'up',
      frames: _this.anims.generateFrameNumbers('bomberman_' + skin, {
        start: 9,
        end: 11
      }),
      frameRate: 15,
      repeat: -1
    });
    _this.anims.create({
      key: 'down',
      frames: _this.anims.generateFrameNumbers('bomberman_' + skin, {
        start: 0,
        end: 2
      }),
      frameRate: 15,
      repeat: -1
    });
    _this.anims.create({
      key: 'right',
      frames: _this.anims.generateFrameNumbers('bomberman_' + skin, {
        start: 6,
        end: 8
      }),
      frameRate: 15,
      repeat: -1
    });
    _this.anims.create({
      key: 'left',
      frames: _this.anims.generateFrameNumbers('bomberman_' + skin, {
        start: 3,
        end: 5
      }),
      frameRate: 15,
      repeat: -1
    });
    //this.anims=anims;

    _this.defineSelf(skin);
    return _this;
  }
  _createClass(EnemyPlayer, [{
    key: "update",
    value: function update() {}
  }, {
    key: "goTo",
    value: function goTo(newPosition) {
      this.lastMoveAt = this.game.time.now;
      this.animateFace(newPosition);
      this.tween = this.game.tweens.add({
        targets: this,
        x: newPosition.x,
        y: newPosition.y,
        duration: _constants.PING
      });
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
      this.anims.play(face);
      this.currentPosition = newPosition;
      this.playerText.setPosition(this.body.x + _constants.TILE_SIZE / 2, this.body.y - 10);
    }
  }, {
    key: "defineSelf",
    value: function defineSelf(name) {
      this.playerText = new _elements.Text({
        game: this.game,
        x: this.body.x + _constants.TILE_SIZE / 2,
        y: this.body.y - 10,
        text: name,
        style: {
          font: '14px Areal',
          fill: '#FFFFFF',
          stroke: '#000000',
          strokeThickness: 3
        }
      });
      this.game.add.existing(this.playerText);
    }
  }]);
  return EnemyPlayer;
}(Phaser.GameObjects.Sprite);
exports["default"] = EnemyPlayer;

/***/ }),

/***/ "./client/js/entities/fire_blast.js":
/*!******************************************!*\
  !*** ./client/js/entities/fire_blast.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constants = __webpack_require__(/*! ../utils/constants.js */ "./client/js/utils/constants.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var FireBlast = /*#__PURE__*/function (_Phaser$GameObjects$S) {
  _inherits(FireBlast, _Phaser$GameObjects$S);
  var _super = _createSuper(FireBlast);
  function FireBlast(game, cell) {
    var _this;
    _classCallCheck(this, FireBlast);
    _this = _super.call(this, game, cell.col * _constants.TILE_SIZE + _constants.TILE_SIZE / 2, cell.row * _constants.TILE_SIZE + _constants.TILE_SIZE / 2, cell.type, 0);
    _this.game = game;
    var anims = game.anims;
    anims.create({
      key: 'blast',
      frames: anims.generateFrameNumbers(cell.type, {
        start: 0,
        end: 4
      }),
      frameRate: 15,
      repeat: -1,
      hideOnComplete: false
    });
    _this.anims.play('blast');

    //this.game.physics.arcade.enable(this);
    _this.game.add.existing(_assertThisInitialized(_this));
    _this.game.physics.add.existing(_assertThisInitialized(_this));
    _this.game.time.addEvent({
      delay: 100,
      // ms
      callback: _this.destroy.bind(_assertThisInitialized(_this)),
      callbackScope: _assertThisInitialized(_this),
      loop: false
    });
    return _this;
  }
  return _createClass(FireBlast);
}(Phaser.GameObjects.Sprite);
exports["default"] = FireBlast;

/***/ }),

/***/ "./client/js/entities/info.js":
/*!************************************!*\
  !*** ./client/js/entities/info.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constants = __webpack_require__(/*! ../utils/constants.js */ "./client/js/utils/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Info = /*#__PURE__*/function () {
  function Info(_ref) {
    var game = _ref.game,
      player = _ref.player;
    _classCallCheck(this, Info);
    this.game = game;
    this.player = player;
    this.style = {
      font: '14px Arial',
      fill: '#ffffff',
      align: 'left'
    };
    this.redStyle = {
      font: '30px Arial',
      fill: '#ff0044',
      align: 'center'
    };
    var bootsIcon = this.game.add.image(_constants.TILE_SIZE * 2, _constants.TILE_SIZE / 2, 'placeholder_speed');
    this.speedText = this.game.add.text(_constants.TILE_SIZE * 2, _constants.TILE_SIZE / 4, this.speedLabel(), this.style);
    this.game.add.existing(bootsIcon);
    this.game.add.existing(this.speedText);
    var powerIcon = this.game.add.image(_constants.TILE_SIZE * 5, _constants.TILE_SIZE / 2, 'placeholder_power');
    this.powerText = this.game.add.text(_constants.TILE_SIZE * 5, _constants.TILE_SIZE / 4, this.powerLabel(), this.style);
    this.game.add.existing(powerIcon);
    this.game.add.existing(this.powerText);
    var delayIcon = this.game.add.image(_constants.TILE_SIZE * 8, _constants.TILE_SIZE / 2, 'placeholder_time');
    this.delayText = this.game.add.text(_constants.TILE_SIZE * 8, _constants.TILE_SIZE / 4, this.delayLabel(), this.style);
    this.game.add.existing(delayIcon);
    this.game.add.existing(this.delayText);
    this.deadText = this.game.add.text(this.game.sys.canvas.clientWidth / 2, this.game.sys.canvas.clientWidth / 2 - 30, 'You died :(', this.redStyle);
    this.deadText.setOrigin(0.5, 0.5);
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
exports["default"] = Info;

/***/ }),

/***/ "./client/js/entities/player.js":
/*!**************************************!*\
  !*** ./client/js/entities/player.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constants = __webpack_require__(/*! ../utils/constants.js */ "./client/js/utils/constants.js");
var _info = _interopRequireDefault(__webpack_require__(/*! ./info.js */ "./client/js/entities/info.js"));
var _elements = __webpack_require__(/*! ../helpers/elements.js */ "./client/js/helpers/elements.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Player = /*#__PURE__*/function (_Phaser$GameObjects$S) {
  _inherits(Player, _Phaser$GameObjects$S);
  var _super = _createSuper(Player);
  function Player(_ref) {
    var _this;
    var game = _ref.game,
      id = _ref.id,
      spawn = _ref.spawn,
      skin = _ref.skin;
    _classCallCheck(this, Player);
    _this = _super.call(this, game, spawn.x + _constants.TILE_SIZE / 2, spawn.y + _constants.TILE_SIZE / 2, 'bomberman_' + skin);
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
    _this.game.add.existing(_assertThisInitialized(_this));
    _this.game.physics.add.existing(_assertThisInitialized(_this));
    _this.body.pushable = false;
    _this.setSize(20, 20);
    _this.game.time.addEvent({
      delay: _constants.PING,
      // ms
      callback: _this.positionUpdaterLoop.bind(_assertThisInitialized(_this)),
      callbackScope: _assertThisInitialized(_this),
      loop: true
    });

    //const anims=game.anims;
    console.log("Creating player " + skin + " ...");
    _this.anims.create({
      key: 'up',
      frames: _this.anims.generateFrameNumbers('bomberman_' + skin, {
        start: 9,
        end: 11
      }),
      frameRate: 15,
      repeat: -1
    });
    _this.anims.create({
      key: 'down',
      frames: _this.anims.generateFrameNumbers('bomberman_' + skin, {
        start: 0,
        end: 2
      }),
      frameRate: 15,
      repeat: -1
    });
    _this.anims.create({
      key: 'right',
      frames: _this.anims.generateFrameNumbers('bomberman_' + skin, {
        start: 6,
        end: 8
      }),
      frameRate: 15,
      repeat: -1
    });
    _this.anims.create({
      key: 'left',
      frames: _this.anims.generateFrameNumbers('bomberman_' + skin, {
        start: 3,
        end: 5
      }),
      frameRate: 15,
      repeat: -1
    });
    //this.anims=anims;

    _this.info = new _info["default"]({
      game: _this.game,
      player: _assertThisInitialized(_this)
    });
    _this.defineKeyboard();
    _this.defineJoyStick();
    _this.defineSelf(skin);
    _this.socket = _this.game.registry.get('socketIO');
    _this.alive = true;
    return _this;
  }
  _createClass(Player, [{
    key: "update",
    value: function update() {
      if (this.alive) {
        this.handleMoves();
        this.handleBombs();
      }
    }
  }, {
    key: "defineKeyboard",
    value: function defineKeyboard() {
      this.cursorKeys = this.game.input.keyboard.createCursorKeys();
    }
  }, {
    key: "defineJoyStick",
    value: function defineJoyStick() {
      this.joystickKey = this.game.joystickKey;
    }
  }, {
    key: "handleMoves",
    value: function handleMoves() {
      this.body.velocity.set(0);
      var animationsArray = [];
      if (this.cursorKeys.left.isDown || this.game.joystickKey.includes('left')) {
        this.body.velocity.x = -this.speed;
        animationsArray.push('left');
      } else if (this.cursorKeys.right.isDown || this.game.joystickKey.includes('right')) {
        this.body.velocity.x = this.speed;
        animationsArray.push('right');
      }
      if (this.cursorKeys.up.isDown || this.game.joystickKey.includes('up')) {
        this.body.velocity.y = -this.speed;
        animationsArray.push('up');
      } else if (this.cursorKeys.down.isDown || this.game.joystickKey.includes('down')) {
        this.body.velocity.y = this.speed;
        animationsArray.push('down');
      }
      var currentAnimation = animationsArray[0];
      if (currentAnimation) {
        this.anims.play(currentAnimation);
        return;
      }
      this.anims.stop();
    }
  }, {
    key: "handleBombs",
    value: function handleBombs() {
      if (this.cursorKeys.space.isDown || this.game.joystickButton01Key.includes('down')) {
        var now = this.game.time.now;
        if (now > this._lastBombTime) {
          this._lastBombTime = now + this.delay;
          this.socket.emit('create bomb', {
            col: this.currentCol(),
            row: this.currentRow()
          });
          this.game.joystickButton01Key = '';
        }
      }
    }
  }, {
    key: "currentCol",
    value: function currentCol() {
      return Math.floor(this.body.x / _constants.TILE_SIZE);
    }
  }, {
    key: "currentRow",
    value: function currentRow() {
      return Math.floor(this.body.y / _constants.TILE_SIZE);
    }
  }, {
    key: "positionUpdaterLoop",
    value: function positionUpdaterLoop() {
      var newPosition = {
        x: this.x,
        y: this.y
      };
      if (this.prevPosition.x !== newPosition.x || this.prevPosition.y !== newPosition.y) {
        this.socket.emit('update player position', newPosition);
        this.prevPosition = newPosition;
      }
    }
  }, {
    key: "becomesDead",
    value: function becomesDead() {
      this.alive = false;
      this.info.showDeadInfo();
      this.destroy();
    }
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
        x: this.x,
        y: this.y
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
        x: this.x,
        y: this.y
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
        x: this.x,
        y: this.y
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
      this.game.add.existing(playerText);
    }
  }]);
  return Player;
}(Phaser.GameObjects.Sprite);
exports["default"] = Player;

/***/ }),

/***/ "./client/js/entities/spoil.js":
/*!*************************************!*\
  !*** ./client/js/entities/spoil.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constants = __webpack_require__(/*! ../utils/constants.js */ "./client/js/utils/constants.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Spoil = /*#__PURE__*/function (_Phaser$GameObjects$S) {
  _inherits(Spoil, _Phaser$GameObjects$S);
  var _super = _createSuper(Spoil);
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
    _this = _super.call(this, game, spoil.col * _constants.TILE_SIZE + _constants.TILE_SIZE / 2, spoil.row * _constants.TILE_SIZE + _constants.TILE_SIZE / 2, 'spoil_tileset', spoil_type);
    _this.id = spoil.id;
    game.add.existing(_assertThisInitialized(_this));
    game.physics.add.existing(_assertThisInitialized(_this));
    return _this;
  }
  return _createClass(Spoil);
}(Phaser.GameObjects.Sprite);
exports["default"] = Spoil;

/***/ }),

/***/ "./client/js/helpers/elements.js":
/*!***************************************!*\
  !*** ./client/js/helpers/elements.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Virtualjoystick = exports.TextButton = exports.Text = exports.SpoilNotification = exports.PlayerSlots = exports.MapSlider = exports.GameSlots = exports.Button = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Text = /*#__PURE__*/function (_Phaser$GameObjects$T) {
  _inherits(Text, _Phaser$GameObjects$T);
  var _super = _createSuper(Text);
  function Text(_ref) {
    var _this;
    var scene = _ref.game,
      x = _ref.x,
      y = _ref.y,
      text = _ref.text,
      style = _ref.style;
    _classCallCheck(this, Text);
    _this = _super.call(this, scene, x, y, text, style);
    _this.setOrigin(0.5, 0.5);
    scene.add.existing(_assertThisInitialized(_this));
    return _this;
  }
  return _createClass(Text);
}(Phaser.GameObjects.Text);
exports.Text = Text;
var Button = /*#__PURE__*/function (_Phaser$Input$Gamepad) {
  _inherits(Button, _Phaser$Input$Gamepad);
  var _super2 = _createSuper(Button);
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
    _this2 = _super2.call(this, game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
    _this2.setOrigin(0.5, 0.5);
    game.add.existing(_assertThisInitialized(_this2));
    return _this2;
  }
  return _createClass(Button);
}(Phaser.Input.Gamepad.Button);
exports.Button = Button;
var TextButton = /*#__PURE__*/function (_Phaser$GameObjects$S) {
  _inherits(TextButton, _Phaser$GameObjects$S);
  var _super3 = _createSuper(TextButton);
  function TextButton(_ref3) {
    var _this3;
    var game = _ref3.game,
      x = _ref3.x,
      y = _ref3.y,
      asset = _ref3.asset,
      callback = _ref3.callback,
      callbackContext = _ref3.callbackContext,
      upFrame = _ref3.upFrame,
      outFrame = _ref3.outFrame,
      overFrame = _ref3.overFrame,
      downFrame = _ref3.downFrame,
      label = _ref3.label,
      style = _ref3.style;
    _classCallCheck(this, TextButton);
    //check if config contains a scene
    if (!game) {
      console.log('missing scene');
      return _possibleConstructorReturn(_this3);
    }
    //check if config contains a key
    if (!asset) {
      console.log("missing key!");
      return _possibleConstructorReturn(_this3);
    }
    //if there is no up property assume 0
    if (!upFrame) {
      upFrame = 0;
    }
    //if there is no down in config use up
    if (!downFrame) {
      downFrame = upFrame;
    }
    //if there is no over in config use up
    if (!overFrame) {
      overFrame = upFrame;
    }
    //call the constructor of the parent
    //set at 0,0 in case there is no x and y
    //in parameter
    _this3 = _super3.call(this, game, 0, 0, asset, upFrame);

    //make a class level reference to the config
    _this3.scene = game;
    _this3.asset = asset;
    _this3.callback = callback;
    _this3.callbackContext = callbackContext;
    _this3.upFrame = upFrame;
    _this3.outFrame = outFrame;
    _this3.overFrame = overFrame;
    _this3.downFrame = downFrame;
    _this3.enable = true;

    //if there is an x assign it
    if (x) {
      _this3.x = x;
    }
    //if there is an x assign it
    if (y) {
      _this3.y = y;
    }
    _this3.atext = new Phaser.GameObjects.Text(game, x, y, label, style);
    _this3.atext.setOrigin(0.5, 0.5);

    //add this to the scene
    game.add.existing(_assertThisInitialized(_this3));
    game.add.existing(_this3.atext);
    //
    //make interactive and set listeners
    _this3.setInteractive();
    _this3.on('pointerdown', _this3.onDown, _assertThisInitialized(_this3));
    _this3.on('pointerup', _this3.onUp, _assertThisInitialized(_this3));
    _this3.on('pointerover', _this3.onOver, _assertThisInitialized(_this3));
    _this3.on('pointerout', _this3.onUp, _assertThisInitialized(_this3));
    return _this3;
  }
  _createClass(TextButton, [{
    key: "activate",
    value: function activate() {
      this.setFrame(this.downFrame);
      this.enable = true;
      this.visible = true;
      this.atext.visible = true;
    }
  }, {
    key: "disactivate",
    value: function disactivate() {
      this.setFrame(this.outFrame);
      this.enable = false;
      this.visible = false;
      this.atext.visible = false;
    }
  }, {
    key: "onDown",
    value: function onDown() {
      if (this.enable == false) return;
      this.scene.registry.get('Sound').playSound(this.scene, 'FxClick01');
      this.setFrame(this.downFrame);
      var mycallbackFunction = this.callback.bind(this.callbackContext);
      mycallbackFunction();
    }
  }, {
    key: "onOver",
    value: function onOver() {
      if (this.enable == false) return;
      this.setFrame(this.overFrame);
    }
  }, {
    key: "onUp",
    value: function onUp() {
      if (this.enable == false) return;
      this.setFrame(this.upFrame);
    }
  }, {
    key: "onOut",
    value: function onOut() {
      if (this.enable == false) return;
      this.setFrame(this.outFrame);
    }
  }]);
  return TextButton;
}(Phaser.GameObjects.Sprite);
exports.TextButton = TextButton;
var GameSlots = /*#__PURE__*/function (_Phaser$GameObjects$C) {
  _inherits(GameSlots, _Phaser$GameObjects$C);
  var _super4 = _createSuper(GameSlots);
  function GameSlots(_ref4) {
    var _this4;
    var game = _ref4.game,
      availableGames = _ref4.availableGames,
      callback = _ref4.callback,
      callbackContext = _ref4.callbackContext,
      x = _ref4.x,
      y = _ref4.y,
      style = _ref4.style;
    _classCallCheck(this, GameSlots);
    _this4 = _super4.call(this, game);
    var game_slot_asset = 'slot_backdrop';
    var game_enter_asset = 'list_icon';
    var yOffset = y;
    var nbGame = 0;
    var _iterator = _createForOfIteratorHelper(availableGames),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var availableGame = _step.value;
        var gameBox = new Phaser.GameObjects.Image(game, x + 220, yOffset - 5, game_slot_asset);
        var button = new TextButton({
          game: game,
          x: x + 377,
          y: yOffset - 6,
          asset: game_enter_asset,
          callback: callback.bind(callbackContext, {
            game_id: availableGame.id
          }),
          callbackContext: null,
          upFrame: 0,
          overFrame: 1,
          downFrame: 2,
          outFrame: 3,
          label: ''
        });
        var text = new Phaser.GameObjects.Text(game, x + 30, yOffset - 28, "Join Game: ".concat(availableGame.name), style);
        _this4.add(gameBox);
        _this4.add(button);
        _this4.add(text);
        game.add.existing(gameBox);
        game.add.existing(button);
        game.add.existing(text);
        yOffset += 105;
        nbGame++;
        if (nbGame >= 3) break;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return _this4;
  }
  _createClass(GameSlots, [{
    key: "destroy",
    value: function destroy() {}
  }]);
  return GameSlots;
}(Phaser.GameObjects.Container);
exports.GameSlots = GameSlots;
var PlayerSlots = /*#__PURE__*/function (_Phaser$GameObjects$C2) {
  _inherits(PlayerSlots, _Phaser$GameObjects$C2);
  var _super5 = _createSuper(PlayerSlots);
  function PlayerSlots(_ref5) {
    var _this5;
    var game = _ref5.game,
      max_players = _ref5.max_players,
      players = _ref5.players,
      x = _ref5.x,
      y = _ref5.y,
      asset_empty = _ref5.asset_empty,
      asset_player = _ref5.asset_player,
      style = _ref5.style;
    _classCallCheck(this, PlayerSlots);
    _this5 = _super5.call(this, game);
    var xOffset = x;
    var YOffset = y;
    for (var i = 0; i < max_players; i++) {
      var slotBox = void 0;
      var slotName = void 0;
      var _player = players[i];
      if (_player) {
        slotBox = new Phaser.GameObjects.Image(game, xOffset, YOffset, asset_player + _player.skin);
        slotName = new Phaser.GameObjects.Text(game, xOffset, YOffset - 90, _player.skin, style);
        slotName.setOrigin(0.5, 0);
        _this5.add(slotBox);
        _this5.add(slotName);
      } else {
        slotBox = new Phaser.GameObjects.Image(game, xOffset, YOffset, asset_empty);
        _this5.add(slotBox);
      }
      xOffset += 170;
      if (i == 2) {
        xOffset = x;
        YOffset = YOffset + slotBox.height + 10;
      }
    }
    game.add.existing(_assertThisInitialized(_this5));
    return _this5;
  }
  return _createClass(PlayerSlots);
}(Phaser.GameObjects.Container);
exports.PlayerSlots = PlayerSlots;
var SpoilNotification = /*#__PURE__*/function (_Phaser$GameObjects$G) {
  _inherits(SpoilNotification, _Phaser$GameObjects$G);
  var _super6 = _createSuper(SpoilNotification);
  function SpoilNotification(_ref6) {
    var _this6;
    var game = _ref6.game,
      asset = _ref6.asset,
      x = _ref6.x,
      y = _ref6.y;
    _classCallCheck(this, SpoilNotification);
    _this6 = _super6.call(this, game);
    _this6.picture = game.add.image(x, y - 20, asset).setAlpha(1);
    _this6.picture.setOrigin(0.5, 0.5);
    _this6.add(_this6.picture);
    _this6.tween = game.tweens.add({
      targets: _this6.picture,
      y: _this6.picture.y - 25,
      alpha: {
        value: 0,
        duration: 1000,
        ease: 'Power1',
        delay: 600
      },
      duration: 600
    });
    _this6.tween.on('complete', _this6.finish.bind(_assertThisInitialized(_this6)));
    return _this6;
  }
  _createClass(SpoilNotification, [{
    key: "finish",
    value: function finish() {
      console.log('SpoilNotification destroyed');
      this.picture.destroy();
      this.destroy();
    }
  }]);
  return SpoilNotification;
}(Phaser.GameObjects.Group);
exports.SpoilNotification = SpoilNotification;
var COLOR_PRIMARY = 0x4e342e;
var COLOR_LIGHT = 0x7b5e57;
var COLOR_DARK = 0x260e04;

/**
 * Create a Graphic Slider to select a map
 * @export
 * @class MapSlider
 * @extends Phaser.GameObjects.Group
 */
var MapSlider = /*#__PURE__*/function (_Phaser$GameObjects$G2) {
  _inherits(MapSlider, _Phaser$GameObjects$G2);
  var _super7 = _createSuper(MapSlider);
  /**
   * Creates an instance of MapSlider.
   * @param  {any} { scene, x, y } 
   * @memberof MapSlider
   */
  function MapSlider(_ref7) {
    var _this7;
    var scene = _ref7.scene,
      x = _ref7.x,
      y = _ref7.y;
    _classCallCheck(this, MapSlider);
    _this7 = _super7.call(this, scene);
    _this7.selected = null;
    _this7.config = {
      name: 'Options',
      maps: [{
        name: 'Hot',
        map: 'hot_map',
        component: 'hot_map_preview_mini'
      }, {
        name: 'Cold',
        map: 'cold_map',
        component: 'cold_map_preview_mini'
      }]
    };
    _this7.scrollablePanel = scene.rexUI.add.scrollablePanel({
      x: x,
      y: y,
      width: 500,
      height: 300,
      scrollMode: 1,
      background: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 10, COLOR_PRIMARY),
      panel: {
        child: _this7.createPanel(scene, _this7.config, _assertThisInitialized(_this7)),
        mask: {
          padding: 1
        }
      },
      slider: {
        track: scene.rexUI.add.roundRectangle(0, 0, 20, 10, 10, COLOR_DARK),
        thumb: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 13, COLOR_LIGHT)
      },
      space: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
        panel: 10
      }
    }).layout();
    //.layout().drawBounds(scene.add.graphics(), 0xff0000);

    var labels = [];
    scene.input.topOnly = false;
    labels.push.apply(labels, _toConsumableArray(_this7.scrollablePanel.getElement('#maps.items', true)));
    labels.forEach(function (label) {
      if (!label) {
        return;
      }
      var click = scene.rexUI.add.click(label, {}).on('click', function () {
        label.getElement('text').setColor('red');
        console.log("Map selected: " + label.getElement('icon').name);
        label.slider.selected = label.getElement('icon').name;
        label.slider.scene.registry.get('Sound').playSound(label.slider.scene, 'FxClick01');
      });
    });
    return _this7;
  }

  /**
   * Create 
   * @param  {any} scene 
   * @param  {any} data 
   * @return 
   * @memberof MapSlider
   */
  _createClass(MapSlider, [{
    key: "createPanel",
    value: function createPanel(scene, data, slider) {
      var sizer = scene.rexUI.add.sizer({
        orientation: 'x',
        space: {
          item: 10
        },
        name: 'maps'
      });
      //scene.rexUI.setChildrenInteractive(sizer);
      for (var i = 0; i < data['maps'].length; i++) {
        var map = scene.rexUI.add.circleMaskImage(0, 0, data['maps'][i].component, {
          maskType: 'roundRectangle',
          radius: 10
        });
        var _COLOR_LIGHT = 0x7b5e57;
        map.name = data['maps'][i].map;
        var label = scene.rexUI.add.label({
          orientation: 'y',
          icon: map,
          text: scene.add.text(0, 0, map.name),
          space: {
            icon: 3
          }
        });
        label.slider = slider;
        sizer.add(label, {
          key: map.name
        });
      }
      return sizer;
    }
  }, {
    key: "onDown",
    value: function onDown() {
      console.log("MapSlider: onDown");
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.scrollablePanel.destroy();
    }
  }]);
  return MapSlider;
}(Phaser.GameObjects.Group);
/**
 * Create a virtual Joystick
 * @export
 * @class MapSlider
 * @extends Phaser.GameObjects.Group
 */
exports.MapSlider = MapSlider;
var Virtualjoystick = /*#__PURE__*/function (_Phaser$GameObjects$G3) {
  _inherits(Virtualjoystick, _Phaser$GameObjects$G3);
  var _super8 = _createSuper(Virtualjoystick);
  /**
   * Creates an instance of MapSlider.
   * @param  {any} { scene, x, y } 
   * @memberof MapSlider
   */
  function Virtualjoystick(_ref8) {
    var _this8;
    var scene = _ref8.scene,
      x = _ref8.x,
      y = _ref8.y,
      xx = _ref8.xx,
      yy = _ref8.yy;
    _classCallCheck(this, Virtualjoystick);
    _this8 = _super8.call(this, scene);
    _this8.scene = scene;
    var graphic1 = _this8.scene.add.graphics({
      x: 0,
      y: 0,
      lineStyle: {
        width: 3,
        color: 0xffffff,
        alpha: 1
      },
      fillStyle: {
        color: 0x888888,
        alpha: 0.2
      },
      add: true
    });
    var graphic2 = _this8.scene.add.graphics({
      x: 0,
      y: 0,
      lineStyle: {
        width: 3,
        color: 0xffffff,
        alpha: 1
      },
      fillStyle: {
        color: 0xcccccc,
        alpha: 0.5
      },
      add: true
    });
    /*
    var graphic3 = this.scene.add.graphics({
      x: xx,
      y: yy,
         lineStyle: {
           width: 3,
           color: 0xffffff,
           alpha: 1
       },
       fillStyle: {
           color: 0xcccccc,
           alpha: 1
       },
         add: true
    });*/

    //Add Fire button
    var graphics = _this8.scene.add.graphics({
      fillStyle: {
        color: 0x888888,
        alpha: 0.2
      }
    });
    var circle = new Phaser.Geom.Circle(xx, yy, 100, 0x888888);
    _this8.button01 = graphics.fillCircleShape(circle);
    _this8.button01.setInteractive(new Phaser.Geom.Circle(xx,
    // center x
    yy,
    // center y
    100 // radius
    ), Phaser.Geom.Circle.Contains);
    _this8.button01.on('pointerdown', _this8.onButton01Pointerdown, _assertThisInitialized(_this8));
    _this8.scene.joystickButton01Key = '';
    _this8.scene.add.existing(_this8.button01);

    //Add JoyStick
    _this8.joyStick = _this8.scene.plugins.get('rexvirtualjoystickplugin').add(_this8.scene, {
      x: x,
      y: y,
      radius: 100,
      base: graphic1.fillCircleShape(_this8.scene.add.circle(0, 0, 100, 0x888888, 0)),
      thumb: graphic2.fillCircleShape(_this8.scene.add.circle(0, 0, 50, 0xcccccc, 0)),
      // dir: '8dir',   // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
      forceMin: 0
      // enable: true
    }).on('update', _this8.dumpJoyStickState, _assertThisInitialized(_this8));
    _this8.scene.joystickKey = '';
    _this8.scene.add.existing(_this8.joyStick);
    _this8.scene.text = _this8.scene.add.text(0, 0);
    _this8.dumpJoyStickState();
    return _this8;
  }
  _createClass(Virtualjoystick, [{
    key: "onButton01Pointerdown",
    value: function onButton01Pointerdown() {
      console.log("Button01 pressed");
      this.scene.joystickButton01Key = 'down';
    }

    //Display Joystick debug informations
  }, {
    key: "dumpJoyStickState",
    value: function dumpJoyStickState() {
      var joystickKeys = this.joyStick.createCursorKeys();
      var s = 'Key down: ';
      this.scene.joystickKey = '';
      for (var name in joystickKeys) {
        if (joystickKeys[name].isDown) {
          this.scene.joystickKey += name;
          s += name + ' ';
        }
      }
      //Display Joystick debug informations
      return;
      s += '\n';
      s += 'Force: ' + Math.floor(this.joyStick.force * 100) / 100 + '\n';
      s += 'Angle: ' + Math.floor(this.joyStick.angle * 100) / 100 + '\n';
      this.scene.text.setText(s);
    }
  }]);
  return Virtualjoystick;
}(Phaser.GameObjects.Group);
exports.Virtualjoystick = Virtualjoystick;

/***/ }),

/***/ "./client/js/helpers/sound.js":
/*!************************************!*\
  !*** ./client/js/helpers/sound.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sound = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Sound = /*#__PURE__*/function () {
  function Sound() {
    _classCallCheck(this, Sound);
    this._soundOn = true;
    this._musicOn = true;
    this._bgMusicPlaying = false;
    this._bgSoundPlaying = false;
    this._currentMusic = null;
    this._currentSound = null;
  }
  _createClass(Sound, [{
    key: "preload",
    value: function preload(scene) {
      scene.load.audio('bgMusic01', ['sound/Musics/TownTheme.mp3']);
      scene.load.audio('bgMusic02', ['sound/Musics/Techno-Randomness_Looping.mp3']); // https://soundimage.org/dance-techno/
      scene.load.audio('bgMusic03', ['sound/Musics/Happy-Trancin.mp3']); // https://soundimage.org/dance-techno/
      scene.load.audio('bgMusic04', ['sound/Musics/Electric-Rain_Looping.mp3']); // https://soundimage.org/dance-techno/

      scene.load.audio('FxExplosion01', ['sound/Effects/Explosion3.mp3']);
      scene.load.audio('FxPickItem01', ['sound/Effects/PowerUp18.mp3']);
      scene.load.audio('FxDeath01', ['sound/Effects/VOXEfrt_Cry of pain (ID 2361)_BSB.mp3']); // https://bigsoundbank.com/detail-2361-cry-of-pain.html
      scene.load.audio('FxClick01', ['sound/Effects/UI_Quirky21.mp3']);
      scene.load.audio('FxNewUser01', ['sound/Effects/PowerUp18.mp3']);
    }
  }, {
    key: "playMusic",
    value: function playMusic(scene, soundId) {
      if (this.bgMusicPlaying === true && !(this._currentMusic == soundId)) {
        scene.sound.stopByKey(this._currentMusic);
        //scene.sound.stopAll();
        this.bgMusicPlaying = false;
        scene.registry.set('Sound', this);
      }
      if (this.musicOn === true && this.bgMusicPlaying === false) {
        scene.sound.add(soundId, {
          volume: 0.5,
          loop: true
        }).play();
        this.bgMusicPlaying = true;
        this._currentMusic = soundId;
        scene.registry.set('Sound', this);
      }
    }
  }, {
    key: "playSound",
    value: function playSound(scene, soundId) {
      if (this.bgSoundPlaying === true && !(this._currentMusic == soundId)) {
        scene.sound.stopByKey(this._currentSound);
        this.bgSoundPlaying = false;
        scene.registry.set('Sound', this);
      }
      if (this.soundOn === true && this.bgSoundPlaying === false) {
        scene.sound.add(soundId, {
          volume: 0.8,
          loop: false
        }).play();
        this.bgSoundPlaying = true;
        this._currentSound = soundId;
        scene.registry.set('Sound', this);
      }
    }
  }, {
    key: "musicOn",
    get: function get() {
      return this._musicOn;
    },
    set: function set(value) {
      this._musicOn = value;
    }
  }, {
    key: "soundOn",
    get: function get() {
      return this._soundOn;
    },
    set: function set(value) {
      this._soundOn = value;
    }
  }, {
    key: "bgMusicPlaying",
    get: function get() {
      return this._bgMusicPlaying;
    },
    set: function set(value) {
      this._bgMusicPlaying = value;
    }
  }, {
    key: "bgSoundPlaying",
    get: function get() {
      return this._bgSoundPlaying;
    },
    set: function set(value) {
      this._bgSoundPlaying = value;
    }
  }]);
  return Sound;
}();
exports.Sound = Sound;

/***/ }),

/***/ "./client/js/states/boot.js":
/*!**********************************!*\
  !*** ./client/js/states/boot.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Boot = void 0;
var _elements = __webpack_require__(/*! ../helpers/elements.js */ "./client/js/helpers/elements.js");
var _sound = __webpack_require__(/*! ../helpers/sound.js */ "./client/js/helpers/sound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Boot = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(Boot, _Phaser$Scene);
  var _super = _createSuper(Boot);
  function Boot() {
    _classCallCheck(this, Boot);
    return _super.apply(this, arguments);
  }
  _createClass(Boot, [{
    key: "create",
    value: function create() {
      console.log('Start Boot.create');
      this.registry.set('Sound', new _sound.Sound());
      this.registry.set('socketIO', io());
      this.scene.start('Preload');
      console.log('End  Boot.create');
    }
  }]);
  return Boot;
}(Phaser.Scene);
exports.Boot = Boot;
var _default = Boot;
exports["default"] = _default;

/***/ }),

/***/ "./client/js/states/menu.js":
/*!**********************************!*\
  !*** ./client/js/states/menu.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _elements = __webpack_require__(/*! ../helpers/elements.js */ "./client/js/helpers/elements.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Menu = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(Menu, _Phaser$Scene);
  var _super = _createSuper(Menu);
  function Menu() {
    _classCallCheck(this, Menu);
    return _super.call(this, 'Menu');
  }
  _createClass(Menu, [{
    key: "init",
    value: function init(data) {
      this.slotsWithGame = null;
      this.socket = this.registry.get('socketIO');
      this.socket.on('display pending games', this.displayPendingGames.bind(this));
    }
  }, {
    key: "create",
    value: function create() {
      var background = this.add.image(this.sys.canvas.clientWidth / 2, this.sys.canvas.clientHeight / 2, 'main_menu');
      background.setOrigin(0.5, 0.5);
      new _elements.Text({
        game: this,
        x: this.sys.canvas.clientWidth / 2,
        y: this.sys.canvas.clientHeight / 2 - 215,
        text: 'Main Menu',
        style: {
          font: '35px Areal',
          fill: '#9ec0ba',
          stroke: '#7f9995',
          strokeThickness: 3
        }
      });
      var button = new _elements.TextButton({
        game: this,
        x: this.sys.canvas.clientWidth / 2,
        y: this.sys.canvas.clientHeight / 2 + 195,
        asset: 'buttons',
        callback: this.hostGameAction,
        callbackContext: this,
        upFrame: 0,
        overFrame: 1,
        downFrame: 2,
        outFrame: 3,
        label: 'New Game',
        style: {
          font: '20px Areal',
          fill: '#000000'
        }
      });
      this.socket.emit('enter lobby', this.displayPendingGames.bind(this));
      this.registry.get('Sound').playMusic(this, 'bgMusic02');
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "hostGameAction",
    value: function hostGameAction() {
      this.socket.emit('leave lobby');
      this.scene.start('SelectMap');
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
        game: this,
        availableGames: availableGames,
        callback: this.joinGameAction,
        callbackContext: this,
        x: this.sys.canvas.clientWidth / 2 - 220,
        y: this.sys.canvas.clientHeight / 2 - 100,
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
      this.socket.emit('leave lobby');
      console.log('Selected game: ' + game_id.game_id);
      this.scene.start('PendingGame', game_id);
    }
  }]);
  return Menu;
}(Phaser.Scene);
var _default = Menu;
exports["default"] = _default;

/***/ }),

/***/ "./client/js/states/pending_game.js":
/*!******************************************!*\
  !*** ./client/js/states/pending_game.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _elements = __webpack_require__(/*! ../helpers/elements.js */ "./client/js/helpers/elements.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var PendingGame = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(PendingGame, _Phaser$Scene);
  var _super = _createSuper(PendingGame);
  function PendingGame() {
    _classCallCheck(this, PendingGame);
    return _super.call(this, 'PendingGame');
  }
  _createClass(PendingGame, [{
    key: "init",
    value: function init(_ref) {
      var game_id = _ref.game_id;
      this.socket = this.registry.get('socketIO');
      this.slotsWithPlayer = null;
      this.playerCount = 0;
      this.game_id = game_id;
      this.socket.emit('enter pending game', {
        game_id: this.game_id
      });
    }
  }, {
    key: "create",
    value: function create() {
      var background = this.add.image(this.sys.canvas.clientWidth / 2, this.sys.canvas.clientHeight / 2, 'main_menu');
      background.setOrigin(0.5, 0.5);
      new _elements.Text({
        game: this,
        x: this.sys.canvas.clientWidth / 2,
        y: this.sys.canvas.clientHeight / 2 - 215,
        text: '',
        style: {
          font: '35px Areal',
          fill: '#9ec0ba',
          stroke: '#7f9995',
          strokeThickness: 3
        }
      });
      this.startGameButton = new _elements.TextButton({
        game: this,
        x: this.sys.canvas.clientWidth / 2 + 105,
        y: this.sys.canvas.clientHeight / 2 + 195,
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
      this.startGameButton.disactivate();
      new _elements.TextButton({
        game: this,
        x: this.sys.canvas.clientWidth / 2 - 105,
        y: this.sys.canvas.clientHeight / 2 + 195,
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
      this.gameTitle = new _elements.Text({
        game: this,
        x: this.sys.canvas.clientWidth / 2,
        y: this.sys.canvas.clientHeight / 2 - 215,
        text: '',
        style: {
          font: '35px Areal',
          fill: '#9ec0ba',
          stroke: '#6f7975',
          strokeThickness: 3
        }
      });
      this.socket.on('update game', this.displayGameInfo.bind(this));
      this.socket.on('launch game', this.launchGame.bind(this));
    }
  }, {
    key: "displayGameInfo",
    value: function displayGameInfo(_ref2) {
      var current_game = _ref2.current_game;
      var players = Object.values(current_game.players);
      this.gameTitle.text = current_game.name;
      if (players.length > this.playerCount) {
        console.log('New player detected');
        this.registry.get('Sound').playSound(this, 'FxPickItem01');
      }
      this.playerCount = players.length;

      //Destroy PlayerSlots if already existing
      if (this.slotsWithPlayer) {
        this.slotsWithPlayer.destroy();
      }

      //Create the PlayerSlots to display players
      this.slotsWithPlayer = new _elements.PlayerSlots({
        game: this,
        max_players: current_game.max_players,
        players: players,
        x: this.sys.canvas.clientWidth / 2 - 174,
        y: this.sys.canvas.clientHeight / 2 - 81,
        asset_empty: 'bomberman_head_blank',
        asset_player: 'bomberman_head_',
        style: {
          font: '20px Areal',
          fill: '#48291c'
        }
      });

      //Activate the Start button if more than one user in the PlayerSlots
      if (players.length > 1) {
        this.startGameButton.activate();
      } else {
        this.startGameButton.disactivate();
      }
    }
  }, {
    key: "leaveGameAction",
    value: function leaveGameAction() {
      this.socket.emit('leave pending game');
      this.scene.start('Menu');
    }
  }, {
    key: "startGameAction",
    value: function startGameAction() {
      this.socket.emit('start game');
    }
  }, {
    key: "launchGame",
    value: function launchGame(game) {
      this.scene.start('Play', game);
    }
  }]);
  return PendingGame;
}(Phaser.Scene);
var _default = PendingGame;
exports["default"] = _default;

/***/ }),

/***/ "./client/js/states/play.js":
/*!**********************************!*\
  !*** ./client/js/states/play.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _elements = __webpack_require__(/*! ../helpers/elements.js */ "./client/js/helpers/elements.js");
var _utils = __webpack_require__(/*! ../utils/utils.js */ "./client/js/utils/utils.js");
var _constants = __webpack_require__(/*! ../utils/constants.js */ "./client/js/utils/constants.js");
var _player = _interopRequireDefault(__webpack_require__(/*! ../entities/player.js */ "./client/js/entities/player.js"));
var _enemy_player = _interopRequireDefault(__webpack_require__(/*! ../entities/enemy_player.js */ "./client/js/entities/enemy_player.js"));
var _bomb = _interopRequireDefault(__webpack_require__(/*! ../entities/bomb.js */ "./client/js/entities/bomb.js"));
var _spoil = _interopRequireDefault(__webpack_require__(/*! ../entities/spoil.js */ "./client/js/entities/spoil.js"));
var _fire_blast = _interopRequireDefault(__webpack_require__(/*! ../entities/fire_blast.js */ "./client/js/entities/fire_blast.js"));
var _bone = _interopRequireDefault(__webpack_require__(/*! ../entities/bone.js */ "./client/js/entities/bone.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Play = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(Play, _Phaser$Scene);
  var _super = _createSuper(Play);
  function Play() {
    _classCallCheck(this, Play);
    return _super.call(this, 'Play');
  }
  _createClass(Play, [{
    key: "init",
    value: function init(game) {
      this.socket = this.registry.get('socketIO');
      this.currentGame = game;
    }
  }, {
    key: "preload",
    value: function preload() {
      var url;

      //url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js';
      var url = '/phaser3-rex-plugins/dist/rexvirtualjoystickplugin.min.js';
      this.load.plugin('rexvirtualjoystickplugin', url, false);
    }
  }, {
    key: "create",
    value: function create() {
      this.createMap();
      this.createPlayers();
      this.setEventHandlers();
      //this.game.time.events.loop(400 , this.stopAnimationLoop.bind(this));

      this.registry.get('Sound').playMusic(this, 'bgMusic03');
      this.virtualJoyStick = new _elements.Virtualjoystick({
        scene: this,
        x: 800,
        y: 400,
        xx: 180,
        yy: 400
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.physics.add.collider(this.player, this.blockLayer);
      this.physics.add.collider(this.player, this.enemies);
      this.physics.add.collider(this.player, this.bombs);
      this.physics.overlap(this.player, this.spoils, this.onPlayerVsSpoil, null, this);
      this.physics.overlap(this.player, this.blasts, this.onPlayerVsBlast, null, this);
      this.player.update();
      this.stopAnimationLoop();
    }
  }, {
    key: "createMap",
    value: function createMap() {
      this.map = this.add.tilemap(this.currentGame.map_name);
      var tileset = this.map.addTilesetImage(_constants.TILESET, null, 35, 35, 0, 0);
      this.blockLayer = this.map.createLayer(_constants.LAYER, tileset);
      this.map.setCollision(this.blockLayer.layer.properties.collisionTiles);
      this.player = null;
      this.bones = this.add.group({
        key: 'bones'
      });
      this.bombs = this.add.group({
        key: 'bombs'
      });
      this.spoils = this.add.group({
        key: 'spoils'
      });
      this.blasts = this.add.group({
        key: 'blasts'
      });
      this.enemies = this.add.group({
        key: 'enemies'
      });
    }
  }, {
    key: "createPlayers",
    value: function createPlayers() {
      for (var _i = 0, _Object$values = Object.values(this.currentGame.players); _i < _Object$values.length; _i++) {
        var player = _Object$values[_i];
        var setup = {
          game: this,
          id: player.id,
          spawn: player.spawn,
          skin: player.skin
        };
        if (player.id === this.socket.id) {
          this.player = new _player["default"](setup);
        } else {
          this.enemies.add(new _enemy_player["default"](setup));
        }
      }
    }
  }, {
    key: "setEventHandlers",
    value: function setEventHandlers() {
      this.socket.on('move player', this.onMovePlayer.bind(this));
      this.socket.on('player win', this.onPlayerWin.bind(this));
      this.socket.on('show bomb', this.onShowBomb.bind(this));
      this.socket.on('detonate bomb', this.onDetonateBomb.bind(this));
      this.socket.on('spoil was picked', this.onSpoilWasPicked.bind(this));
      this.socket.on('show bones', this.onShowBones.bind(this));
      this.socket.on('player disconnect', this.onPlayerDisconnect.bind(this));
    }
  }, {
    key: "onPlayerVsSpoil",
    value: function onPlayerVsSpoil(player, spoil) {
      this.socket.emit('pick up spoil', {
        spoil_id: spoil.id
      });
      this.spoils.remove(spoil, true, true);
    }
  }, {
    key: "onPlayerVsBlast",
    value: function onPlayerVsBlast(player, blast) {
      if (player.alive) {
        this.socket.emit('player died', {
          col: player.currentCol(),
          row: player.currentRow()
        });
        player.becomesDead();
        this.registry.get('Sound').playSound(this, 'FxDeath01');
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
      var _iterator = _createForOfIteratorHelper(this.enemies.getChildren()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var enemy = _step.value;
          if (!(typeof enemy.lastMoveAt === "undefined") && enemy.lastMoveAt < this.game.getTime() - 200) {
            enemy.anims.stop();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "onShowBomb",
    value: function onShowBomb(_ref2) {
      var bomb_id = _ref2.bomb_id,
        col = _ref2.col,
        row = _ref2.row;
      this.bombs.add(new _bomb["default"](this, bomb_id, col, row));
    }
  }, {
    key: "onDetonateBomb",
    value: function onDetonateBomb(_ref3) {
      var bomb_id = _ref3.bomb_id,
        blastedCells = _ref3.blastedCells;
      // Remove Bomb:
      (0, _utils.findAndDestroyFrom)(bomb_id, this.bombs);
      this.registry.get('Sound').playSound(this, 'FxExplosion01');

      // Render Blast:
      var _iterator2 = _createForOfIteratorHelper(blastedCells),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var cell = _step2.value;
          this.blasts.add(new _fire_blast["default"](this, cell));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      ;

      // Destroy Tiles:
      var _iterator3 = _createForOfIteratorHelper(blastedCells),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _cell = _step3.value;
          if (!_cell.destroyed) {
            continue;
          }
          this.blockLayer.putTileAt(this.blockLayer.layer.properties.empty, _cell.col, _cell.row);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      ;

      // Add Spoils:
      var _iterator4 = _createForOfIteratorHelper(blastedCells),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _cell2 = _step4.value;
          if (!_cell2.destroyed) {
            continue;
          }
          if (!_cell2.spoil) {
            continue;
          }
          this.spoils.add(new _spoil["default"](this, _cell2.spoil));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
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
        this.registry.get('Sound').playSound(this, 'FxPickItem01');
      }
      (0, _utils.findAndDestroyFrom)(spoil_id, this.spoils);
    }
  }, {
    key: "onShowBones",
    value: function onShowBones(_ref5) {
      var player_id = _ref5.player_id,
        col = _ref5.col,
        row = _ref5.row;
      this.bones.add(new _bone["default"](this, col, row));
      (0, _utils.findAndDestroyFrom)(player_id, this.enemies);
      this.registry.get('Sound').playSound(this, 'FxDeath01');
    }
  }, {
    key: "onPlayerWin",
    value: function onPlayerWin(winner_skin) {
      this.socket.emit('leave game');
      this.scene.start('Win', winner_skin);
      console.log('ToDo: this.state.start Win: ' + winner_skin);
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
}(Phaser.Scene);
var _default = Play;
exports["default"] = _default;

/***/ }),

/***/ "./client/js/states/preload.js":
/*!*************************************!*\
  !*** ./client/js/states/preload.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Preload = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Preload = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(Preload, _Phaser$Scene);
  var _super = _createSuper(Preload);
  function Preload() {
    _classCallCheck(this, Preload);
    return _super.call(this, 'Preload');
  }
  _createClass(Preload, [{
    key: "preload",
    value: function preload() {
      // Menu:
      this.load.image('main_menu', 'images/menu/main_menu.png');
      this.load.image('slot_backdrop', 'images/menu/slot_backdrop.png');
      this.load.spritesheet('buttons', 'images/menu/buttons.png', {
        frameWidth: 200,
        frameHeight: 75
      });
      this.load.spritesheet('check_icon', 'images/menu/accepts.png', {
        frameWidth: 75,
        frameHeight: 75
      });
      this.load.spritesheet('list_icon', 'images/menu/game_enter.png', {
        frameWidth: 75,
        frameHeight: 75
      });
      this.load.image('hot_map_preview', 'images/menu/hot_map_preview.png');
      this.load.image('cold_map_preview', 'images/menu/cold_map_preview.png');
      this.load.image('hot_map_preview_mini', 'images/menu/hot_map_preview_mini.png');
      this.load.image('cold_map_preview_mini', 'images/menu/cold_map_preview_mini.png');
      this.load.image('prev', 'images/menu/left_arrow.png');
      this.load.image('next', 'images/menu/right_arrow.png');

      // Map:
      this.load.image('tiles', 'maps/tileset.png');
      this.load.tilemapTiledJSON('hot_map', 'maps/hot_map.json');
      this.load.tilemapTiledJSON('cold_map', 'maps/cold_map.json');

      // Game:
      this.load.spritesheet('explosion_center', 'images/game/explosion_center.png', {
        frameWidth: 35,
        frameHeight: 35
      });
      this.load.spritesheet('explosion_horizontal', 'images/game/explosion_horizontal.png', {
        frameWidth: 35,
        frameHeight: 35
      });
      this.load.spritesheet('explosion_vertical', 'images/game/explosion_vertical.png', {
        frameWidth: 35,
        frameHeight: 35
      });
      this.load.spritesheet('explosion_up', 'images/game/explosion_up.png', {
        frameWidth: 35,
        frameHeight: 35
      });
      this.load.spritesheet('explosion_right', 'images/game/explosion_right.png', {
        frameWidth: 35,
        frameHeight: 35
      });
      this.load.spritesheet('explosion_down', 'images/game/explosion_down.png', {
        frameWidth: 35,
        frameHeight: 35
      });
      this.load.spritesheet('explosion_left', 'images/game/explosion_left.png', {
        frameWidth: 35,
        frameHeight: 35
      });
      this.load.spritesheet('spoil_tileset', 'images/game/spoil_tileset.png', {
        frameWidth: 35,
        frameHeight: 35
      });
      this.load.spritesheet('bone_tileset', 'images/game/bone_tileset.png', {
        frameWidth: 35,
        frameHeight: 35
      });
      this.load.spritesheet('bomb_tileset', 'images/game/bombs.png', {
        frameWidth: 35,
        frameHeight: 35
      });
      this.load.image('speed_up_bonus', 'images/game/speed_up_bonus.png');
      this.load.image('speed_up_no_bonus', 'images/game/speed_up_no_bonus.png');
      this.load.image('delay_up_bonus', 'images/game/delay_up_bonus.png');
      this.load.image('delay_up_no_bonus', 'images/game/delay_up_no_bonus.png');
      this.load.image('power_up_bonus', 'images/game/power_up_bonus.png');
      this.load.image('placeholder_power', 'images/game/placeholder_power.png');
      this.load.image('placeholder_speed', 'images/game/placeholder_speed.png');
      this.load.image('placeholder_time', 'images/game/placeholder_time.png');

      // Skins:
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
      this.load.spritesheet('bomberman_Theodora', 'images/game/chars/1-preview.png', {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet('bomberman_Ringo', 'images/game/chars/2-preview.png', {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet('bomberman_Jeniffer', 'images/game/chars/3-preview.png', {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet('bomberman_Godard', 'images/game/chars/4-preview.png', {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet('bomberman_Biarid', 'images/game/chars/5-preview.png', {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet('bomberman_Solia', 'images/game/chars/6-preview.png', {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet('bomberman_Kedan', 'images/game/chars/7-preview.png', {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet('bomberman_Nigob', 'images/game/chars/8-preview.png', {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet('bomberman_Baradir', 'images/game/chars/9-preview.png', {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet('bomberman_Raviel', 'images/game/chars/10-preview.png', {
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet('bomberman_Valpo', 'images/game/chars/11-preview.png', {
        frameWidth: 32,
        frameHeight: 32
      });
      this.registry.get('Sound').preload(this);
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start('Menu');
    }
  }]);
  return Preload;
}(Phaser.Scene);
exports.Preload = Preload;
var _default = Preload;
exports["default"] = _default;

/***/ }),

/***/ "./client/js/states/select_map.js":
/*!****************************************!*\
  !*** ./client/js/states/select_map.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constants = __webpack_require__(/*! ../utils/constants.js */ "./client/js/utils/constants.js");
var _elements = __webpack_require__(/*! ../helpers/elements.js */ "./client/js/helpers/elements.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var COLOR_PRIMARY = 0x4e342e;
var COLOR_LIGHT = 0x7b5e57;
var COLOR_DARK = 0x260e04;
var SelectMap = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(SelectMap, _Phaser$Scene);
  var _super = _createSuper(SelectMap);
  function SelectMap() {
    _classCallCheck(this, SelectMap);
    return _super.call(this, 'SelectMap');
  }
  _createClass(SelectMap, [{
    key: "preload",
    value: function preload() {
      this.load.scenePlugin({
        key: 'rexuiplugin',
        url: '/phaser3-rex-plugins/dist/rexuiplugin.min.js',
        //url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
        sceneKey: 'rexUI',
        visible: false
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.socket = this.registry.get('socketIO');
    }
  }, {
    key: "create",
    value: function create() {
      this.container = this.add.container(0, 0);
      var img = this.add.image(this.sys.canvas.clientWidth / 2, this.sys.canvas.clientHeight / 2, 'main_menu').setOrigin(0.5, 0.5);
      this.container.add(img);
      var txt = new _elements.Text({
        game: this,
        x: this.sys.canvas.clientWidth / 2,
        y: this.sys.canvas.clientHeight / 2 - 215,
        text: 'Select Map',
        style: {
          font: '35px Areal',
          fill: '#9ec0ba',
          stroke: '#6f7975',
          strokeThickness: 3
        }
      });
      this.container.add(txt);
      this.selectedMap = 'hot_map';
      var button = new _elements.TextButton({
        game: this,
        x: this.sys.canvas.clientWidth / 2,
        y: this.sys.canvas.clientHeight / 2 + 195,
        asset: 'check_icon',
        callback: this.confirmStageSelection,
        callbackContext: this,
        upFrame: 0,
        overFrame: 1,
        downFrame: 2,
        outFrame: 3,
        label: '',
        style: {
          font: '20px Areal',
          fill: '#000000'
        }
      });
      this.container.add(button);
      this.mapSlider = new _elements.MapSlider({
        scene: this,
        x: this.sys.canvas.clientWidth / 2,
        y: this.sys.canvas.clientHeight / 2
      });
    }
  }, {
    key: "confirmStageSelection",
    value: function confirmStageSelection() {
      if (this.mapSlider.selected != null) {
        this.selectedMap = this.mapSlider.selected;
        console.log('Selected Map: ' + this.selectedMap);
      }
      this.socket.emit('create game', this.selectedMap, this.joinToNewGame.bind(this));
    }
  }, {
    key: "joinToNewGame",
    value: function joinToNewGame(game_id) {
      this.mapSlider.destroy();
      this.scene.start('PendingGame', game_id);
    }
  }, {
    key: "update",
    value: function update() {}
  }]);
  return SelectMap;
}(Phaser.Scene);
var _default = SelectMap;
exports["default"] = _default;

/***/ }),

/***/ "./client/js/states/win.js":
/*!*********************************!*\
  !*** ./client/js/states/win.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _elements = __webpack_require__(/*! ../helpers/elements.js */ "./client/js/helpers/elements.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Win = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(Win, _Phaser$Scene);
  var _super = _createSuper(Win);
  function Win() {
    _classCallCheck(this, Win);
    return _super.call(this, 'Win');
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
        game: this,
        x: this.sys.canvas.clientWidth / 2,
        y: this.sys.canvas.clientHeight / 2,
        text: this.winnerText(),
        style: {
          font: '30px Areal',
          fill: '#FFFFFF'
        }
      });
      this.button = new _elements.TextButton({
        game: this,
        x: this.sys.canvas.clientWidth / 2,
        y: this.sys.canvas.clientHeight / 2 + 195,
        asset: 'buttons',
        callback: this.returnToMenu,
        callbackContext: this,
        upFrame: 0,
        overFrame: 1,
        downFrame: 2,
        outFrame: 3,
        label: 'Back to Menu',
        style: {
          font: '20px Areal',
          fill: '#000000'
        }
      });
      this.cursorKeys = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
      this.registry.get('Sound').playMusic(this, 'bgMusic01');
    }
  }, {
    key: "update",
    value: function update() {
      if (this.cursorKeys.isDown) {
        this.returnToMenu();
      }
    }
  }, {
    key: "returnToMenu",
    value: function returnToMenu() {
      this.scene.start('Menu');
    }
  }, {
    key: "winnerText",
    value: function winnerText() {
      if (this.skin) {
        return 'Player: "' + this.skin + '" won! Press Enter to return to main menu.';
      }
      return 'Opponent left! Press Enter to return to main menu.';
    }
  }]);
  return Win;
}(Phaser.Scene);
var _default = Win;
exports["default"] = _default;

/***/ }),

/***/ "./client/js/utils/constants.js":
/*!**************************************!*\
  !*** ./client/js/utils/constants.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TILE_SIZE = exports.TILESET = exports.STEP_SPEED = exports.STEP_POWER = exports.STEP_DELAY = exports.SPEED = exports.POWER = exports.PING = exports.MIN_DELAY = exports.MAX_SPEED = exports.LAYER = exports.INITIAL_SPEED = exports.INITIAL_POWER = exports.INITIAL_DELAY = exports.EXPLOSION_TIME = exports.DELAY = exports.AVAILABLE_MAPS = void 0;
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

/***/ "./client/js/utils/utils.js":
/*!**********************************!*\
  !*** ./client/js/utils/utils.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findFrom = exports.findAndDestroyFrom = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var findFrom = function findFrom(id, entities) {
  var _iterator = _createForOfIteratorHelper(entities.getChildren()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var entity = _step.value;
      if (entity.id !== id) {
        continue;
      }
      return entity;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map