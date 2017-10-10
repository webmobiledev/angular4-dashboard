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
  userRequests: any;
  nextPayment: any;
  nextPaymentHeader: any;
  timelineData: any[] = [];
  userPages = 0;
  nextPages = 0;
  breadcrumb = [{title: 'dashboard'}];

  constructor( private _sharedService: SharedService, private apiService: ApiService, private dialog: MdDialog ) {
    this._sharedService.emitChange(this.pageTitle);

    apiService.getUserRequest().then((data: any) => {
      this.userRequests = data.data;
      console.log(data.data);
      this.userPages = this.userRequests.length / 10 + 1;
    });

    apiService.getNextPayment().then((data: any) => {
      this.nextPayment = [];
      this.nextPaymentHeader = ['To', 'Amount', 'Date'];
      data.data.map(d => {
        this.nextPayment.push([d.to, d.projected_amount_due, d.projected_payment_due_date]);
      });
      this.nextPages = this.nextPayment.length / 10 + 1;
    });

    apiService.getTimelineData().then((data: any) => {
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