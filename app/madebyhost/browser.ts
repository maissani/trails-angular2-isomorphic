import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provideRouter, NODE_LOCATION_PROVIDERS, ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {routes} from './app.routes';

// import {
//   NG_PRELOAD_CACHE_PROVIDERS,
//   PRIME_CACHE
// } from '../../../../modules/universal/client/client';


import {MadebyhostApp} from './app';

export function main() {
  return bootstrap(MadebyhostApp, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provideRouter(routes),
  	NODE_LOCATION_PROVIDERS,
    // NG_PRELOAD_CACHE_PROVIDERS,
    // provide(PRIME_CACHE, {useValue: true})
  ]);
}
