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
var inbox_svg_1 = require('@ant-design/icons-svg/inline-svg/outlined/inbox.svg');
var dumi_1 = require('dumi');
var react_1 = __importStar(require('react'));
require('./index.less');
var IconTitle = function () {
  return react_1['default'].createElement(
    'svg',
    { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
    react_1['default'].createElement('path', {
      d: 'M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z',
    }),
    react_1['default'].createElement('path', {
      d: 'M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z',
    }),
    react_1['default'].createElement('path', {
      d: 'M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z',
    }),
  );
};
var IconPage = function () {
  return react_1['default'].createElement(
    'svg',
    { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
    react_1['default'].createElement('path', {
      d: 'M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z',
    }),
  );
};
var IconContent = function () {
  return react_1['default'].createElement(
    'svg',
    { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
    react_1['default'].createElement('path', {
      d: 'M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z',
    }),
  );
};
var IconDemo = function () {
  return react_1['default'].createElement(
    'svg',
    { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
    react_1['default'].createElement('path', {
      d: 'M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z',
    }),
  );
};
var ICONS_MAPPING = {
  title: IconTitle,
  page: IconPage,
  content: IconContent,
  demo: IconDemo,
};
var Highlight = function (props) {
  return react_1['default'].createElement(
    react_1['default'].Fragment,
    null,
    props.texts.map(function (text, idx) {
      return react_1['default'].createElement(
        react_1.Fragment,
        { key: idx },
        text.highlighted
          ? react_1['default'].createElement('mark', null, text.text)
          : text.text,
      );
    }),
  );
};
var useFlatSearchData = function (data) {
  var update = (0, react_1.useCallback)(
    function () {
      var activeIndex = 0;
      var ret = [];
      data.forEach(function (item) {
        if (item.title) {
          ret.push({
            type: 'title',
            value: {
              title: item.title,
            },
          });
        }
        item.hints.forEach(function (hint) {
          ret.push({
            type: 'hint',
            activeIndex: activeIndex++,
            value: hint,
          });
        });
      });
      return [ret, activeIndex];
    },
    [data],
  );
  var _a = (0, react_1.useState)(update),
    flatData = _a[0],
    setFlatData = _a[1];
  (0, react_1.useEffect)(
    function () {
      setFlatData(update);
    },
    [data],
  );
  return flatData;
};
var SearchResult = function (props) {
  var _a = useFlatSearchData(props.data),
    data = _a[0],
    histsCount = _a[1];
  var _b = (0, react_1.useState)(-1),
    activeIndex = _b[0],
    setActiveIndex = _b[1];
  (0, react_1.useEffect)(function () {
    var handler = function (ev) {
      // TODO: scroll into view for invisible items
      if (ev.key === 'ArrowDown') {
        setActiveIndex((activeIndex + 1) % histsCount);
      } else if (ev.key === 'ArrowUp') {
        setActiveIndex((activeIndex + histsCount - 1) % histsCount);
      } else if (ev.key === 'Enter' && activeIndex >= 0) {
        var item = data.find(function (item) {
          return item.type === 'hint' && item.activeIndex === activeIndex;
        }).value;
        dumi_1.history.push(item.link);
        document.activeElement.blur();
      }
      if (['Escape', 'Enter'].includes(ev.key)) {
        setActiveIndex(-1);
      }
    };
    document.addEventListener('keydown', handler);
    return function () {
      return document.removeEventListener('keydown', handler);
    };
  });
  return react_1['default'].createElement(
    'div',
    {
      className: 'dumi-vite-search-result',
      onMouseEnter: function () {
        return setActiveIndex(-1);
      },
      // for ux, only hide result when mouse up
      onMouseDownCapture: function (ev) {
        return ev.preventDefault();
      },
      onMouseUpCapture: function () {
        document.activeElement.blur();
      },
    },
    Boolean(props.data.length || props.loading)
      ? react_1['default'].createElement(
          'dl',
          null,
          data.map(function (item, i) {
            return item.type === 'title'
              ? react_1['default'].createElement(
                  'dt',
                  { key: String(i) },
                  item.value.title,
                )
              : react_1['default'].createElement(
                  'dd',
                  { key: String(i) },
                  react_1['default'].createElement(
                    dumi_1.Link,
                    {
                      to: item.value.link,
                      'data-active':
                        activeIndex === item.activeIndex || undefined,
                    },
                    react_1['default'].createElement(
                      ICONS_MAPPING[item.value.type],
                    ),
                    react_1['default'].createElement(
                      'h4',
                      null,
                      react_1['default'].createElement(Highlight, {
                        texts: item.value.highlightTitleTexts,
                      }),
                    ),
                    react_1['default'].createElement(
                      'p',
                      null,
                      react_1['default'].createElement(Highlight, {
                        texts: item.value.highlightTexts,
                      }),
                    ),
                  ),
                );
          }),
        )
      : react_1['default'].createElement(
          'div',
          { className: 'dumi-vite-search-empty' },
          react_1['default'].createElement(inbox_svg_1.ReactComponent, null),
          react_1['default'].createElement(dumi_1.FormattedMessage, {
            id: 'search.not.found',
          }),
        ),
  );
};
exports['default'] = SearchResult;
