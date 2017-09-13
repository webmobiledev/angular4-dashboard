import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { Item } from './item';

const BREADCRUMBS: Item[] = [
  {
    title: 'Home',
    link: '#',
    icon: ''
  },
  {
    title: 'UI Elements',
    link: '#',
    icon: ''
  },
  {
    title: 'Components',
    link: '#',
    icon: ''
  },
  {
    title: 'Breadcrumb',
    link: '',
    icon: ''
  }
];
const BREADCRUMBSICON: Item[] = [
  {
    title: 'Home',
    link: '#',
    icon: 'fa fa-home'
  },
  {
    title: 'UI Elements',
    link: '#',
    icon: 'fa fa-paper-plane'
  },
  {
    title: 'Components',
    link: '#',
    icon: 'fa fa-shopping-bag'
  },
  {
    title: 'Breadcrumb',
    link: '',
    icon: 'fa fa-diamond'
  }
];

@Component({
  selector: 'page-ni-breadcrumbs',
  templateUrl: 'breadcrumb.component.html',
  styleUrls: ['breadcrumb.component.scss']
})
export class PageNiBreadcrumbsComponent implements OnInit {
  pageTitle: string = 'Breadcrumbs';
  breadcrumb: Item[] = BREADCRUMBS;
  breadcrumbIcon: Item[] = BREADCRUMBSICON;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}