'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var dumi_1 = require('dumi');
var react_1 = __importDefault(require('react'));
require('./heti.scss');
require('./index.less');
var Content = function (props) {
  var sidebar = (0, dumi_1.useSidebarData)();
  return react_1['default'].createElement(
    'div',
    {
      className: 'dumi-vite-content',
      'data-no-sidebar': !sidebar || undefined,
    },
    props.children,
  );
};
exports['default'] = Content;
