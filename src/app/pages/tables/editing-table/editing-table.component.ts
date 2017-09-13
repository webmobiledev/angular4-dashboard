import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

const BREADCRUMBS: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Tables',
    link: '#'
  },
  {
    title: 'Editing table',
    link: ''
  }
];

@Component({
  selector: 'page-editing-table',
  templateUrl: './editing-table.component.html',
  styleUrls: ['./editing-table.component.scss']
})
export class PageEditingTableComponent implements OnInit {
  pageTitle: string = 'Editing table';
  breadcrumb: any[] = BREADCRUMBS;
  editing = {};
  rows = [];
  loadingIndicator: boolean = true;

  constructor( private _sharedService: SharedService ) {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
    this._sharedService.emitChange(this.pageTitle);
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/table-data.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    this.rows[row.$$index][cell] = event.target.value;
  }

  ngOnInit() {}
}
