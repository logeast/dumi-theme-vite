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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var code_sandbox_svg_1 = require('@ant-design/icons-svg/inline-svg/outlined/code-sandbox.svg');
// import { ReactComponent as IconCodePen } from '@ant-design/icons-svg/inline-svg/outlined/codepen.svg';
var thunderbolt_svg_1 = require('@ant-design/icons-svg/inline-svg/outlined/thunderbolt.svg');
var dumi_1 = require('dumi');
var SourceCode_1 = __importDefault(require('dumi/theme/builtins/SourceCode'));
var PreviewerActionsExtra_1 = __importDefault(
  require('dumi/theme/slots/PreviewerActionsExtra'),
);
var rc_tabs_1 = __importDefault(require('rc-tabs'));
var react_1 = __importStar(require('react'));
require('./index.less');
var IconCode = function () {
  return react_1['default'].createElement(
    'svg',
    { viewBox: '0 0 200 117' },
    react_1['default'].createElement('path', {
      d: 'M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Zm-75.938-45c-4.062-1.563-9.062.937-10.937 5l-34.063 95c-1.562 4.062.938 9.062 5 10.937.938 0 1.563.938 2.5.938 3.438 0 6.563-2.5 7.5-5.938l35-95.937c1.563-4.063-.937-9.063-5-10Z',
    }),
  );
};
var IconCodeExpand = function () {
  return react_1['default'].createElement(
    'svg',
    { viewBox: '0 0 200 117' },
    react_1['default'].createElement('path', {
      d: 'M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Z',
    }),
  );
};
var IconExternalLink = function () {
  return react_1['default'].createElement(
    'svg',
    { viewBox: '0 0 1024 1024' },
    react_1['default'].createElement('path', {
      d: 'M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z',
    }),
    react_1['default'].createElement('path', {
      d: 'M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z',
    }),
  );
};
var PreviewerActions = function (props) {
  var _a, _b, _c, _d;
  var intl = (0, dumi_1.useIntl)();
  var files = Object.entries(props.asset.dependencies).filter(function (_a) {
    var type = _a[1].type;
    return type === 'FILE';
  });
  var hd = (0, dumi_1.useSiteData)().themeConfig.hd;
  var isH5 = !!hd;
  var _e = (0, react_1.useState)(0),
    activeKey = _e[0],
    setActiveKey = _e[1];
  var _f = (0, react_1.useState)(isH5),
    showCode = _f[0],
    setShowCode = _f[1];
  var isSingleFile = files.length === 1;
  var lang =
    ((_a = files[activeKey][0].match(/\.([^.]+)$/)) === null || _a === void 0
      ? void 0
      : _a[1]) || 'text';
  return react_1['default'].createElement(
    react_1['default'].Fragment,
    null,
    react_1['default'].createElement(
      'div',
      { className: 'dumi-vite-previewer-actions' },
      !((_b = props.disabledActions) === null || _b === void 0
        ? void 0
        : _b.includes('CSB')) &&
        react_1['default'].createElement(
          'button',
          {
            className: 'dumi-vite-previewer-action-btn',
            type: 'button',
            'data-dumi-tooltip': intl.formatMessage({
              id: 'previewer.actions.codesandbox',
            }),
            onClick: function () {
              return (0, dumi_1.openCodeSandbox)(props);
            },
          },
          react_1['default'].createElement(
            code_sandbox_svg_1.ReactComponent,
            null,
          ),
        ),
      !((_c = props.disabledActions) === null || _c === void 0
        ? void 0
        : _c.includes('STACKBLITZ')) &&
        react_1['default'].createElement(
          'button',
          {
            className: 'dumi-vite-previewer-action-btn',
            type: 'button',
            'data-dumi-tooltip': intl.formatMessage({
              id: 'previewer.actions.stackblitz',
            }),
            onClick: function () {
              return (0, dumi_1.openStackBlitz)(props);
            },
          },
          react_1['default'].createElement(
            thunderbolt_svg_1.ReactComponent,
            null,
          ),
        ),
      !((_d = props.disabledActions) === null || _d === void 0
        ? void 0
        : _d.includes('EXTERNAL')) &&
        react_1['default'].createElement(
          'a',
          {
            target: '_blank',
            rel: 'noreferrer',
            href: props.demoUrl,
            className: 'dumi-vite-previewer-action-btn',
            'data-dumi-tooltip': intl.formatMessage({
              id: 'previewer.actions.separate',
            }),
          },
          react_1['default'].createElement(IconExternalLink, null),
        ),
      react_1['default'].createElement(
        PreviewerActionsExtra_1['default'],
        __assign({}, props),
      ),
      !isH5 &&
        react_1['default'].createElement(
          'button',
          {
            className: 'dumi-vite-previewer-action-btn',
            type: 'button',
            onClick: function () {
              return setShowCode(function (prev) {
                return !prev;
              });
            },
            'data-dumi-tooltip': intl.formatMessage({
              id: 'previewer.actions.code.'.concat(
                showCode ? 'shrink' : 'expand',
              ),
            }),
          },
          showCode
            ? react_1['default'].createElement(IconCodeExpand, null)
            : react_1['default'].createElement(IconCode, null),
        ),
    ),
    showCode &&
      react_1['default'].createElement(
        react_1['default'].Fragment,
        null,
        react_1['default'].createElement(
          'div',
          { className: 'dumi-vite-previewer-sources' },
          !isSingleFile &&
            react_1['default'].createElement(rc_tabs_1['default'], {
              className: 'dumi-vite-previewer-tabs',
              prefixCls: 'dumi-vite-tabs',
              moreIcon: '\u00B7\u00B7\u00B7',
              defaultActiveKey: String(activeKey),
              onChange: function (key) {
                return setActiveKey(Number(key));
              },
              items: files.map(function (_a, i) {
                var filename = _a[0];
                return {
                  key: String(i),
                  label: filename,
                };
              }),
            }),
        ),
        react_1['default'].createElement(
          SourceCode_1['default'],
          { lang: lang },
          files[activeKey][1].value,
        ),
      ),
  );
};
exports['default'] = PreviewerActions;
