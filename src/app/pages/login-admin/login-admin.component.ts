import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AlertyfyService } from 'src/app/services/alertyfy.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  loginform: FormGroup;
  user: any = {};

  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router,private alertyfy:AlertyfyService) { }


  ngOnInit() {
    this.loginform = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  login() {
    this.adminService.login(this.user)
      .then( () => {
          this.alertyfy.success("You logged in successfully");
          this.router.navigate(['/administration/home'])
        })
      .catch((e) => {
        this.alertyfy.error("check your credentials");
        console.error(e)
      })
  }

}
