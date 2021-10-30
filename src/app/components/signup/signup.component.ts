import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform : FormGroup;
  constructor(private fb:FormBuilder) { }
  

  ngOnInit() {
    this.signupform=this.fb.group({
      fullname:[''],
      email:[''],
      telephone:[''],
      password:[''],
      dob:[''],
     

    })
  }

  signup(x){
    console.log("submitted ",x);
    
  }

}
