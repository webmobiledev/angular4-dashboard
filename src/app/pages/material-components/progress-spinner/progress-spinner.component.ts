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
    title: 'Progress spinner',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-progress-spinner',
  templateUrl: 'progress-spinner.component.html',
  styleUrls: ['progress-spinner.component.scss']
})
export class PageProgressSpinnerComponent implements OnInit {
  pageTitle: string;
  breadcrumb: any[] = BREADCRUMBS;
  sidebar: boolean;
  navbar: boolean;
  progressValue: number;

  constructor( private _sharedService: SharedService ) {
    this.pageTitle = 'Progress spinner';
    this.progressValue = 40;
    this.sidebar = true;
    this.navbar = true;
    this._sharedService.emitChange(this.pageTitle);
  }

  step(val: number) {
    this.progressValue += val;
  }

  ngOnInit() {}
}