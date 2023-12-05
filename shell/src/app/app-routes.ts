import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'count',
    loadChildren: () =>
      import('./count/count.module').then((m) => m.CountModule),
  },
  {
    path: 'book',
    loadChildren: () =>
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './BookModule',
    }).then((m) => m.BookModule),
  },
  // {
  //   path: 'book',
  //   loadChildren: () =>
  //     import('../../../mfe/src/app/book/book.module').then((m) => m.BookModule),
  // },
  // {
  //   path: 'mfe',
  //   loadChildren: () => import('mfe/Module').then((m) => m.CountModule),
  // },
  {
    path: 'mfe',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.CountModule),
  },
];
