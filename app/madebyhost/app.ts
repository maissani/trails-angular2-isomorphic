import {ViewEncapsulation, Component} from '@angular/core';

import {ROUTER_DIRECTIVES} from '@angular/router';

import {Http} from '@angular/http';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  selector: 'app',
  providers: [],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES],
  styles: [],
  template: `
    <md-content>
      <md-toolbar color="#606060">
          <a [routerLink]="['Index']" class="logo">
              <img [src]="madeforplayLogo" class="madeforplay-logo">
          </a>
          <span class="app-name">{{ name }}</span>

          <span class="fill"></span>
          <button md-button>
            <i class="material-icons">account_circle</i>Se connecter
          </button>
          <button md-button>
            <i class="material-icons">assignment</i>S'inscire
          </button>
           <button md-button>
            <i class="material-icons">people</i>Gestion d'équipe
          </button>
           <button md-button>
            <i class="material-icons">assignment_ind</i>Profil
          </button>
          <button md-button>
            <i class="material-icons">assignment</i>Deconnection
          </button>
      </md-toolbar>

      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>

      <router-outlet></router-outlet>

      <footer>
        Copyright 2015 / 2016 -<a [href]="url"> MadeForPlay </a> Trade Mark
      </footer>
      </md-content>
  `
})

export class MadebyhostApp {

  constructor() {
  }

  ngOnInit() {
  }
}
