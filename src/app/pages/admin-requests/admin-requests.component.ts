import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css']
})
export class AdminRequestsComponent implements OnInit {

  header = [ "Id" , "Username" , "Email" ]

  workers = []

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.clients().then( response => {
      this.workers = response
    })
    .catch((e) => console.log(e))
  }


}
