'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
var dumi_1 = require('dumi');
var react_1 = __importDefault(require('react'));
var Table_1 = __importDefault(require('../Table'));
var API = function (_a) {
  var _b;
  var id = _a.id;
  var components = (0, dumi_1.useAtomAssets)().components;
  var definition =
    components === null || components === void 0 ? void 0 : components[id];
  var intl = (0, dumi_1.useIntl)();
  return react_1['default'].createElement(
    'div',
    { className: 'markdown' },
    react_1['default'].createElement(
      Table_1['default'],
      null,
      react_1['default'].createElement(
        'thead',
        null,
        react_1['default'].createElement(
          'tr',
          null,
          react_1['default'].createElement(
            'th',
            null,
            intl.formatMessage({ id: 'api.component.name' }),
          ),
          react_1['default'].createElement(
            'th',
            null,
            intl.formatMessage({ id: 'api.component.description' }),
          ),
          react_1['default'].createElement(
            'th',
            null,
            intl.formatMessage({ id: 'api.component.type' }),
          ),
          react_1['default'].createElement(
            'th',
            null,
            intl.formatMessage({ id: 'api.component.default' }),
          ),
        ),
      ),
      react_1['default'].createElement(
        'tbody',
        null,
        definition &&
          ((_b = definition.propsConfig) === null || _b === void 0
            ? void 0
            : _b.properties)
          ? Object.entries(definition.propsConfig.properties).map(function (
              _a,
            ) {
              var _b;
              var name = _a[0],
                prop = _a[1];
              return react_1['default'].createElement(
                'tr',
                { key: name },
                react_1['default'].createElement('td', null, name),
                react_1['default'].createElement(
                  'td',
                  null,
                  prop.description || '--',
                ),
                react_1['default'].createElement(
                  'td',
                  null,
                  react_1['default'].createElement('code', null, prop.type),
                ),
                react_1['default'].createElement(
                  'td',
                  null,
                  react_1['default'].createElement(
                    'code',
                    null,
                    (
                      (_b = definition.propsConfig.required) === null ||
                      _b === void 0
                        ? void 0
                        : _b.includes(name)
                    )
                      ? intl.formatMessage({ id: 'api.component.required' })
                      : prop['default'] || '--',
                  ),
                ),
              );
            })
          : react_1['default'].createElement(
              'tr',
              null,
              react_1['default'].createElement(
                'td',
                { colSpan: 4 },
                intl.formatMessage(
                  {
                    id: 'api.component.'.concat(
                      components ? 'not.found' : 'loading',
                    ),
                  },
                  { id: id },
                ),
              ),
            ),
      ),
    ),
  );
};
exports['default'] = API;
