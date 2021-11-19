import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private config: ConfigService , private userService: UserService) {}

  clients() {
    return this.http
    .get(`/service/api/auth/list_client`)
    .toPromise()
    .then( (response:any) => {
      console.log(response)
      return response
    })
  }

  workers() {
    return this.http
    .get(`/service/api/auth/list_ouvrier`)
    .toPromise()
    .then( (response:any) => {
      console.log(response)
      return response
    })
  }

  approveRequest(id) {
    return this.http
    .put(`/service/api/auth/accept_employees/${id}/`,{})
    .toPromise()
    .then( (response:any) => {
      console.log(response)
      return response
    })
  }

  rejectRequest(id) {
    return this.http.put(`/service/api/auth/refuse_role/${id}/`,{})
    .toPromise()
    .then( (response) => {
      console.log(response)
      return response
    })
  }

  requests() {
    return this.http.get(`/service/api/auth/listRequest/`)
    .toPromise()
    .then( (response:any) => {
      console.log(response)
      return response
    })
  }

  login(form) {
    return this.http.post(`/service/api/auth/admin/login`, form , this.config.guestRequest )
    .toPromise()
    .then( (response:any) => {
      console.log(response)
      this.userService.setUserAndToken(response)
      return response
    })
  }

}
