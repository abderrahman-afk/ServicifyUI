import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinform : FormGroup;
  constructor(private fb:FormBuilder, private userService:UserService, private router: Router) { }

  ngOnInit() {
    this.signinform=this.fb.group({
      username:[''],
      password:[''],
    })
  }

  signin(){
    this.userService.login(this.signinform.value)
    .then( () => this.router.navigate(['/home']))
    .catch( (e) => console.error(e))
  }
}
