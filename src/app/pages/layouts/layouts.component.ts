import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../layouts/shared-service';

@Component({
  selector: 'page-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class PageLayoutsComponent implements OnInit {
  pageTitle: string = 'Layouts';

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}
