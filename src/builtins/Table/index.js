'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var lodash_throttle_1 = __importDefault(require('lodash.throttle'));
var react_1 = __importStar(require('react'));
require('./index.less');
var Table = function (_a) {
  var children = _a.children,
    props = __rest(_a, ['children']);
  var container = (0, react_1.useRef)(null);
  var _b = (0, react_1.useState)(false),
    leftFolded = _b[0],
    setLeftFolded = _b[1];
  var _c = (0, react_1.useState)(false),
    rightFolded = _c[0],
    setRightFolded = _c[1];
  // watch content scroll to render folded shadow
  (0, react_1.useEffect)(function () {
    var elm = container.current;
    if (elm) {
      var handler_1 = (0, lodash_throttle_1['default'])(function () {
        setLeftFolded(elm.scrollLeft > 0);
        setRightFolded(elm.scrollLeft < elm.scrollWidth - elm.offsetWidth);
      }, 100);
      handler_1();
      elm.addEventListener('scroll', handler_1);
      window.addEventListener('resize', handler_1);
      return function () {
        elm.removeEventListener('scroll', handler_1);
        window.removeEventListener('resize', handler_1);
      };
    }
  }, []);
  return react_1['default'].createElement(
    'div',
    { className: 'dumi-vite-table' },
    react_1['default'].createElement(
      'div',
      {
        className: 'dumi-vite-table-content',
        ref: container,
        'data-left-folded': leftFolded || undefined,
        'data-right-folded': rightFolded || undefined,
      },
      react_1['default'].createElement('table', __assign({}, props), children),
    ),
  );
};
exports['default'] = Table;
