import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { ApiService } from '../../../services/api.service';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

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
  nextPaymentHeader: any;
  timelineData: any[] = [];
  breadcrumb = [{title: 'dashboard'}];

  constructor( private _sharedService: SharedService, private apiService: ApiService ) {
    this._sharedService.emitChange(this.pageTitle);

    apiService.getUserRequest().then((data: any) => {
      console.log('userrequest', data);
      this.userRequests = data.data;
    });

    apiService.getNextPayment().then((data: any) => {
      console.log('nextpayment', data);
      this.nextPayment = [];
      this.nextPaymentHeader = ['To', 'Amount', 'Date'];
      data.data.map(d => {
        this.nextPayment.push([d.to, d.projected_amount_due, d.projected_payment_due_date]);
      });
    });

    apiService.getTimelineData().then((data: any) => {
      console.log('timeline', data);
      this.timelineData = [{
        label: '2017',
        timeline: []
      }];
      data.data.map(d => {
        this.timelineData[0].timeline.push({date: this.getDuration(d.duration_seconds), content: d.event_type === 'GROUP_CREATED' ? 'A new group has been created' : 'A new request to join group has been created', pointColor: '#FFC6F1'});
      });
    });
  }

  getDuration(seconds) {
    let h = this.format(((seconds / 3600) % 24).toFixed());
    let m = this.format(((seconds % 3600) / 60).toFixed());
    let s = this.format((((seconds % 3600) % 60)).toFixed());
    return h + ':' + m + ':' + s + ' ago';
  }

  format(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }
}

@Component({
  selector: 'dialog-result',
  templateUrl: 'dialog-privacy.html',
})
export class DialogResultComponent {
  constructor(public dialogRef: MdDialogRef<DialogResultComponent>) {}
}