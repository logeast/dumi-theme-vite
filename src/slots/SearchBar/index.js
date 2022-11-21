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
var search_svg_1 = require('@ant-design/icons-svg/inline-svg/outlined/search.svg');
var dumi_1 = require('dumi');
var react_1 = __importStar(require('react'));
var SearchResult_1 = __importDefault(require('../SearchResult'));
require('./index.less');
var isAppleDevice = /(mac|iphone|ipod|ipad)/i.test(
  typeof navigator !== 'undefined'
    ? navigator === null || navigator === void 0
      ? void 0
      : navigator.platform
    : '',
);
var SearchBar = function () {
  var intl = (0, dumi_1.useIntl)();
  var imeWaiting = (0, react_1.useRef)(false);
  var _a = (0, react_1.useState)(false),
    focusing = _a[0],
    setFocusing = _a[1];
  var input = (0, react_1.useRef)(null);
  var _b = (0, react_1.useState)('⌘'),
    symbol = _b[0],
    setSymbol = _b[1];
  var _c = (0, dumi_1.useSiteSearch)(),
    keywords = _c.keywords,
    setKeywords = _c.setKeywords,
    result = _c.result,
    loading = _c.loading;
  (0, react_1.useEffect)(function () {
    // why put useEffect?
    // to avoid Text content mismatch between server & client in ssr
    if (!isAppleDevice) {
      setSymbol('Ctrl');
    }
    var handler = function (ev) {
      var _a;
      if ((isAppleDevice ? ev.metaKey : ev.ctrlKey) && ev.key === 'k') {
        (_a = input.current) === null || _a === void 0 ? void 0 : _a.focus();
        ev.preventDefault();
      }
    };
    document.addEventListener('keydown', handler);
    return function () {
      return document.removeEventListener('keydown', handler);
    };
  }, []);
  return react_1['default'].createElement(
    'div',
    { className: 'dumi-vite-search-bar' },
    react_1['default'].createElement(search_svg_1.ReactComponent, null),
    react_1['default'].createElement('input', {
      onCompositionStart: function () {
        return (imeWaiting.current = true);
      },
      onCompositionEnd: function (ev) {
        imeWaiting.current = false;
        // special case: press Enter open IME panel will not trigger onChange
        setKeywords(ev.currentTarget.value);
      },
      onFocus: function () {
        return setFocusing(true);
      },
      onBlur: function () {
        // wait for item click
        setTimeout(function () {
          setFocusing(false);
        }, 1);
      },
      onKeyDown: function (ev) {
        if (['ArrowDown', 'ArrowUp'].includes(ev.key)) ev.preventDefault();
        // esc to blur input
        if (ev.key === 'Escape' && !imeWaiting.current) ev.currentTarget.blur();
      },
      onChange: function (ev) {
        // wait for onCompositionEnd event be triggered
        setTimeout(function () {
          if (!imeWaiting.current) {
            setKeywords(ev.target.value);
          }
        }, 1);
      },
      placeholder: intl.formatMessage({ id: 'header.search.placeholder' }),
      ref: input,
    }),
    react_1['default'].createElement(
      'span',
      { className: 'dumi-vite-search-shortcut' },
      symbol,
      ' K',
    ),
    keywords.trim() &&
      focusing &&
      (result.length || !loading) &&
      react_1['default'].createElement(
        'div',
        { className: 'dumi-vite-search-popover' },
        react_1['default'].createElement(
          'section',
          null,
          react_1['default'].createElement(SearchResult_1['default'], {
            data: result,
            loading: loading,
          }),
        ),
      ),
  );
};
exports['default'] = SearchBar;
