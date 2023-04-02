import {APP_INITIALIZER, NgModule, isDevMode} from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppConfigService } from './service/app-config.service';
import { SharedModule } from './layout/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  exports:[
    CommonModule
  ],
  providers: [
  ],
  bootstrap: []
})
export class AppModule { }