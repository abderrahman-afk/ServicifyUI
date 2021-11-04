import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient, private config: ConfigService) {}

  sendTicket(id , form ) {
    return this.http
    .post(`/ticket/send/${id}/`, form )
    .toPromise()
    .then( (response:any) => {
      console.log(response)
      return response
    })
  }

  listTickets(id) {
    return this.http.get(`/ticket/liste`)
    .toPromise()
    .then( (response) => {
      console.log(response)
      return response
    })
  }

}
