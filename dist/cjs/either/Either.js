"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toLeft = exports.toRight = exports.either = exports.isLeft = exports.isRight = exports.Right = exports.Left = void 0;

var _fjl = require("fjl");

var _Maybe = require("../maybe/Maybe");

var _Monad2 = _interopRequireWildcard(require("../monad/Monad"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * `Left` representation of `Either` construct.
 * @class Left
 * @param x {any}
 * @property value {any}
 */
var Left =
/*#__PURE__*/
function (_Monad) {
  _inherits(Left, _Monad);

  function Left() {
    _classCallCheck(this, Left);

    return _possibleConstructorReturn(this, _getPrototypeOf(Left).apply(this, arguments));
  }

  _createClass(Left, null, [{
    key: "of",
    value: function of(x) {
      return new Left(x);
    }
  }]);

  return Left;
}(_Monad2.default);
/**
 * @class Right
 * @param x {any}
 * @property value {any}
 */


exports.Left = Left;

var Right =
/*#__PURE__*/
function (_Just) {
  _inherits(Right, _Just);

  function Right() {
    _classCallCheck(this, Right);

    return _possibleConstructorReturn(this, _getPrototypeOf(Right).apply(this, arguments));
  }

  _createClass(Right, [{
    key: "map",
    value: function map(fn) {
      var value = this.valueOf();

      if (isLeft(value)) {
        return value;
      } else if (!(0, _fjl.isset)(value)) {
        return Left.of("TypeError: Cannot operate on `".concat(value, "`."));
      }

      return Right.of(fn(value));
    }
  }], [{
    key: "of",
    value: function of(x) {
      return new Right(x);
    }
  }]);

  return Right;
}(_Maybe.Just);

exports.Right = Right;

var
/**
 * Checks for instance of `Right` constructor.
 * @function module:either.isRight
 * @param x {any}
 * @returns {boolean}
 */
isRight = function isRight(x) {
  return x instanceof Right;
},

/**
 * Checks for instance of `Left` constructor.
 * @function module:either.isLeft
 * @param x {any}
 * @returns {boolean}
 */
isLeft = function isLeft(x) {
  return x instanceof Left;
},

/**
 * Calls matching callback on incoming `Either`'s type;  If is a `Left` (after mapping identity func on it) then calls left-callback and unwraps result
 * else calls right-callback and does the same.  Think of it like a functional
 * ternary statement (lol).
 * @function module:either.either
 * @param leftCallback {Function} - Mapped over value of `monad`'s identity.
 * @param rightCallback {Function} - "".
 * @return {any} - Value of unwrapped resulting value of `flatMap`ped, passed-in callback's on passed in monad.
 * @example
 * expect(
     either(() => 404, () => 200, compose(right, right, right, right)(true))
   ).toEqual(undefined);
 */
either = (0, _fjl.curry)(function (leftCallback, rightCallback, monad) {
  var identity = (0, _Monad2.alwaysMonad)(monad).flatMap(_fjl.id),
      out = isRight(monad) ? identity.flatMap((0, _fjl.toFunction)(rightCallback)) : Left.of(identity).flatMap(leftCallback);
  return (0, _fjl.isset)(out) ? out.join() : out;
}),
    toRight = function toRight(x) {
  return isRight(x) ? x : new Right(x);
},
    toLeft = function toLeft(x) {
  return isLeft(x) ? x : new Left(x);
};

exports.toLeft = toLeft;
exports.toRight = toRight;
exports.either = either;
exports.isLeft = isLeft;
exports.isRight = isRight;