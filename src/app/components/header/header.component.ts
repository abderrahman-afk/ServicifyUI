import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {}

  logout(){
    this.userService.logout()
    this.router.navigate(['/app/login'])
    /*.then(() => this.router.navigate(['/app/login']))
    .catch((e) => console.error(e))*/
  }

}
