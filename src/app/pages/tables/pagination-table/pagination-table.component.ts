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
    title: 'Pagination table',
    link: ''
  }
];

@Component({
  selector: 'page-pagination-table',
  templateUrl: './pagination-table.component.html',
  styleUrls: ['./pagination-table.component.scss']
})
export class PagePaginationTableComponent implements OnInit {
  pageTitle: string = 'Pagination table';
  breadcrumb: any[] = BREADCRUMBS;
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
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

  ngOnInit() {}
}
