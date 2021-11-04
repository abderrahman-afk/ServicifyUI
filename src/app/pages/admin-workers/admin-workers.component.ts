import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-workers',
  templateUrl: './admin-workers.component.html',
  styleUrls: ['./admin-workers.component.css']
})
export class AdminWorkersComponent implements OnInit {

  header = [ "Id" , "Username" , "Email" , "Job", "Desponibility" , "Description"  ]

  workers = []

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.workers().then( workers => {
      this.workers = workers.map( worker => { 
        return { 
          id: worker.id , 
          worker_username: worker.client.nom, 
          worker_email: worker.client.email , 
          job: worker.job , 
          desponibility: worker.desponibility,   
          description: worker.description
        } 
      })
    })
    .catch((e) => console.log(e))
  }

}
