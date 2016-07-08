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
  templateUrl: './madebyhost/madebyhost.html'
})

export class MadebyhostApp {

  constructor() {
  }

  ngOnInit() {
  }
}
