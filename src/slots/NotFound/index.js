'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var dumi_1 = require('dumi');
var react_1 = __importDefault(require('react'));
require('./index.less');
var Page404 = function () {
  var intl = (0, dumi_1.useIntl)();
  var locale = (0, dumi_1.useLocale)();
  return react_1['default'].createElement(
    'div',
    { className: 'dumi-vite-not-found' },
    react_1['default'].createElement(
      'h1',
      null,
      intl.formatMessage({ id: '404.title' }),
    ),
    react_1['default'].createElement(
      dumi_1.Link,
      { to: 'base' in locale ? locale.base : '/', replace: true },
      intl.formatMessage({ id: '404.back' }),
      ' \u2192',
    ),
  );
};
exports['default'] = Page404;
