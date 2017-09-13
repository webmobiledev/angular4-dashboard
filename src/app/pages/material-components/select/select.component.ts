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
    title: 'Select',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.scss']
})
export class PageSelectComponent implements OnInit {
  pageTitle: string = 'Select';
  breadcrumb: any[] = BREADCRUMBS;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}