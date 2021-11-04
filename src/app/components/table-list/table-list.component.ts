import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  @Input('title') title: string = "title"
  @Input('header') header: [string]
  @Input('data') data: []

  constructor() { }

  ngOnInit() {
  }

  map( object ) {
    return Object.values(object)
  }

}
