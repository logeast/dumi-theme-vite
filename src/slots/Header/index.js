'use strict';
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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var close_svg_1 = require('@ant-design/icons-svg/inline-svg/outlined/close.svg');
var menu_svg_1 = require('@ant-design/icons-svg/inline-svg/outlined/menu.svg');
var dumi_1 = require('dumi');
var LangSwitch_1 = __importDefault(require('dumi/theme/slots/LangSwitch'));
var Logo_1 = __importDefault(require('dumi/theme/slots/Logo'));
var Navbar_1 = __importDefault(require('dumi/theme/slots/Navbar'));
var RtlSwitch_1 = __importDefault(require('dumi/theme/slots/RtlSwitch'));
var SearchBar_1 = __importDefault(require('dumi/theme/slots/SearchBar'));
var react_1 = __importStar(require('react'));
require('./index.less');
var Header = function () {
  var frontmatter = (0, dumi_1.useRouteMeta)().frontmatter;
  var _a = (0, react_1.useState)(false),
    showMenu = _a[0],
    setShowMenu = _a[1];
  return react_1['default'].createElement(
    'div',
    {
      className: 'dumi-vite-header',
      'data-static': Boolean(frontmatter.hero) || undefined,
      'data-mobile-active': showMenu || undefined,
      onClick: function () {
        return setShowMenu(false);
      },
    },
    react_1['default'].createElement(
      'div',
      { className: 'dumi-vite-header-content' },
      react_1['default'].createElement(
        'section',
        { className: 'dumi-vite-header-left' },
        react_1['default'].createElement(Logo_1['default'], null),
      ),
      react_1['default'].createElement(
        'section',
        { className: 'dumi-vite-header-right' },
        react_1['default'].createElement(Navbar_1['default'], null),
        react_1['default'].createElement(
          'div',
          { className: 'dumi-vite-header-right-aside' },
          react_1['default'].createElement(SearchBar_1['default'], null),
          react_1['default'].createElement(LangSwitch_1['default'], null),
          react_1['default'].createElement(RtlSwitch_1['default'], null),
        ),
      ),
      react_1['default'].createElement(
        'button',
        {
          type: 'button',
          className: 'dumi-vite-header-menu-btn',
          onClick: function (ev) {
            ev.stopPropagation();
            setShowMenu(function (v) {
              return !v;
            });
          },
        },
        showMenu
          ? react_1['default'].createElement(close_svg_1.ReactComponent, null)
          : react_1['default'].createElement(menu_svg_1.ReactComponent, null),
      ),
    ),
  );
};
exports['default'] = Header;
