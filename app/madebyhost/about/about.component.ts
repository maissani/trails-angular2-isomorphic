import { Component } from '@angular/core';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'about',
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './madebyhost/about/about.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './madebyhost/about/about.template.html'
})
export class About {
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor() {
  }

  contacts = [
  {
    name:"test"
  },
  {
    name:"test2"
  }];

  ngOnInit() {
    console.log('hello `about` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value) {
    console.log('submitState', value);
  }

}
