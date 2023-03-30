import { Routes } from '@angular/router';
import { HomePage } from './layout/home/home.page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
