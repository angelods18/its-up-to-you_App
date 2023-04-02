import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './layout/home/home.page';
import { SharedModule } from './layout/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule],
})
export class AppComponent {
  constructor() {}
}
