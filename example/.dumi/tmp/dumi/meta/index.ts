// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { demos as dm0, frontmatter as fm0, toc as toc0, texts as txt0 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/guide/conventional-routing.md?type=meta';
import { demos as dm1, frontmatter as fm1, toc as toc1, texts as txt1 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/guide/project-structure.md?type=meta';
import { demos as dm2, frontmatter as fm2, toc as toc2, texts as txt2 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/guide/page-config.md?type=meta';
import { demos as dm3, frontmatter as fm3, toc as toc3, texts as txt3 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/guide/initialize.md?type=meta';
import { demos as dm4, frontmatter as fm4, toc as toc4, texts as txt4 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/guide/write-demo.md?type=meta';
import { demos as dm5, frontmatter as fm5, toc as toc5, texts as txt5 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/config/markdown.md?type=meta';
import { demos as dm6, frontmatter as fm6, toc as toc6, texts as txt6 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/guide/upgrading.md?type=meta';
import { demos as dm7, frontmatter as fm7, toc as toc7, texts as txt7 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/guide/markdown.md?type=meta';
import { demos as dm8, frontmatter as fm8, toc as toc8, texts as txt8 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/guide/page-tab.md?type=meta';
import { demos as dm9, frontmatter as fm9, toc as toc9, texts as txt9 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/theme/default.md?type=meta';
import { demos as dm10, frontmatter as fm10, toc as toc10, texts as txt10 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/config/index.md?type=meta';
import { demos as dm11, frontmatter as fm11, toc as toc11, texts as txt11 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/config/demo.md?type=meta';
import { demos as dm12, frontmatter as fm12, toc as toc12, texts as txt12 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/guide/index.md?type=meta';
import { demos as dm13, frontmatter as fm13, toc as toc13, texts as txt13 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/theme/index.md?type=meta';
import { demos as dm14, frontmatter as fm14, toc as toc14, texts as txt14 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/guide/i18n.md?type=meta';
import { demos as dm15, frontmatter as fm15, toc as toc15, texts as txt15 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/guide/faq.md?type=meta';
import { demos as dm16, frontmatter as fm16, toc as toc16, texts as txt16 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/theme/api.md?type=meta';
import { demos as dm17, frontmatter as fm17, toc as toc17, texts as txt17 } from '/Users/logeast/Documents/dumi-theme-vite/example/docs/index.md?type=meta';

export { components } from './atoms';
export { tabs } from './tabs';

export const filesMeta = {
  'docs/guide/conventional-routing': {
    frontmatter: fm0,
    toc: toc0,
    texts: txt0,
    demos: dm0,
  },
  'docs/guide/project-structure': {
    frontmatter: fm1,
    toc: toc1,
    texts: txt1,
    demos: dm1,
  },
  'docs/guide/page-config': {
    frontmatter: fm2,
    toc: toc2,
    texts: txt2,
    demos: dm2,
  },
  'docs/guide/initialize': {
    frontmatter: fm3,
    toc: toc3,
    texts: txt3,
    demos: dm3,
  },
  'docs/guide/write-demo': {
    frontmatter: fm4,
    toc: toc4,
    texts: txt4,
    demos: dm4,
  },
  'docs/config/markdown': {
    frontmatter: fm5,
    toc: toc5,
    texts: txt5,
    demos: dm5,
  },
  'docs/guide/upgrading': {
    frontmatter: fm6,
    toc: toc6,
    texts: txt6,
    demos: dm6,
  },
  'docs/guide/markdown': {
    frontmatter: fm7,
    toc: toc7,
    texts: txt7,
    demos: dm7,
  },
  'docs/guide/page-tab': {
    frontmatter: fm8,
    toc: toc8,
    texts: txt8,
    demos: dm8,
  },
  'docs/theme/default': {
    frontmatter: fm9,
    toc: toc9,
    texts: txt9,
    demos: dm9,
  },
  'docs/config/index': {
    frontmatter: fm10,
    toc: toc10,
    texts: txt10,
    demos: dm10,
  },
  'docs/config/demo': {
    frontmatter: fm11,
    toc: toc11,
    texts: txt11,
    demos: dm11,
  },
  'docs/guide/index': {
    frontmatter: fm12,
    toc: toc12,
    texts: txt12,
    demos: dm12,
  },
  'docs/theme/index': {
    frontmatter: fm13,
    toc: toc13,
    texts: txt13,
    demos: dm13,
  },
  'docs/guide/i18n': {
    frontmatter: fm14,
    toc: toc14,
    texts: txt14,
    demos: dm14,
  },
  'docs/guide/faq': {
    frontmatter: fm15,
    toc: toc15,
    texts: txt15,
    demos: dm15,
  },
  'docs/theme/api': {
    frontmatter: fm16,
    toc: toc16,
    texts: txt16,
    demos: dm16,
  },
  'docs/index': {
    frontmatter: fm17,
    toc: toc17,
    texts: txt17,
    demos: dm17,
  },
}

// generate demos data in runtime, for reuse route.id to reduce bundle size
export const demos = Object.entries(filesMeta).reduce((acc, [id, meta]) => {
  // append route id to demo
  Object.values(meta.demos).forEach((demo) => {
    demo.routeId = id;
  });
  // merge demos
  Object.assign(acc, meta.demos);

  // remove demos from meta, to avoid deep clone demos in umi routes/children compatible logic
  delete meta.demos;

  return acc;
}, {});
