import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

const BREADCRUMBS: any[] = [
  {
    title: 'Pages',
    link: '#'
  },
  {
    title: 'Page service',
    link: '#'
  },
  {
    title: 'FAQ',
    link: ''
  }
];

@Component({
  selector: 'page-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class PageFaqComponent implements OnInit {
  pageTitle: string = 'FAQ';
  breadcrumb: any[] = BREADCRUMBS;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}
