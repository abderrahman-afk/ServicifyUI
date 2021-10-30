import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | null = null

  constructor(private http: HttpClient, private config: ConfigService) {}

  register(account) {
    return this.http
    .post(`/api/auth/register`, account, this.config.guestRequest)
    .toPromise()
    .then( (response:any) => {
      console.log(response)
      this.setUserAndToken(response)
      return response
    })
  }

  login(credentials) {
    return this.http.post(`/api/auth/login`, credentials,  this.config.guestRequest)
    .toPromise()
    .then( (response) => {
      console.log(response)
      this.setUserAndToken(response)
      return response
    })
  }

  setUserAndToken ( response ) {
    this.user =  new User( response.user.username , response.user.email )
    localStorage.setItem('token',response.token)
  }

  request() {
    
  }

  getToken() {
    return localStorage.getItem('token')
  }


}
