import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

@Component({
  selector: 'page-ni-cards',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss']
})
export class PageNiCardsComponent implements OnInit {
  pageTitle: string = 'Cards';

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}