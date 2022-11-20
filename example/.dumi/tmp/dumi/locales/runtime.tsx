// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { history } from 'dumi';
import React, {
  useState,
  useLayoutEffect,
  useCallback,
  type ReactNode,
} from 'react';
import {
  RawIntlProvider,
  createIntl,
  createIntlCache,
} from '/Users/logeast/Documents/dumi-theme-vite/node_modules/.pnpm/react-intl@6.2.1_react@18.2.0/node_modules/react-intl';
import { useIsomorphicLayoutEffect } from '/Users/logeast/Documents/dumi-theme-vite/node_modules/.pnpm/dumi@2.0.2_xgbqj6fguo7kan2ufc2v2cdr6u/node_modules/dumi/dist/client/theme-api/utils.js';
import { locales, messages } from './config';

const cache = createIntlCache();

const LocalesContainer: FC<{ children: ReactNode }> = (props) => {
  const getIntl = useCallback(() => {
    const matched = locales
      .slice()
      .reverse()
      .find((locale) =>
        'suffix' in locale
          ? // suffix mode
            history.location.pathname
              .replace(/([^/])\/$/, '$1')
              .endsWith(locale.suffix)
          : // base mode
            history.location.pathname
              .replace(/([^/])\/$/, '$1')
              .startsWith(locale.base),
      );
    const locale = matched ? matched.id : locales[0].id;

    return createIntl({ locale, messages: messages[locale] || {} }, cache);
  }, []);
  const [intl, setIntl] = useState(() => getIntl());

  useIsomorphicLayoutEffect(() => {
    return history.listen(() => {
      setIntl(getIntl());
    });
  }, []);

  return (
    <RawIntlProvider value={intl} key={intl.locale}>
      {props.children}
    </RawIntlProvider>
  );
};

export function i18nProvider(container: Element) {
  return React.createElement(LocalesContainer, null, container);
}
