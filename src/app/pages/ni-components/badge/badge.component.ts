import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

@Component({
  selector: 'page-ni-badges',
  templateUrl: 'badge.component.html',
  styleUrls: ['badge.component.scss']
})
export class PageNiBadgesComponent implements OnInit {
  pageTitle: string = 'Badges';

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}