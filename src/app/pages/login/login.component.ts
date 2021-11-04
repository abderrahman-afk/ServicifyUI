import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  user: any = {};

  constructor(private fb:FormBuilder, private userService: UserService, private router: Router) { }


  ngOnInit() {
    this.loginform = this.fb.group({
      username: [''],
      password: ['']

    })
  }
  login() {
    this.userService.login(this.user)
      .then(() => this.router.navigate(['/app/home']))
      .catch((e) => console.error(e))
      console.log("hey hey");
      

  }
}
