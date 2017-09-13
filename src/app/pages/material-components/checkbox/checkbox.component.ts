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
    title: 'Checkbox',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.scss']
})
export class PageCheckboxComponent implements OnInit {
  pageTitle: string = 'Checkbox';
  breadcrumb: any[] = BREADCRUMBS;
  checked: boolean = false;
  indeterminate: boolean = false;
  align: string = 'start';
  disabled:boolean = false;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}