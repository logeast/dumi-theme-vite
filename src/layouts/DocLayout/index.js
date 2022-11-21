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
var align_left_svg_1 = require('@ant-design/icons-svg/inline-svg/outlined/align-left.svg');
var dumi_1 = require('dumi');
var Content_1 = __importDefault(require('slots/Content'));
var Features_1 = __importDefault(require('dumi/theme/slots/Features'));
var Footer_1 = __importDefault(require('dumi/theme/slots/Footer'));
var Header_1 = __importDefault(require('dumi/theme/slots/Header'));
var Hero_1 = __importDefault(require('dumi/theme/slots/Hero'));
var Sidebar_1 = __importDefault(require('dumi/theme/slots/Sidebar'));
var Toc_1 = __importDefault(require('dumi/theme/slots/Toc'));
var react_1 = __importStar(require('react'));
require('./index.less');
var DocLayout = function () {
  var intl = (0, dumi_1.useIntl)();
  var outlet = (0, dumi_1.useOutlet)();
  var sidebar = (0, dumi_1.useSidebarData)();
  var _a = (0, react_1.useState)(false),
    showSidebar = _a[0],
    setShowSidebar = _a[1];
  var fm = (0, dumi_1.useRouteMeta)().frontmatter;
  return react_1['default'].createElement(
    'div',
    {
      className: 'dumi-vite-doc-layout',
      'data-mobile-sidebar-active': showSidebar || undefined,
      onClick: function () {
        return setShowSidebar(false);
      },
    },
    react_1['default'].createElement(
      dumi_1.Helmet,
      null,
      react_1['default'].createElement('html', {
        lang: intl.locale.replace(/-.+$/, ''),
      }),
      fm.title && react_1['default'].createElement('title', null, fm.title),
      fm.title &&
        react_1['default'].createElement('meta', {
          property: 'og:title',
          content: fm.title,
        }),
      fm.description &&
        react_1['default'].createElement('meta', {
          name: 'description',
          content: fm.description,
        }),
      fm.description &&
        react_1['default'].createElement('meta', {
          property: 'og:description',
          content: fm.description,
        }),
      fm.keywords &&
        react_1['default'].createElement('meta', {
          name: 'keywords',
          content: fm.keywords.join(','),
        }),
      fm.keywords &&
        react_1['default'].createElement('meta', {
          property: 'og:keywords',
          content: fm.keywords.join(','),
        }),
    ),
    react_1['default'].createElement(Header_1['default'], null),
    react_1['default'].createElement(Hero_1['default'], null),
    react_1['default'].createElement(Features_1['default'], null),
    sidebar &&
      react_1['default'].createElement(
        'div',
        { className: 'dumi-vite-doc-layout-mobile-bar' },
        react_1['default'].createElement(
          'button',
          {
            type: 'button',
            className: 'dumi-vite-sidebar-btn',
            onClick: function (ev) {
              ev.stopPropagation();
              setShowSidebar(function (v) {
                return !v;
              });
            },
          },
          react_1['default'].createElement(
            align_left_svg_1.ReactComponent,
            null,
          ),
          intl.formatMessage({ id: 'layout.sidebar.btn' }),
        ),
      ),
    react_1['default'].createElement(
      'main',
      null,
      react_1['default'].createElement(Sidebar_1['default'], null),
      react_1['default'].createElement(
        Content_1['default'],
        null,
        outlet,
        react_1['default'].createElement(Footer_1['default'], null),
      ),
      fm.toc === 'content' &&
        react_1['default'].createElement(
          'div',
          { className: 'dumi-vite-doc-layout-toc-wrapper' },
          react_1['default'].createElement('h4', null, 'TABLE OF CONTENTS'),
          react_1['default'].createElement(Toc_1['default'], null),
        ),
    ),
  );
};
exports['default'] = DocLayout;
