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
var Features = function () {
  var _a;
  var frontmatter = (0, dumi_1.useRouteMeta)().frontmatter;
  return Boolean(
    (_a = frontmatter.features) === null || _a === void 0 ? void 0 : _a.length,
  )
    ? react_1['default'].createElement(
        'div',
        {
          className: 'dumi-vite-features',
          'data-cols':
            [3, 2].find(function (n) {
              return frontmatter.features.length % n === 0;
            }) || 3,
        },
        frontmatter.features.map(function (_a) {
          var title = _a.title,
            description = _a.description,
            emoji = _a.emoji;
          return react_1['default'].createElement(
            'div',
            { key: title, className: 'dumi-vite-features-item' },
            emoji && react_1['default'].createElement('i', null, emoji),
            title && react_1['default'].createElement('h3', null, title),
            description &&
              react_1['default'].createElement('p', {
                dangerouslySetInnerHTML: { __html: description },
              }),
          );
        }),
      )
    : null;
};
exports['default'] = Features;
