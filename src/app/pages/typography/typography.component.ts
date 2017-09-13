import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../layouts/shared-service';

const BREADCRUMBS: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Typography',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-typography',
  templateUrl: 'typography.component.html'
})
export class PageTypographyComponent implements OnInit {
  pageTitle: string = 'Typography';
  breadcrumb: any[] = BREADCRUMBS;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}