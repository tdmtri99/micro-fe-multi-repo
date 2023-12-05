import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="">Home</a></li>
      <li><a routerLink="/count">Count</a></li>
      <li><a routerLink="/book">Book</a></li>
      <li> <a routerLink="/mfe">Share Page</a></li>
    </ul>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'shell';
}
