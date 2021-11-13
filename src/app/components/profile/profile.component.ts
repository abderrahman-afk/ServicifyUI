import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  test:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  edit(){
    this.test=false;
  }
  save(){
    this.test=true
  }

}
