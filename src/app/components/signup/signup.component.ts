import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform : FormGroup;
  constructor(private fb:FormBuilder, private userService:UserService, private router: Router) { }

  ngOnInit() {
    this.signupform=this.fb.group({
      username:[''],
      email:[''],
      telephone:[''],
      password:[''],
      dob:[''],
    })
  }

  signup(){
    this.userService.register(this.signupform.value)
    .then( () => this.router.navigate(['/login']))
    .catch( (e) => console.error(e))
  }

}
