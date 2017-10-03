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
    this.apiService.getUserRequest().then((data: any) => {
      console.log('userrequest', data);
      this.requests = [];
      this.requestHeaders = ['Sender', 'Receiver', 'Group', 'Type', 'Status', 'Date'];
      data.data.map(d => {
        this.requests.push([d.sender, d.receiver, d.group, d.request_type, d.request_status, d.request_date]);
      });
    });
  }
}