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
    title: 'Card',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss']
})
export class PageCardComponent implements OnInit {
  pageTitle: string = 'Cards';
  breadcrumb: any[] = BREADCRUMBS;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}