import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8089/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    //noinspection TypeScriptValidateTypes
    return this.http.get(API_URL + 'all',{ responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    //noinspection TypeScriptValidateTypes
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    //noinspection TypeScriptValidateTypes
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    //noinspection TypeScriptValidateTypes
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}