import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(private http: HttpClient, private config: ConfigService) {}

  recommendation() {
    return this.http
    .get(`/recommended/`)
    .toPromise()
    .then( (response:any) => {
      console.log(response)
      return response
    })
  }

  searchByName( name ) {
    return this.http.get(`/recherchePerName/${name}/`)
    .toPromise()
    .then( (response) => {
      console.log(response)
      return response
    })
  }

  searchByInfo( job , address ) {
    return this.http.get(`/recherchePerCat/${job}/${address}/`)
    .toPromise()
    .then( (response) => {
      console.log(response)
      return response
    })
  }
}