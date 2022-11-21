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
exports.__esModule = true;
var down_svg_1 = require('@ant-design/icons-svg/inline-svg/outlined/down.svg');
var dumi_1 = require('dumi');
var react_1 = __importStar(require('react'));
require('./index.less');
function getTargetLocalePath(_a) {
  var pathname = _a.pathname,
    current = _a.current,
    target = _a.target;
  var clearPath =
    'base' in current
      ? pathname.replace(current.base.replace(/\/$/, ''), '')
      : pathname.replace(new RegExp(''.concat(current.suffix, '$')), '');
  return 'base' in target
    ? ''.concat(target.base).concat(clearPath).replace(/^\/\//, '/')
    : ''.concat(clearPath).concat(target.suffix);
}
var SingleSwitch = function (_a) {
  var locale = _a.locale,
    current = _a.current;
  var pathname = (0, dumi_1.useLocation)().pathname;
  var _b = (0, react_1.useState)(function () {
      return getTargetLocalePath({
        pathname: pathname,
        current: current,
        target: locale,
      });
    }),
    path = _b[0],
    setPath = _b[1];
  (0, react_1.useEffect)(
    function () {
      setPath(
        getTargetLocalePath({
          pathname: pathname,
          current: current,
          target: locale,
        }),
      );
    },
    [pathname, current.id, locale.id],
  );
  return react_1['default'].createElement(
    dumi_1.Link,
    { className: 'dumi-vite-lang-switch', to: path },
    locale.name,
  );
};
var LangSwitch = function () {
  var locales = (0, dumi_1.useSiteData)().locales;
  var locale = (0, dumi_1.useIntl)().locale;
  var current = (0, dumi_1.useLocale)();
  // do not render in single language
  if (locales.length <= 1) return null;
  return locales.length > 2
    ? react_1['default'].createElement(
        'div',
        { className: 'dumi-vite-lang-select' },
        react_1['default'].createElement(
          'select',
          {
            defaultValue: locale,
            onChange: function (ev) {
              dumi_1.history.push(
                getTargetLocalePath({
                  pathname: dumi_1.history.location.pathname,
                  current: current,
                  target: locales.find(function (_a) {
                    var id = _a.id;
                    return id === ev.target.value;
                  }),
                }),
              );
            },
          },
          locales.map(function (item) {
            return react_1['default'].createElement(
              'option',
              { key: item.id, value: item.id },
              item.name,
            );
          }),
        ),
        react_1['default'].createElement(down_svg_1.ReactComponent, null),
      )
    : // single language switch
      react_1['default'].createElement(SingleSwitch, {
        locale: locales.find(function (_a) {
          var id = _a.id;
          return id !== locale;
        }),
        current: current,
      });
};
exports['default'] = LangSwitch;
