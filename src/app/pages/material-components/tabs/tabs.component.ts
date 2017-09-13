import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

const BREADCRUMBS: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Material components',
    link: '#'
  },
  {
    title: 'Tabs',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss']
})
export class PageTabsComponent {
  pageTitle: string = 'Tabs';
  breadcrumb: any[] = BREADCRUMBS;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}