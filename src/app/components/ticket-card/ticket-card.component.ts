import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit {

  constructor() { }
  @Input() course_child:any;
  ngOnInit() {
  }

}
