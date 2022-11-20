// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';
import { SiteContext } from '/Users/logeast/Documents/dumi-theme-vite/node_modules/.pnpm/dumi@2.0.2_xgbqj6fguo7kan2ufc2v2cdr6u/node_modules/dumi/dist/client/theme-api/context.js';
import { demos, components } from '../meta';
import { locales } from '../locales/config';

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(true);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      // mark loading when route change, page component will set false when loaded
      setLoading(true);

      // scroll to top when route changed
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider
      value={{
        pkg: {},
        demos,
        components,
        locales,
        loading,
        setLoading,
        themeConfig: {
          footer:
            'Copyright © 2022 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',
        },
      }}
    >
      {outlet}
    </SiteContext.Provider>
  );
}
