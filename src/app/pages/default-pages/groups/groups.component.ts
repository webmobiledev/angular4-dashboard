import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'page-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class PageGroupsComponent implements OnInit {
  pageTitle: string = 'groups';
  breadcrumb = [{title: 'groups'}];
  groups = [];
  groupHeaders = [];

  members = [];
  memberHeaders = [];
  obligations = [];
  obligationHeaders = [];
  requests = [];
  requestHeaders = [];
  events = [];
  eventHeaders = [];
  groupInfo = {};
  showGroupList = true;
  timelineData: any[] = [];
  
  constructor( private _sharedService: SharedService, private dialog: MdDialog, private apiService: ApiService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.showGroupList = true;
    this.apiService.showSpinner.next(true);
    this.apiService.isClickedDetails.subscribe(data => {
      if (data === true) {
        this.showGroupList = false;
      } else {
        this.showGroupList = true;
      }
    });

    this.apiService.groupCounts.subscribe(res => {
      this.apiService.getGroups().then((res: any) => {
        this.groups = [];
        this.groupHeaders = ['Group name', 'Creator', 'number of member', 'Amount', 'Currency', 'Creation Date', 'Description', 'Due date', 'Frequency Every x month(s)', 'Type', 'PS Type', 'Rate', {type: 'Action'}];
        res.data.map(d => {
          this.groups.push([d.name, d.creator, d.actual_nb_members, d.amount, d.currency, d.date_creation, d.description, d.due_day, d.frequency, d.g_type, d.position_selection_type, d.rate, {type: ['details'], id: d.id}]);
        });
      });
    });

    this.apiService.groupId.subscribe(data => {

      this.apiService.getGroups().then((res: any) => {
        res.data.map(d => {
          if (d.id === data) {
            this.breadcrumb = [];
            this.breadcrumb.push({title: this.pageTitle});
            this.breadcrumb.push({title: d.name});
          }
        });
        this.apiService.showSpinner.next(false);
      });
      
      this.apiService.getGroupMembers().then((res: any) => {
        this.members = [];
        this.memberHeaders = ['Name', 'Email', 'Type', 'Picture', 'Position', 'Date', {type: 'Action'}];
        res.data.map(d => {
          this.members.push([d.first_name, d.email, d.member_type, d.photo_path, d.position, d.user_position_date, {type: ['remove'], id: d.id}]);
        });
        this.apiService.showSpinner.next(false);
      });

      this.apiService.getGroupObligations().then((res: any) => {
        this.obligations = [];
        this.obligationHeaders = ['From', 'To', 'Group', 'Currency', 'Amount', 'Date', 'Status', 'Type', {type: 'Action'}];
        res.data.map(d => {
          this.obligations.push([d.from, d.to, d.group, d.currency, d.projected_amount_due, d.projected_payment_due_date, d.status, d.type, {type: ['paynow'], id: d.id}]);
        });
        this.apiService.showSpinner.next(false);
      });

      this.apiService.getGroupRequests().then((res: any) => {
        this.requests = [];
        this.requestHeaders = ['Sender', 'Receiver', 'Group', 'Type', 'Status', 'Date'];
        res.data.map(d => {
          this.requests.push([d.sender, d.receiver, d.group, d.request_type, d.request_status, d.request_date]);
        });
        this.apiService.showSpinner.next(false);
      });

      this.apiService.getGroupEvents().then((res: any) => {
        this.events = [];
        this.eventHeaders = ['Type', 'Initiator', 'Group', 'Date'];
        res.data.map(d => {
          this.events.push([d.event_type, d.initiator, d.group, d.date_event]);
        });
        this.apiService.showSpinner.next(false);
      });

      this.apiService.getGroupInfo().then((res: any) => {
        console.log(res);
        this.groupInfo = res.data[0];
      });
    });

    this.apiService.getTimelineData().then((data: any) => {
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

  ngOnDestroy() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogAddMemberComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
      } else {
      }
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
  selector: 'dialog-add-member',
  templateUrl: 'dialog-add-member.html',
})
export class DialogAddMemberComponent {
  member = '';
  constructor(public dialogRef: MdDialogRef<DialogAddMemberComponent>, private apiService: ApiService) {

  }
  addMember() {
    this.dialogRef.close();
    this.apiService.addMember(this.member).then(res => {
    });
  }
}