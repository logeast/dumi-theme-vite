// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useEffect, useState } from 'react';
import { ApplyPluginsType } from 'umi';
import { renderClient, RenderClientOpts } from '/Users/logeast/Documents/dumi-theme-vite/node_modules/@umijs/renderer-react';
import { createHistory } from './core/history';
import { createPluginManager } from './core/plugin';
import { getRoutes } from './core/route';
import type { Location } from 'history';

import './core/polyfill';

const publicPath = '/';
const runtimePublicPath = false;

type TestBrowserProps = {
  location?: Partial<Location>;
  historyRef?: React.MutableRefObject<Location>;
};

export function TestBrowser(props: TestBrowserProps) {
  const pluginManager = createPluginManager();
  const [context, setContext] = useState<RenderClientOpts | undefined>(
    undefined
  );
  useEffect(() => {
    const genContext = async () => {
      const { routes, routeComponents } = await getRoutes(pluginManager);
      // allow user to extend routes
      await pluginManager.applyPlugins({
        key: 'patchRoutes',
        type: ApplyPluginsType.event,
        args: {
          routes,
          routeComponents,
        },
      });
      const contextOpts = pluginManager.applyPlugins({
        key: 'modifyContextOpts',
        type: ApplyPluginsType.modify,
        initialValue: {},
      });
      const basename = contextOpts.basename || '/';
      const history = createHistory({
        type: 'memory',
        basename,
      });
      return {
        routes,
        routeComponents,
        pluginManager,
        rootElement: contextOpts.rootElement || document.getElementById('root'),
        publicPath,
        runtimePublicPath,
        history,
        basename,
        components: true,
      };
    };
    genContext().then((context) => {
      setContext(context);
      if (props.location) {
        context?.history?.push(props.location);
      }
      if (props.historyRef) {
        props.historyRef.current = context?.history;
      }
    });
  }, []);

  if (context === undefined) {
    return <div id="loading" />;
  }

  const Children = renderClient(context);
  return (
    <React.Fragment>
      <Children />
    </React.Fragment>
  );
}
