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
    title: 'Chips',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-chips',
  templateUrl: 'chips.component.html',
  styleUrls: ['chips.component.scss']
})
export class PageChipsComponent implements OnInit {
  pageTitle: string = 'Chips';
  breadcrumb: any[] = BREADCRUMBS;
  color: string;
  availableColors = [
    { name: 'Default', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warning', color: 'warn' }
  ];

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}