import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})
export class AdminClientsComponent implements OnInit {

  header = [ "Id" , "Username" , "Prenom"  , "Email", "Worker" , "Tel" , "Address" ]

  clients = []

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.clients().then( response => {
      this.clients = response
    })
    .catch((e) => console.log(e))
  }

}
