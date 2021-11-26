import { Component,Input, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit {

  @Input("ticket_child") ticket_child;


  constructor(private ticketService: TicketService) { }
 
  ngOnInit() {
    console.log(this.ticket_child)
  }

  accept() {
    this.ticketService.acceptTicket(this.ticket_child.id)
    .then()
    .catch(e => console.log(e))
  }

  decline() {
    this.ticketService.declineTicket(this.ticket_child.id)
    .then()
    .catch(e => console.log(e))
  }

}
