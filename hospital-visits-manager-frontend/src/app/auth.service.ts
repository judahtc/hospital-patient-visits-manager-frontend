import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login_users(body: any, user: string) {
    let params = new HttpParams();
    params = params.append('user', user);
    console.log(body);
    let options = {
      params: params,
    };

    return this.http.post('http://localhost:8002/auth/login', body, options);
  }
}
