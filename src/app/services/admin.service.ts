import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private config: ConfigService) {}

  clients() {
    return this.http
    .get(`/api/auth/list_client`)
    .toPromise()
    .then( (response:any) => {
      console.log(response)
      return response
    })
  }

  workers() {
    return this.http
    .get(`/api/auth/list_ouvrier`)
    .toPromise()
    .then( (response:any) => {
      console.log(response)
      return response
    })
  }

  approveRequest(id) {
    return this.http
    .put(`/api/auth/accept_employees/${id}/`,{})
    .toPromise()
    .then( (response:any) => {
      console.log(response)
      return response
    })
  }

  rejectRequest(id) {
    return this.http.put(`/api/auth/refuse_role/${id}/`,{})
    .toPromise()
    .then( (response) => {
      console.log(response)
      return response
    })
  }

  requests(id) {
    return this.http.get(`/api/auth/listRequest/`)
    .toPromise()
    .then( (response) => {
      console.log(response)
      return response
    })
  }

}
