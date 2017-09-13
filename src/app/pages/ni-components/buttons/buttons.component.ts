import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

@Component({
  selector: 'page-ni-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class PageNiButtonsComponent implements OnInit {
  pageTitle: string = 'Buttons';

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}
