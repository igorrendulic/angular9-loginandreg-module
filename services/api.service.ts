import { Injectable, Inject } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(@Inject("ApiUrl") private apiURL:string, private http:HttpClient) { }

  register(user:User) {
    return this.http.post(this.apiURL + "/api/register", user);
  }

  login(username:string, password:string) {
    return this.http.post(this.apiURL + "/api/login", {username: username, password: password})
  }
}