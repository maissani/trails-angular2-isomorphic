'use strict'

const Controller = require('trails-controller')

const ng2 = require('@angular/core')
const ng2U = require('angular2-universal')
ng2.enableProdMode()

const PACKAGES = {
  'angular2-universal/polyfills': {
    format: 'cjs',
    main: 'dist/polyfills',
    defaultExtension: 'js'
  },
  'angular2-universal': {
    format: 'cjs',
    main: 'dist/browser/index',
    defaultExtension: 'js'
  },
  '@angular/core': {
    format: 'cjs',
    main: 'index',
    defaultExtension: 'js'
  },
  '@angular/router': {
    format: 'cjs',
    main: 'index',
    defaultExtension: 'js'
  },
  '@angular/platform-browser': {
    format: 'cjs',
    main: 'index',
    defaultExtension: 'js'
  },
  '@angular/platform-browser-dynamic': {
    format: 'cjs',
    main: 'index',
    defaultExtension: 'js'
  },
  '@angular/http': {
    format: 'cjs',
    main: 'index',
    defaultExtension: 'js'
  },
  '@angular/common': {
    format: 'cjs',
    main: 'index',
    defaultExtension: 'js'
  },
  '@angular/compiler': {
    format: 'cjs',
    main: 'index',
    defaultExtension: 'js'
  },
  rxjs: {
    defaultExtension: 'js'
  }
};

const materialPkgs = [
  'core',
  'button',
  'card',
];

materialPkgs.forEach((pkg) => {
  PACKAGES[`@angular2-material/${pkg}`] = {
    format: 'cjs',
    main: `${pkg}.js`
  };
});

module.exports = class ViewController extends Controller {
  init() {
    if(!this.madebyhostApp) {
      this.madebyhostApp = require('../../dist/app/madebyhost/app')
    }
  }

  madebyhost(req, res) {
    this.init()
    const madebyhostApp = this.madebyhostApp
    let queryParams = ng2U.queryParamsToBoolean(req.query)
    let options = Object.assign(queryParams , {
      // client url for systemjs
      buildClientScripts: true,
      systemjs: {
        componentUrl: 'madebyhost/browser',
        map: {
          'angular2-universal': 'node_modules/angular2-universal',
          '@angular': 'node_modules/@angular',
          'rxjs': 'node_modules/rxjs', 
          '@angular2-material' : 'node_modules/@angular2-material'
        },
        packages: PACKAGES
      },
      directives: [madebyhostApp.MadebyhostApp],
      platformProviders: [
        ng2.provide(ng2U.ORIGIN_URL, {useValue: 'http://localhost:3000'}),
        ng2.provide(ng2U.BASE_URL, {useValue: '/'}),
      ],
      providers: [
        ng2.provide(ng2U.REQUEST_URL, {useValue: req.originalUrl})
      ].concat(ng2U.NODE_HTTP_PROVIDERS, ng2U.NODE_ROUTER_PROVIDERS),
      data: {},
      async: queryParams.async !== false,
      preboot: queryParams.preboot === false ? null : {debug: true, uglify: false}
    })

    res.render('madebyhost/index', options)
  }
}
