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
var dumi_1 = require('dumi');
var react_1 = __importStar(require('react'));
require('./index.less');
var LS_RTL_KEY = 'dumi:rtl';
var RtlSwitch = function () {
  var _a = (0, react_1.useState)(false),
    rtl = _a[0],
    setRtl = _a[1];
  var themeConfig = (0, dumi_1.useSiteData)().themeConfig;
  (0, react_1.useEffect)(function () {
    if (localStorage.getItem(LS_RTL_KEY)) {
      setRtl(true);
      document.documentElement.setAttribute('data-direction', 'rtl');
    }
  }, []);
  if (!themeConfig.rtl) return null;
  return react_1['default'].createElement(
    'span',
    {
      className: 'dumi-vite-lang-switch',
      onClick: function () {
        if (rtl) {
          document.documentElement.removeAttribute('data-direction');
          localStorage.removeItem(LS_RTL_KEY);
        } else {
          document.documentElement.setAttribute('data-direction', 'rtl');
          localStorage.setItem(LS_RTL_KEY, '1');
        }
        setRtl(!rtl);
      },
    },
    rtl ? 'LTR' : 'RTL',
  );
};
exports['default'] = RtlSwitch;
