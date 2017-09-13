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
    title: 'Icons',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-icon',
  templateUrl: 'icon.component.html',
  styleUrls: ['icon.component.scss']
})
export class PageIconComponent implements OnInit {
  pageTitle: string = 'Icon';
  breadcrumb: any[] = BREADCRUMBS;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}