import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user.service';
import { WorkerService } from 'src/app/services/worker.service';
@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.css']
})
export class WorkerProfileComponent implements OnInit {


  constructor(private userService: UserService, private router: Router, private workerService:WorkerService, private route: ActivatedRoute ) { }
  
  user: User
  tickets: Array<any> = [1, 2, 3];

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const prodId = params['id'];
      this.workerService.worker(prodId)
      .then((response) => {
        this.user =  response
      })
      .catch(e => console.log(e))
   })
  }

}
