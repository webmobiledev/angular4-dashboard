import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { single1, single2, multi1, multi2, multi3 } from './data';

const BREADCRUMBS: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Charts',
    link: '#'
  },
  {
    title: 'Ngx Charts',
    link: ''
  }
];
@Component({
  selector: 'page-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  styleUrls: ['./ngx-charts.component.scss']
})
export class PageNgxChartsComponent implements OnInit {
  pageTitle: string = 'Ngx Charts';
  breadcrumb: any[] = BREADCRUMBS;
  single1: any[];
  single2: any[];
  multi1: any[];
  multi2: any[];
  multi3: any[];

  // Color scheme
  colorScheme = {
    domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#a95963', '#50abcc']
  };

  constructor( private _sharedService: SharedService ) {
    Object.assign(this, {single1, single2, multi1, multi2, multi3});
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}
