import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { NoContent } from './no-content';

export const routes: RouterConfig = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  // make sure you match the component type string to the require in asyncRoutes
  { path: '**',    component: NoContent },
];