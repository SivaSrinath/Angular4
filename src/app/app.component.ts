import { Component } from '@angular/core';

@Component({
  selector:'pg-root',
  template:  `
  <nav class='navbar navbar-extend navbar-light bg-light'>
    <a class='navbar-brand'> {{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link'>Home</a></li>
      <li><a class='nav-link' [routerLink]="['/products']">Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
})

export class AppComponent{
  pageTitle: string='Srinath Tech Solutions';
}
