"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Functor: true,
  Apply: true,
  Applicative: true,
  Bifunctor: true,
  Monad: true,
  isMonad: true,
  valueOf: true,
  join: true,
  fmap: true,
  ap: true,
  flatMap: true,
  getMonadUnWrapper: true,
  IO: true
};
Object.defineProperty(exports, "Functor", {
  enumerable: true,
  get: function get() {
    return _Functor.default;
  }
});
Object.defineProperty(exports, "Apply", {
  enumerable: true,
  get: function get() {
    return _Apply.default;
  }
});
Object.defineProperty(exports, "Applicative", {
  enumerable: true,
  get: function get() {
    return _Applicative.default;
  }
});
Object.defineProperty(exports, "Bifunctor", {
  enumerable: true,
  get: function get() {
    return _Bifunctor.default;
  }
});
Object.defineProperty(exports, "Monad", {
  enumerable: true,
  get: function get() {
    return _Monad.default;
  }
});
Object.defineProperty(exports, "isMonad", {
  enumerable: true,
  get: function get() {
    return _Monad.isMonad;
  }
});
Object.defineProperty(exports, "valueOf", {
  enumerable: true,
  get: function get() {
    return _Monad.valueOf;
  }
});
Object.defineProperty(exports, "join", {
  enumerable: true,
  get: function get() {
    return _Monad.join;
  }
});
Object.defineProperty(exports, "fmap", {
  enumerable: true,
  get: function get() {
    return _Monad.fmap;
  }
});
Object.defineProperty(exports, "ap", {
  enumerable: true,
  get: function get() {
    return _Monad.ap;
  }
});
Object.defineProperty(exports, "flatMap", {
  enumerable: true,
  get: function get() {
    return _Monad.flatMap;
  }
});
Object.defineProperty(exports, "getMonadUnWrapper", {
  enumerable: true,
  get: function get() {
    return _Monad.getMonadUnWrapper;
  }
});
Object.defineProperty(exports, "IO", {
  enumerable: true,
  get: function get() {
    return _IO.default;
  }
});

var _Functor = _interopRequireDefault(require("./functor/Functor"));

var _Apply = _interopRequireDefault(require("./functor/Apply"));

var _Applicative = _interopRequireDefault(require("./functor/Applicative"));

var _Bifunctor = _interopRequireDefault(require("./functor/Bifunctor"));

var _Monad = _interopRequireWildcard(require("./monad/Monad"));

var _IO = _interopRequireDefault(require("./io/IO"));

var _Maybe = require("./maybe/Maybe");

Object.keys(_Maybe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Maybe[key];
    }
  });
});

var _Either = require("./either/Either");

Object.keys(_Either).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Either[key];
    }
  });
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }