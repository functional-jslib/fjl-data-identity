define(["exports", "./Functor"], function (_exports, _Functor2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _Functor2 = _interopRequireDefault(_Functor2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var Bifunctor =
  /*#__PURE__*/
  function (_Functor) {
    _inherits(Bifunctor, _Functor);

    function Bifunctor(value1, value2) {
      var _this;

      _classCallCheck(this, Bifunctor);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Bifunctor).call(this, value1));
      _this.value2 = value2;
      return _this;
    }

    _createClass(Bifunctor, [{
      key: "value2Of",
      value: function value2Of() {
        return this.value2;
      }
    }, {
      key: "first",
      value: function first(fn) {
        return new this.constructor(fn(this.valueOf()), this.value2Of());
      }
    }, {
      key: "second",
      value: function second(fn) {
        return new this.constructor(this.valueOf(), fn(this.value2Of()));
      }
    }, {
      key: "bimap",
      value: function bimap(fn1, fn2) {
        return new this.constructor(fn1(this.valueOf()), fn2(this.value2Of()));
      }
    }]);

    return Bifunctor;
  }(_Functor2.default);

  _exports.default = Bifunctor;
});