import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

@Component({
  selector: 'page-ni-alerts',
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.scss']
})
export class PageNiAlertsComponent implements OnInit {
  pageTitle: string = 'Alerts';

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}