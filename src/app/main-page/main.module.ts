import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../layout/shared.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes =[
  {
    path:"",
    component: MainComponent
  }
]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
