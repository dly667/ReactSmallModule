import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/index.html",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('../login.js').default
      },
      {
        "component": () => React.createElement(require('H:/HLOfficialWebsite/node_modules/_umi-build-dev@0.20.5@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src\\\\layouts\\\\index.js","routes":[{"path":"/index.html","exact":true,"component":"./src/pages/index.js"},{"path":"/","exact":true,"component":"./src/pages/index.js"},{"path":"/login","exact":true,"component":"./src/pages/login.js"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
