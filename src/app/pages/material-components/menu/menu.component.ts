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
    title: 'Menu',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class PageMenuComponent implements OnInit {
  pageTitle: string = 'Menu';
  breadcrumb: any[] = BREADCRUMBS;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}