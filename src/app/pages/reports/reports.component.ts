import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  header = [ "Id" , "Reporter" , "Reported" , "Message", "Date",  "Actions"  ]

  reports = []

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.report()
  }

  reject(id) {
    this.adminService.ignoreReport(id)
    .then(()=> {
      this.report()
    })
    .catch((e) => console.log(e))
  }

  ban(id) {
    this.adminService.ban(id)
    .then(() => {
      this.report()
    })
    .catch((e) => console.log(e))
  }

  report() {
    this.adminService.reports().then( reports => {
      this.report = reports.map( report => { 
        return { 
          id: report.id, 
          reporter : report.fromcl.nom, 
          reported : report.tocl.client.nom , 
          message : report.message , 
          date: report.date_repport ,   
          actions: [
            { name: 'ban' , icon: "bi bi-check-square-fill mx-1 btn-primary" , tooltip: "ban this user", action: () => this.ban(report.id) } ,
            { name: 'reject' , icon: "bi bi-backspace-reverse-fill mx-1 btn-danger", tooltip: "reject report" , action: () => this.reject(report.id) }
          ]
        } 
      })
    })
    .catch((e) => console.log(e))
  }

}
