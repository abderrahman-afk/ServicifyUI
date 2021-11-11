import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { AlertyfyService } from './alertyfy.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | null = null

  constructor(private http: HttpClient, private config: ConfigService,private alertyfy:AlertyfyService) {}

  register(account) {
    return this.http
    .post(`/api/auth/register`, account, this.config.guestRequest)
    .toPromise()
    .then( (response:any) => {
      console.log(response)
      this.setUserAndToken(response)
      this.alertyfy.success("register successfully")
      return response
    })
  }

  login(credentials) {
    return this.http.post(`/api/auth/login`, credentials,  this.config.guestRequest)
    .toPromise()
    .then( (response) => {
      console.log(response)
      this.setUserAndToken(response)
      this.alertyfy.success("login successful")
      return response
    })
  }

  setUserAndToken ( response ) {
    this.user =  new User( response.user.username , response.user.email )
    localStorage.setItem('user', this.user.toJSON())
    localStorage.setItem('token',response.token)
  }

  requestRole( form ) {
    return this.http.post(`/api/auth/send`, form)
    .toPromise()
    .then( (response) => {
      console.log(response)
      return response
    })
  }

  getToken() {
    return localStorage.getItem('token')
  }

  getUser() {
    const user = localStorage.getItem('user')
    if ( user ) {
      return JSON.parse(user)
    }
    return null
  }


}
