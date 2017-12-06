import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { ApiService } from '../../../services/api.service';

@Component({
  moduleId: module.id,
  selector: 'page-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class PageRequestsComponent {
  pageTitle: string = 'requests';
  requests = [];
  requestHeaders = [];
  breadcrumb = [{title: 'requests'}];

  constructor( private _sharedService: SharedService, private apiService: ApiService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.apiService.showSpinner.next(true);
    this.getUserRequests();
  }

  getUserRequests() {
    this.requests = [];
    this.requestHeaders = ['Sender', 'Receiver', 'Group', 'Type', 'Status', 'Date'];
    this.apiService.getUserRequest().then((data: any) => {
      this.apiService.showSpinner.next(false);
      data.data.map(d => {
        this.requests.push([d.sender, d.receiver, d.group, d.request_type_text, d.request_status_text, d.date_creation]);
      });
    });
  }

  doRefresh() {
    this.getUserRequests();
  }
}