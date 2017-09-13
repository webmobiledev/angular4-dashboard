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
    title: 'Toolbar',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss']
})
export class PageToolbarComponent {
  pageTitle: string = 'Toolbar';
  breadcrumb: any[] = BREADCRUMBS;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}