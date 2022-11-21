'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var dumi_1 = require('dumi');
var Toc_1 = __importDefault(require('dumi/theme/slots/Toc'));
var react_1 = __importDefault(require('react'));
require('./index.less');
var Sidebar = function () {
  var pathname = (0, dumi_1.useLocation)().pathname;
  var meta = (0, dumi_1.useRouteMeta)();
  var sidebar = (0, dumi_1.useSidebarData)();
  if (!sidebar) return null;
  return react_1['default'].createElement(
    'div',
    { className: 'dumi-vite-sidebar' },
    sidebar.map(function (item, i) {
      return react_1['default'].createElement(
        'dl',
        { className: 'dumi-vite-sidebar-group', key: String(i) },
        item.title && react_1['default'].createElement('dt', null, item.title),
        item.children.map(function (child) {
          return react_1['default'].createElement(
            'dd',
            { key: child.link },
            react_1['default'].createElement(
              dumi_1.NavLink,
              { to: child.link, title: child.title, end: true },
              child.title,
            ),
            child.link === pathname &&
              meta.frontmatter.toc === 'menu' &&
              react_1['default'].createElement(Toc_1['default'], null),
          );
        }),
      );
    }),
  );
};
exports['default'] = Sidebar;
