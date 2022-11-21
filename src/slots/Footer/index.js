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
var Footer = function () {
  var themeConfig = (0, dumi_1.useSiteData)().themeConfig;
  if (!themeConfig.footer) return null;
  return react_1['default'].createElement('div', {
    className: 'dumi-vite-footer',
    dangerouslySetInnerHTML: { __html: themeConfig.footer },
  });
};
exports['default'] = Footer;
