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
    title: 'Bootstrap table',
    link: ''
  }
];

@Component({
  selector: 'page-bootstrap-tables',
  templateUrl: './bootstrap-tables.component.html',
  styleUrls: ['./bootstrap-tables.component.scss']
})
export class PageBootstrapTablesComponent implements OnInit {
  pageTitle: string = 'Bootstrap table';
  breadcrumb: any[] = BREADCRUMBS;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}
