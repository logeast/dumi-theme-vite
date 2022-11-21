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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var dumi_1 = require('dumi');
var Device_1 = __importDefault(require('dumi/theme/slots/Device'));
var PreviewerActions_1 = __importDefault(
  require('dumi/theme/slots/PreviewerActions'),
);
var react_1 = __importDefault(require('react'));
require('./index.less');
var Previewer = function (props) {
  var hash = (0, dumi_1.useLocation)().hash;
  var link = '#'.concat(props.asset.id);
  var hd = (0, dumi_1.useSiteData)().themeConfig.hd;
  var isH5 = !!hd;
  return react_1['default'].createElement(
    'div',
    {
      id: props.asset.id,
      className: 'dumi-vite-previewer',
      'data-debug': props.debug,
      'data-active': hash === link || undefined,
      'data-h5': isH5,
    },
    !isH5 &&
      react_1['default'].createElement(
        'div',
        {
          className: 'dumi-vite-previewer-demo',
          style: { background: props.background },
          'data-compact': props.compact || undefined,
          'data-transform': props.transform || undefined,
          'data-iframe': props.iframe || undefined,
        },
        props.iframe
          ? react_1['default'].createElement('iframe', {
              style: ['string', 'number'].includes(typeof props.iframe)
                ? { height: Number(props.iframe) }
                : {},
              src: props.demoUrl,
            })
          : props.children,
      ),
    react_1['default'].createElement(
      'div',
      { className: 'dumi-vite-previewer-meta', 'data-h5': isH5 },
      (props.title || props.debug) &&
        react_1['default'].createElement(
          'div',
          { className: 'dumi-vite-previewer-desc' },
          react_1['default'].createElement(
            'h5',
            null,
            react_1['default'].createElement(
              'a',
              { href: link },
              props.debug &&
                react_1['default'].createElement('strong', null, 'DEV ONLY'),
              props.title,
            ),
          ),
          props.description &&
            react_1['default'].createElement('div', {
              className: 'markdown',
              dangerouslySetInnerHTML: { __html: props.description },
            }),
        ),
      !isH5 &&
        react_1['default'].createElement(
          PreviewerActions_1['default'],
          __assign({}, props),
        ),
      isH5 &&
        react_1['default'].createElement(
          'div',
          { className: 'dumi-vite-previewer-flex' },
          react_1['default'].createElement(
            'div',
            { className: 'dumi-vite-previewer-flex-actions' },
            react_1['default'].createElement(
              PreviewerActions_1['default'],
              __assign({}, props),
            ),
          ),
          react_1['default'].createElement(Device_1['default'], {
            url: props.demoUrl,
          }),
        ),
    ),
  );
};
exports['default'] = Previewer;
