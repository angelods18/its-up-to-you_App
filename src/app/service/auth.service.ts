import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = this.appConfig.baseUrl;

  constructor(
    private appConfig: AppConfigService,
    private httpClient: HttpClient
  ) { }

  /**
     * response: {
     *    "username",
     *    "authorities":[ {"authoritry"} ],
     *    "token"
     * }
     */
  login(user: string, pass:string) {
    return this.httpClient.post(this.baseUrl+"public/login", {
      "username": user,
      "password": pass
    });
  }
}
