import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertyfyService } from 'src/app/services/alertyfy.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  user: any = {};

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router,private alertyfy:AlertyfyService) { }


  ngOnInit() {
    this.loginform = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  login() {
    this.userService.login(this.user)
      .then(
        () => this.router.navigate(['/app/'])
      )
      .catch((e) => console.error(e))
  }
  notif_success(){
    this.alertyfy.success("hi hi hi");
  }

  notif_error(){
    this.alertyfy.error("example of error notif")
  }
  notif_warning(){
    this.alertyfy.warning("example of warning notif")
  }
}
