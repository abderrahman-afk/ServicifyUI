import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css']
})
export class AdminRequestsComponent implements OnInit {

  header = [ "Id" , "Username" , "Email" , "Job", "Desponibility" , "Description" , "Actions"  ]

  requests = []

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.request()
  }

  approve(id) {
    this.adminService.approveRequest(id)
    .then(()=> {
      this.request()

    })
    .catch((e) => console.log(e))
  }

  reject(id) {
    this.adminService.rejectRequest(id)
    .then(() => {
      this.request()
    })
    .catch((e) => console.log(e))
  }

  request() {
    this.adminService.requests().then( requests => {
      this.requests = requests.map( request => { 
        return { 
          id: request.id, 
          worker_username: request.client.nom, 
          worker_email: request.client.email , 
          job: request.job , 
          desponibility: request.desponibility,   
          description: request.description,
          actions: [
            { name: 'accept' , icon: "bi bi-check-square-fill mx-1 btn-primary" , action: () => this.approve(request.id) } ,
            { name: 'reject' , icon: "bi bi-backspace-reverse-fill mx-1 btn-danger" , action: () => this.reject(request.id) }
          ]
        } 
      })
    })
    .catch((e) => console.log(e))
  }

}
