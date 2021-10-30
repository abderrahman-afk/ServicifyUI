import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      fullname:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      telephone:[''],
      password:['',[Validators.required,Validators.minLength(8)]],
      dob:[''],
     

    })
    console.log(this.signupform.valid);
    

  }

  signup(x){
    console.log("submitted ",x);
    
  }
  
 

}
