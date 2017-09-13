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
    title: 'Button',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss']
})
export class PageButtonComponent implements OnInit {
  pageTitle: string = 'Buttons';
  breadcrumb: any[] = BREADCRUMBS;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}