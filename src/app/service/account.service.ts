import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = this.appConfig.baseUrl;
  apiManagementUrl = "management-service";

  constructor(
    private appConfig: AppConfigService,
    private httpClient: HttpClient
  ) { }

  getProfile(){
    return this.httpClient.get(this.baseUrl+this.apiManagementUrl+"/protected/profile")
  }
}
