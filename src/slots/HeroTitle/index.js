'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var react_1 = __importDefault(require('react'));
require('./index.less');
var HeroTitle = function (props) {
  return react_1['default'].createElement(
    'h1',
    { className: 'dumi-vite-hero-title' },
    react_1['default'].createElement('span', null, props.children),
  );
};
exports['default'] = HeroTitle;
