import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets = [
    { client: "abdou", description: "the job is to repair the and the other thing with installing the first thing in many rooms", tel: "123456788" },
    { client: "khalil hamdi", description: "the job is to fix  two things the first thing in many rooms", tel: "123456788" },
    { client: "heni ben gharbia", description: "the job is to maintini  nine things ", tel: "123456788" },
    { client: "aziza boulabiar", description: "the job is to create  two things and a mirror", tel: "123456788" },
  ]

  constructor() { }

  ngOnInit() { 
    console.log(this.tickets)
  }


}
