import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './layout/home/home.page';
import { LayoutModule } from './layout/layout.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, LayoutModule],
})
export class AppComponent {
  constructor() {}
}
