import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="">Home</a>
    <a routerLink="mfe">Share Page Count</a>
    <a routerLink="book">Share Page Book</a>
   <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'mfe';
}
