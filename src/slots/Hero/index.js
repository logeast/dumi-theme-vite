'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var dumi_1 = require('dumi');
var HeroTitle_1 = __importDefault(require('dumi/theme/slots/HeroTitle'));
var react_1 = __importDefault(require('react'));
require('./index.less');
var Hero = function () {
  var _a;
  var frontmatter = (0, dumi_1.useRouteMeta)().frontmatter;
  if (!('hero' in frontmatter)) return null;
  return react_1['default'].createElement(
    'div',
    { className: 'dumi-vite-hero' },
    frontmatter.hero.title &&
      react_1['default'].createElement(
        HeroTitle_1['default'],
        null,
        frontmatter.hero.title,
      ),
    frontmatter.hero.description &&
      react_1['default'].createElement('p', {
        dangerouslySetInnerHTML: { __html: frontmatter.hero.description },
      }),
    Boolean(
      (_a = frontmatter.hero.actions) === null || _a === void 0
        ? void 0
        : _a.length,
    ) &&
      react_1['default'].createElement(
        'div',
        { className: 'dumi-vite-hero-actions' },
        frontmatter.hero.actions.map(function (_a) {
          var text = _a.text,
            link = _a.link;
          return /^(\w+:)\/\/|^(mailto|tel):/.test(link)
            ? react_1['default'].createElement(
                'a',
                { href: link, target: '_blank', rel: 'noreferrer', key: text },
                text,
              )
            : react_1['default'].createElement(
                dumi_1.Link,
                { key: text, to: link },
                text,
              );
        }),
      ),
  );
};
exports['default'] = Hero;
