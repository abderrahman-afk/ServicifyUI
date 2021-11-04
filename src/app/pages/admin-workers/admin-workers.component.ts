import { Component, OnInit } from '@angular/core';
import { worker } from 'cluster';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-workers',
  templateUrl: './admin-workers.component.html',
  styleUrls: ['./admin-workers.component.css']
})
export class AdminWorkersComponent implements OnInit {

  header = [ "Id" , "Username" , "Email" ]

  workers = []

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.workers().then( response => {
      this.workers = response.map( worker => {  } )
    })
    .catch((e) => console.log(e))
  }

}