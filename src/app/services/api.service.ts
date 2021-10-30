import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BackendDns = "http://10e8-197-2-89-247.ngrok.io"

  constructor(private http: HttpClient) { }

  register(account) {
    return this.http
    .post(`/api/auth/register`, account)
    .toPromise()
    .then( (response) => {
      console.log(response)
      return response
    })
  }

  login(credentials) {
    return this.http.post(`${this.BackendDns}/api/login`,credentials)
  }

  request() {

  }


}
