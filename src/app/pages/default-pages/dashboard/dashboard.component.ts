import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { ApiService } from '../../../services/api.service';

@Component({
  moduleId: module.id,
  selector: 'page-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class PageDashboardComponent {
  pageTitle: string = 'dashboard';
  userRequests: any;
  nextPayment: any;
  timelineData: any[] = [];

  constructor( private _sharedService: SharedService, private apiService: ApiService ) {
    this._sharedService.emitChange(this.pageTitle);

    apiService.getUserRequest('test_group6').then((data: any) => {
      console.log('userrequest', data);
      this.userRequests = data.data;
    });

    apiService.getNextPayment('test_group6').then((data: any) => {
      console.log('nextpayment', data);
      this.nextPayment = data.data;
    });

    apiService.getTimelineData('test_group6').then((data: any) => {
      console.log('timeline', data);
      this.timelineData = [{
        label: '2017',
        timeline: []
      }];
      data.data.map(d => {
        this.timelineData[0].timeline.push({date: d.date_event, content: d.event_type, pointColor: '#FFC6F1'});
      });
    });
  }
}