'use strict'

const Controller = require('trails-controller')

const ng2 = require('@angular/core')
const ng2U = require('angular2-universal')
const ng2R = require('@angular/router');

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
  '@angular/router': {
    format: 'cjs',
    main: 'index.js',
    defaultExtension: 'js'
  },
  rxjs: {
    defaultExtension: 'js'
  }
}

const materialPkgs = [
  'core',
  'button',
  'card',
]

var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
]

ngPackageNames.forEach((pkg) => {
  PACKAGES[`@angular/${pkg}`] = {
    format: 'cjs',
    main: `bundles/${pkg}.umd.js`,
    defaultExtension: 'js'
  }
})

materialPkgs.forEach((pkg) => {
  PACKAGES[`@angular2-material/${pkg}`] = {
    format: 'cjs',
    main: `${pkg}.js`
  }
})

console.log(PACKAGES);

module.exports = class ViewController extends Controller {
  init() {
    if(!this.madebyhostApp) {
      this.madebyhostApp = require('../../dist/app/madebyhost/app')
    }
    if(!this.routes) {
      this.routes = require('../../dist/app/madebyhost/app.routes')
    }
  }

  madebyhost(req, res) {
    this.init()
    const madebyhostApp = this.madebyhostApp
    const routes = this.routes
    let queryParams = ng2U.queryParamsToBoolean(req.query)
    let options = Object.assign(queryParams , {
      // client url for systemjs
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
        ng2U.NODE_HTTP_PROVIDERS,
        ng2.provide(ng2U.REQUEST_URL, {useValue: req.originalUrl}),
        ng2R.provideRouter(routes.routes),
        //ng2.provide(ng2R.LocationStrategy, {useClass: ng2R.HashLocationStrategy}),
        ng2U.NODE_LOCATION_PROVIDERS
      ].concat(ng2U.NODE_HTTP_PROVIDERS, ng2U.NODE_ROUTER_PROVIDERS),
      data: {},
      async: queryParams.async !== false,
      preboot: queryParams.preboot === false ? null : {debug: true, uglify: false}
    })

    res.render('madebyhost/index', options)
  }
}
