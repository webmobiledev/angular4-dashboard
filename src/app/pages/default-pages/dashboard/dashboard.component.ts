import { Component, OnInit, OnChanges } from '@angular/core';
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
  userRequests: any = [];
  userRequestHeader: any = [];
  nextPayment: any = [];
  nextPaymentHeader: any = [];
  timelineData: any[] = [];
  userPages = 0;
  nextPages = 0;
  breadcrumb = [{title: 'dashboard'}];

  constructor( private _sharedService: SharedService, private apiService: ApiService, private dialog: MdDialog ) {
    this._sharedService.emitChange(this.pageTitle);

    this.getRequests();
    this.getNextPayments();
    this.getTimeLineData();

    this.apiService.refreshIndex.subscribe(res => {
      if (res === 1) {
        this.getRequests();
      } else if (res === 2) {
        this.getNextPayments();
      } else if (res === 3) {
        this.getTimeLineData();
      }
    });
  }

  getDuration(seconds) {
    let d = this.format(((seconds / 3600) / 24).toFixed());
    let h = this.format(((seconds / 3600) % 24).toFixed());
    let m = this.format(((seconds % 3600) / 60).toFixed());
    let s = this.format((((seconds % 3600) % 60)).toFixed());
    let day = '';
    if (d == 1) {
      day = 1 + ' day ';
    } else if (d > 1) {
      day = d + ' days ';
    }
    return day + h + ' hours ' + m + ' mins ' + s + ' secs ago';
  }

  format(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }

  showDialog(type, user) {
    let dialogRef = this.dialog.open(DialogAcceptAndRejectComponent);
    dialogRef.componentInstance.id = user.id;
    dialogRef.componentInstance.groupId = user.group_id;
    dialogRef.componentInstance.type = type;
    dialogRef.componentInstance.requestType = user.request_type;
    dialogRef.componentInstance.groupRotationType = user.group_rotation_type;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
      } else {
      }
    });
  }

  getRequests() {
    this.userRequests = [];
    this.userRequestHeader = ['Type', 'From', 'Group', {type: 'Action'}];
    this.apiService.getUserRequest().then((data: any) => {
      data.data.map(d => {
        this.userRequests.push([d.request_type_text, d.sender, d.group, {type: ['Accept', 'Reject'], id: d.id}]);
      });
      this.userPages = this.userRequests.length / 10 + 1;
    });
  }

  getNextPayments() {
    this.nextPayment = [];
    this.nextPaymentHeader = ['Type', 'Amount', 'To', 'Date', {type: 'Action'}];
    this.apiService.getNextPayment().then((data: any) => {
      data.data.map(d => {
        this.nextPayment.push([d.p_type_text, d.projected_amount_due, d.to, d.projected_payment_due_date, {type: ['paynow'], id: d.id}]);
      });
      this.nextPages = this.nextPayment.length / 10 + 1;
    });
  }

  getTimeLineData() {
    this.timelineData = [{
      label: '2017',
      timeline: []
    }];
    this.apiService.getTimelineData().then((data: any) => {
      data.data.map(d => {
        this.timelineData[0].timeline.push({date: this.getDuration(d.duration_seconds), content: d.event_type === 'GROUP_CREATED' ? 'A new group has been created' : 'A new request to join group has been created', pointColor: '#FFC6F1'});
      });
    });
  }
}

@Component({
  selector: 'accept-reject-modal',
  templateUrl: 'accept-reject-modal.html',
})
export class DialogAcceptAndRejectComponent {
  id = '';
  groupId = '';
  type = '';
  positions = [];
  comment = '';
  groupRotationType = '';
  requestType = '';
  constructor(public dialogRef: MdDialogRef<DialogAcceptAndRejectComponent>, private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getGroupTakenPositions(this.groupId).then((res: any) => {
      this.positions = res.taken_rotation_positions;
    });
  }

  validate(type) {
    if (type === 'accept') {
      this.apiService.validateAccept(this.id).then((res: any) => {
        if (res.status === 'ok') {
          this.dialogRef.close();
        }
      });
    } else {
      this.apiService.validateReject(this.id, this.comment).then((res: any) => {
        if (res.status === 'ok') {
          console.log(res);
          this.dialogRef.close();
        }
      });
    }
  }
}