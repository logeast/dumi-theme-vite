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
var Scrollspy_1 = require('@makotot/ghostui/src/Scrollspy');
var dumi_1 = require('dumi');
var react_1 = __importStar(require('react'));
require('./index.less');
var Toc = function () {
  var pathname = (0, dumi_1.useLocation)().pathname;
  var meta = (0, dumi_1.useRouteMeta)();
  var loading = (0, dumi_1.useSiteData)().loading;
  var prevIndexRef = (0, react_1.useRef)(0);
  var _a = (0, react_1.useState)([]),
    sectionRefs = _a[0],
    setSectionRefs = _a[1];
  // only render h2 ~ h4
  var toc = meta.toc.filter(function (_a) {
    var depth = _a.depth;
    return depth > 1 && depth < 4;
  });
  (0, react_1.useEffect)(
    function () {
      // wait for page component ready (DOM ready)
      if (!loading) {
        // find all valid headings as ref elements
        var refs = toc.map(function (_a) {
          var id = _a.id;
          return {
            current: document.getElementById(id),
          };
        });
        setSectionRefs(refs);
      }
    },
    [pathname, loading],
  );
  return sectionRefs.length
    ? react_1['default'].createElement(
        Scrollspy_1.Scrollspy,
        { sectionRefs: sectionRefs },
        function (_a) {
          var currentElementIndexInViewport = _a.currentElementIndexInViewport;
          // for keep prev item active when no item in viewport
          if (currentElementIndexInViewport > -1)
            prevIndexRef.current = currentElementIndexInViewport;
          return react_1['default'].createElement(
            'ul',
            { className: 'dumi-vite-toc' },
            toc
              .filter(function (_a) {
                var depth = _a.depth;
                return depth > 1 && depth < 4;
              })
              .map(function (item, i) {
                var link = '#'.concat(encodeURIComponent(item.id));
                var activeIndex =
                  currentElementIndexInViewport > -1
                    ? currentElementIndexInViewport
                    : prevIndexRef.current;
                return react_1['default'].createElement(
                  'li',
                  { key: item.id, 'data-depth': item.depth },
                  react_1['default'].createElement(
                    'a',
                    __assign(
                      { href: link, title: item.title },
                      activeIndex === i ? { className: 'active' } : {},
                    ),
                    item.title,
                  ),
                );
              }),
          );
        },
      )
    : null;
};
exports['default'] = Toc;
