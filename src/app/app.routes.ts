import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './layout/home/home.page';
import { NgModule } from '@angular/core';

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
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "account",
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}