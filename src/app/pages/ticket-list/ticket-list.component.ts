import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets = [
    { job:"repair",client: "abdou",profile:"../../../assets/img/clark-young-fQxMGkYXqFU-unsplash.jpg", description: "the job is to repair the and the other thing with installing the first thing in many rooms", tel: "123456788" },
    { job:"fix",client: "khalil hamdi",profile:"../../../assets/img/clark-young-fQxMGkYXqFU-unsplash.jpg", description: "the job is to fix  two things the first thing in many rooms", tel: "123456788" },
    { job:"install",client: "heni ben gharbia", profile:"../../../assets/img/clark-young-fQxMGkYXqFU-unsplash.jpg",description: "the job is to maintini  nine things ", tel: "123456788" },
    { job:"build",client: "aziza boulabiar",profile:"../../../assets/img/clark-young-fQxMGkYXqFU-unsplash.jpg", description: "the job is to create  two things and a mirror", tel: "123456788" },
  ]

  constructor() { }

  ngOnInit() { 
    console.log(this.tickets)
  }


}
