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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var dumi_1 = require('dumi');
var react_1 = __importDefault(require('react'));
require('./index.less');
var Navbar = function () {
  var nav = (0, dumi_1.useNavData)();
  var pathname = (0, dumi_1.useLocation)().pathname;
  return react_1['default'].createElement(
    'ul',
    { className: 'dumi-vite-navbar' },
    nav.map(function (item) {
      return react_1['default'].createElement(
        'li',
        { key: item.link },
        /^(\w+:)\/\/|^(mailto|tel):/.test(item.link)
          ? react_1['default'].createElement(
              'a',
              { href: item.link, target: '_blank', rel: 'noreferrer' },
              item.title,
            )
          : react_1['default'].createElement(
              dumi_1.Link,
              __assign(
                { to: item.link },
                pathname.startsWith(item.activePath || item.link)
                  ? { className: 'active' }
                  : {},
              ),
              item.title,
            ),
      );
    }),
  );
};
exports['default'] = Navbar;
