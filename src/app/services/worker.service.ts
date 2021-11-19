import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http: HttpClient, private config: ConfigService) {}

  worker( id ) {
    return this.http
    .get(`/service/api/auth/ouvrier/${id}/`)
    .toPromise()
    .then( (response:any) => {
      console.log(response)
      return response
    })
  }
}
