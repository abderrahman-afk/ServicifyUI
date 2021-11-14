import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.css']
})
export class WorkerProfileComponent implements OnInit {

  
  constructor(private userService: UserService) { }
  user: User
  tickets:Array<any>=[1,2,3];
  ngOnInit() {
    this.user = this.userService.getUser()
  }

}
