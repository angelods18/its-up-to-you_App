import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { Preferences } from '@capacitor/preferences';

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

  async getAuthToken() {
    const { value } = await Preferences.get({
      key: 'authToken'
    });
    console.log(value, "value");
    return value;
  }

  async setBearerToken(token: string) {
      await Preferences.set({
        key: "authToken",
        value: token
      })
    
  }
}
