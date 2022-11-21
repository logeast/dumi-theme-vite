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
exports.__esModule = true;
var check_svg_1 = require('@ant-design/icons-svg/inline-svg/outlined/check.svg');
var copy_svg_1 = require('@ant-design/icons-svg/inline-svg/outlined/copy.svg');
var prism_react_renderer_1 = __importStar(require('prism-react-renderer'));
require('prismjs/themes/prism-coy.css');
var react_1 = __importStar(require('react'));
var react_copy_to_clipboard_1 = require('react-copy-to-clipboard');
require('./index.less');
/**
 * define DSL which can be highlighted as similar language
 */
var SIMILAR_DSL = {
  acss: 'css',
  axml: 'markup',
};
var SourceCode = function (_a) {
  var children = _a.children,
    lang = _a.lang;
  var timer = (0, react_1.useRef)();
  var _b = (0, react_1.useState)(false),
    isCopied = _b[0],
    setIsCopied = _b[1];
  return react_1['default'].createElement(
    'div',
    { className: 'dumi-vite-source-code' },
    react_1['default'].createElement(
      react_copy_to_clipboard_1.CopyToClipboard,
      {
        text: children,
        onCopy: function () {
          setIsCopied(true);
          clearTimeout(timer.current);
          timer.current = window.setTimeout(function () {
            return setIsCopied(false);
          }, 2000);
        },
      },
      react_1['default'].createElement(
        'button',
        {
          type: 'button',
          className: 'dumi-vite-source-code-copy',
          'data-copied': isCopied || undefined,
        },
        isCopied
          ? react_1['default'].createElement(check_svg_1.ReactComponent, null)
          : react_1['default'].createElement(copy_svg_1.ReactComponent, null),
      ),
    ),
    react_1['default'].createElement(
      prism_react_renderer_1['default'],
      __assign({}, prism_react_renderer_1.defaultProps, {
        code: children.trim(),
        language: SIMILAR_DSL[lang] || lang,
        theme: undefined,
      }),
      function (_a) {
        var className = _a.className,
          style = _a.style,
          tokens = _a.tokens,
          getLineProps = _a.getLineProps,
          getTokenProps = _a.getTokenProps;
        return react_1['default'].createElement(
          'pre',
          { className: className, style: style },
          tokens.map(function (line, i) {
            return react_1['default'].createElement(
              'div',
              __assign(
                { key: String(i) },
                getLineProps({ line: line, key: i }),
              ),
              line.map(function (token, key) {
                return react_1['default'].createElement(
                  'span',
                  __assign(
                    { key: String(i) },
                    getTokenProps({ token: token, key: key }),
                  ),
                );
              }),
            );
          }),
        );
      },
    ),
  );
};
exports['default'] = SourceCode;
