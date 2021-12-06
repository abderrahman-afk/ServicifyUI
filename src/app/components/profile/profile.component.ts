import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  test:boolean=true;
  user = {}
  profile = {}

  constructor(private userService:UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  edit(){
    this.test=false;
  }
  save(){
    this.test=true
  }

}
