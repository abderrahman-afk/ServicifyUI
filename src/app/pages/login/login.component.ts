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
      .then( () => {
          this.alertyfy.success("You logged in successfully");
          this.router.navigate(['/'])
        })
      .catch((e) => {
        this.alertyfy.error("check your credentials");
        console.error(e)
      })
  }

}
