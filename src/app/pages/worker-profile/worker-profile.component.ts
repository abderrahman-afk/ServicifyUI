import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';
import { WorkerService } from 'src/app/services/worker.service';
@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.css']
})
export class WorkerProfileComponent implements OnInit {


  constructor(private userService: UserService, private router: Router, private workerService:WorkerService, private route: ActivatedRoute, private ticketService: TicketService ) { }
  
  user: User
  tickets= [];

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const prodId = params['id'];
      this.workerService.worker(prodId)
      .then((response) => {
        this.user =  response
      })
      .catch(e => console.log(e))
      this.ticketService.listTickets()
      .then((response:any) => {
        this.tickets = response
      })
      .catch(e => console.log(e))

   })
  }

}
