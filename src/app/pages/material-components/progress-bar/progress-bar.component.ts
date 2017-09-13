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
    title: 'Progress bar',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-progress-bar',
  templateUrl: 'progress-bar.component.html',
  styleUrls: ['progress-bar.component.scss']
})
export class PageProgressBarComponent implements OnInit {
  pageTitle: string;
  breadcrumb: any[] = BREADCRUMBS;
  sidebar: boolean;
  navbar: boolean;
  determinateProgressValue: number;
  bufferProgressValue: number;
  bufferBufferValue: number;

  constructor( private _sharedService: SharedService ) {
    this.pageTitle = 'Progress bar';
    this.determinateProgressValue = 50;
    this.bufferProgressValue = 30;
    this.bufferBufferValue = 40;
    this.sidebar = true;
    this.navbar = true;
    this._sharedService.emitChange(this.pageTitle);
  }

  stepDeterminateProgressVal(val: number) {
    this.determinateProgressValue += val;
  }

  stepBufferProgressVal(val: number) {
    this.bufferProgressValue += val;
  }

  stepBufferBufferVal(val: number) {
    this.bufferBufferValue += val;
  }

  ngOnInit() {}
}