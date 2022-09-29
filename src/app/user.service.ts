import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _url:string="http://localhost:3000/save";
  constructor(private http:HttpClient) { }

  postUser(user:User)
  {
    return this.http.post(this._url,user);
  }
}
