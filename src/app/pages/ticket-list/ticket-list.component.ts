import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets = []

  constructor(private ticketService: TicketService) { }

  ngOnInit() { 
    this.ticketService.listTickets()
    .then( (response) => {
      
    })
    .catch( e => console.error(e))
  }


}
