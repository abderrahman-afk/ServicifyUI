import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // localStorage.removeItem('role');
  
  }

}
