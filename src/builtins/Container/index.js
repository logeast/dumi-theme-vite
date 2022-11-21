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
var check_circle_svg_1 = require('@ant-design/icons-svg/inline-svg/outlined/check-circle.svg');
var close_circle_svg_1 = require('@ant-design/icons-svg/inline-svg/outlined/close-circle.svg');
var info_circle_svg_1 = require('@ant-design/icons-svg/inline-svg/outlined/info-circle.svg');
var warning_svg_1 = require('@ant-design/icons-svg/inline-svg/outlined/warning.svg');
var react_1 = __importStar(require('react'));
require('./index.less');
var ICONS = {
  info: info_circle_svg_1.ReactComponent,
  warning: warning_svg_1.ReactComponent,
  success: check_circle_svg_1.ReactComponent,
  error: close_circle_svg_1.ReactComponent,
};
var Container = function (props) {
  var Icon = (0, react_1.useState)(function () {
    return ICONS[props.type];
  })[0];
  return react_1['default'].createElement(
    'div',
    { className: 'dumi-vite-container markdown', 'data-type': props.type },
    react_1['default'].createElement(Icon, null),
    react_1['default'].createElement(
      'h4',
      null,
      props.title || props.type.toUpperCase(),
    ),
    react_1['default'].createElement('section', null, props.children),
  );
};
exports['default'] = Container;
