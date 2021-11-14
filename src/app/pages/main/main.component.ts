import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  requestform: FormGroup;
  user: User
  request:any = {}

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser()
    this.requestform = this.fb.group({
      job: [''],
      description: [''],
      disponible: [''],
    })
  }

  requestRole() {
    this.userService.requestRole(this.request).then().catch(e => console.error(e))
  }

}
