(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _GameState = require('states/GameState');

var _GameState2 = _interopRequireDefault(_GameState);

var _PointNClickGameState = require('states/PointNClickGameState.js');

var _PointNClickGameState2 = _interopRequireDefault(_PointNClickGameState);

var _LoadState = require('states/LoadState');

var _LoadState2 = _interopRequireDefault(_LoadState);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Game = function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this, 500, 500, Phaser.AUTO, 'content', null));

		_this.state.add('LoadState', _LoadState2.default, false);
		_this.state.add('GameState', _PointNClickGameState2.default, false);
		_this.state.start('LoadState');
		return _this;
	}

	return Game;
}(Phaser.Game);

new Game();

},{"states/GameState":5,"states/LoadState":6,"states/PointNClickGameState.js":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Item = function Item(name, x, y) {
    _classCallCheck(this, Item);

    this.name = name;
    this.x = x;
    this.y = y;
};

exports.default = Item;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () {
		function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
		}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
}();

function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
		}
}

function _possibleConstructorReturn(self, call) {
		if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var RainbowText = function (_Phaser$Text) {
		_inherits(RainbowText, _Phaser$Text);

		function RainbowText(game, x, y, text) {
				_classCallCheck(this, RainbowText);

				var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RainbowText).call(this, game, x, y, text, { font: "45px Arial", fill: "#ff0044", align: "center" }));

				_this._speed = 125; //ms
				_this._colorIndex = 0;
				_this._colors = ['#ee4035', '#f37736', '#fdf498', '#7bc043', '#0392cf'];

				_this.colorize();
				_this.startTimer();

				_this.game.stage.addChild(_this);

				return _this;
		}

		_createClass(RainbowText, [{
				key: "startTimer",
				value: function startTimer() {
						this.game.time.events.loop(this._speed, this.colorize, this).timer.start();
				}
		}, {
				key: "colorize",
				value: function colorize() {

						for (var i = 0; i < this.text.length; i++) {

								if (this._colorIndex === this._colors.length) {
										this._colorIndex = 0;
								}

								this.addColor(this._colors[this._colorIndex], i);
								this._colorIndex++;
						}
				}
		}]);

		return RainbowText;
}(Phaser.Text);

exports.default = RainbowText;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Room = function Room(roomname, leftroomname, rightroomname, items) {
    _classCallCheck(this, Room);

    this.roomname = roomname;
    this.leftroomname = leftroomname;
    this.rightroomname = rightroomname;
    this.items = items;
};

exports.default = Room;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _RainbowText = require("objects/RainbowText");

var _RainbowText2 = _interopRequireDefault(_RainbowText);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var GameState = function (_Phaser$State) {
	_inherits(GameState, _Phaser$State);

	function GameState() {
		_classCallCheck(this, GameState);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(GameState).apply(this, arguments));
	}

	_createClass(GameState, [{
		key: "create",
		value: function create() {
			var center = { x: this.game.world.centerX, y: this.game.world.centerY };
			var text = new _RainbowText2.default(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust\n and some shit of mouse!");
			text.anchor.set(0.5);
		}
	}]);

	return GameState;
}(Phaser.State);

exports.default = GameState;

},{"objects/RainbowText":3}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _Room = require('objects/Room');

var _Room2 = _interopRequireDefault(_Room);

var _Item = require('objects/Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var LoadState = function (_Phaser$State) {
    _inherits(LoadState, _Phaser$State);

    function LoadState() {
        _classCallCheck(this, LoadState);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(LoadState).apply(this, arguments));
    }

    _createClass(LoadState, [{
        key: 'preload',
        value: function preload() {
            this.load.image("room1", "images/room1.png");
            this.load.image("room2", "images/room2.png");
            this.load.image("left", "images/left.png");
            this.load.image("right", "images/right.png");
            this.load.image("carrot", "images/carrot.png");

            this.rooms = [new _Room2.default("room1", "room2", "room2", [new _Item2.default("carrot", 50, 100), new _Item2.default("carrot", 250, 100)]), new _Room2.default("room2", "room1", "room1", [])];
        }
    }, {
        key: 'create',
        value: function create() {
            this.state.start("GameState", false, false, this.rooms);
        }
    }]);

    return LoadState;
}(Phaser.State);

exports.default = LoadState;

},{"objects/Item":2,"objects/Room":4}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var PointNClickGameState = function (_Phaser$State) {
	_inherits(PointNClickGameState, _Phaser$State);

	function PointNClickGameState() {
		_classCallCheck(this, PointNClickGameState);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(PointNClickGameState).apply(this, arguments));
	}

	_createClass(PointNClickGameState, [{
		key: "init",
		value: function init(rooms) {
			this.rooms = rooms;
			this.currentRoom = rooms[0];
		}
	}, {
		key: "create",
		value: function create() {
			this.roomlayer = this.add.group();
			this.itemlayer = this.add.group();
			this.room = this.roomlayer.create(0, 0, this.currentRoom.roomname);
			this.addAllItems();
			this.add.button(20, 20, "left", this.goLeft, this, 2, 1, 0);
			this.add.button(this.game.width - 40, 20, "right", this.goRight, this, 2, 1, 0);
		}
	}, {
		key: "goLeft",
		value: function goLeft() {
			var _this2 = this;

			this.roomlayer.removeAll();
			this.itemlayer.removeAll();
			this.currentRoom = this.rooms.filter(function (room) {
				return room.roomname === _this2.currentRoom.leftroomname;
			})[0];
			this.roomlayer.create(0, 0, this.currentRoom.roomname);
			this.addAllItems();
		}
	}, {
		key: "goRight",
		value: function goRight() {
			var _this3 = this;

			this.roomlayer.removeAll();
			this.itemlayer.removeAll();
			this.currentRoom = this.rooms.filter(function (room) {
				return room.roomname === _this3.currentRoom.rightroomname;
			})[0];
			this.roomlayer.create(0, 0, this.currentRoom.roomname);
			this.addAllItems();
		}
	}, {
		key: "addAllItems",
		value: function addAllItems() {
			var _this4 = this;

			this.currentRoom.items.forEach(function (item) {
				return _this4.itemlayer.create(item.x, item.y, item.name);
			});
			this.itemlayer.setAll("inputEnabled", true);
			this.itemlayer.callAll("events.onInputDown.add", "events.onInputDown", this.doItemThingy);
		}
	}, {
		key: "doItemThingy",
		value: function doItemThingy(item) {
			console.log(item);
			item.parent.remove(item);
		}
	}]);

	return PointNClickGameState;
}(Phaser.State);

exports.default = PointNClickGameState;

},{}]},{},[1])
//# sourceMappingURL=game.js.map
