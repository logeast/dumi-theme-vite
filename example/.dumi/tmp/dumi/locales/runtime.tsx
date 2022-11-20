// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { history } from 'dumi';
import React, { useCallback, useState, type ReactNode } from 'react';
import { locales, messages } from './config';
import { useIsomorphicLayoutEffect } from '/Users/logeast/Documents/gitee/dumi-theme-vite/node_modules/dumi/dist/client/theme-api/utils.js';
import {
  createIntl,
  createIntlCache,
  RawIntlProvider,
} from '/Users/logeast/Documents/gitee/dumi-theme-vite/node_modules/react-intl';

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
