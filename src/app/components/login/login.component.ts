import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  user:any={};

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.loginform=this.fb.group({
      username:[''],
      password:['']

    })
  }
login(){
  console.log("hi user",this.user);
  
}
}
