import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { Preferences } from '@capacitor/preferences';
import { from, switchMap } from 'rxjs';

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

  refresh() {
    const token1=''
    const headers = new HttpHeaders({
      'Authorization': token1
    });

    return this.httpClient.get(this.baseUrl+"protected/refresh", {
      headers: headers
    });
  }

  checkTokenValidity() {
    return this.httpClient.get(this.baseUrl+"protected/is-token-valid");
  }

  async getAuthToken() {
    const { value } = await Preferences.get({
      key: 'authToken'
    });
    // console.log(value, "value");
    return value;
  }

  async setBearerToken(token: string) {
      await Preferences.set({
        key: "authToken",
        value: token
      })
  }

  async setUsername(username: string) {
    await Preferences.set({
      key: "username",
      value: username
    })
  }

  async getUsername(){
    const { value } = await Preferences.get({
      key: 'username'
    });
    // console.log(value, "value");
    return value;
  }

  async deleteBearerToken() {
    await Preferences.remove({key: "authToken"})
  }
}
