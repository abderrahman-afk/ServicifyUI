import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit {

  @Input("ticket_child") ticket_child;


  constructor() { }
 
  ngOnInit() {
    console.log(this.ticket_child)
  }

}
