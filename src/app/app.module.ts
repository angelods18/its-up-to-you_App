import {NgModule, isDevMode} from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
  ],
  imports: [
    LayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  exports:[
  ],
  providers: [
  ],
  bootstrap: []
})
export class AppModule { }