import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

@Component({
  selector: 'page-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class PageFaqComponent implements OnInit {
  pageTitle: string = 'FAQ';
  breadcrumb: any = [
    {
      title: 'Faq'
    },
  ];

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}
