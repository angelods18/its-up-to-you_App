import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../layout/shared.module';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent
  }
]

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountModule { }
