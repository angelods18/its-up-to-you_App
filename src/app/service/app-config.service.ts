import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private appConfig: any;
  private http:HttpClient;

  constructor(
    public handler: HttpBackend
  ) { 
    this.http=new HttpClient(handler)
  }

  loadAppConfig(){
    console.log(environment.production);
    if(environment.production){
      return this.http.get('/assets/config/config-prod.json')
      .subscribe(data => {
          this.appConfig = data;
      });
    }else{
      return this.http.get('/assets/config/config.json')
      .subscribe(data => {
          this.appConfig = data;
      });
    }
    
  }

  get baseUrl() {
    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }
    if (this.appConfig.mode == "dev") {
        return "http://localhost:8080"
    }
    return this.appConfig.baseUrl;
  }
}
