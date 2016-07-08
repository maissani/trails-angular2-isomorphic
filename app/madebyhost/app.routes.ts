import { ROUTER_DIRECTIVES, RouterConfig, Route } from '@angular/router';
import { Home } from './home/index';
import { About } from './about/index';
import { NoContent } from './no-content/index';

interface NewRoute extends Route {
   pathMatch?: 'full'|'prefix';
 }

export const routes: RouterConfig = [
  (<NewRoute>{ path: '', component: Home, pathMatch: 'full', terminal: true }),
  { path: '#/home',  component: Home },
  { path: '#/about',  component: About },
  // make sure you match the component type string to the require in asyncRoutes
  { path: '**',    component: NoContent },
];
