'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var dumi_1 = require('dumi');
var react_1 = __importDefault(require('react'));
require('./index.less');
var ContentTabs = function (_a) {
  var tabs = _a.tabs,
    key = _a.tabKey,
    onChange = _a.onChange;
  var intl = (0, dumi_1.useIntl)();
  // TODO: tab.Extra & tab.Action render
  return Boolean(tabs === null || tabs === void 0 ? void 0 : tabs.length)
    ? react_1['default'].createElement(
        'ul',
        { className: 'dumi-vite-content-tabs' },
        react_1['default'].createElement(
          'li',
          {
            onClick: function () {
              return onChange();
            },
            'data-active': !key || undefined,
          },
          react_1['default'].createElement(
            'button',
            { type: 'button' },
            intl.formatMessage({ id: 'content.tabs.default' }),
          ),
        ),
        tabs.map(function (tab) {
          return react_1['default'].createElement(
            'li',
            {
              key: tab.key,
              onClick: function () {
                return onChange(tab);
              },
              'data-active': key === tab.key || undefined,
            },
            react_1['default'].createElement(
              'button',
              { type: 'button' },
              tab.meta.frontmatter.title,
            ),
          );
        }),
      )
    : null;
};
exports['default'] = ContentTabs;
