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
  breadcrumb = [];
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
  
  constructor( private _sharedService: SharedService, private dialog: MdDialog, private apiService: ApiService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.showGroupList = true;
    this.apiService.isClickedDetails.subscribe(data => {
      if (data === true) {
        this.showGroupList = false;
      } else {
        this.showGroupList = true;
      }
    });

    this.apiService.groupId.subscribe(data => {

      this.apiService.getGroups().then((res: any) => {
        this.groups = [];
        this.groupHeaders = ['Group name', 'nb members', 'Creator', 'Actual nb members', 'Amount', 'Currency', 'Creation Date', 'Description', 'Due date', 'Frequency', 'Type', 'PS Type', 'Rate', {type: 'Action'}];
        res.data.map(d => {
          if (d.id === data) {
            this.breadcrumb = [];
            this.breadcrumb.push({title: this.pageTitle});
            this.breadcrumb.push({title: d.name});
          }
          this.groups.push([d.name, d.nb_members, d.creator, d.actual_nb_members, d.amount, d.currency, d.date_creation, d.description, d.due_day, d.frequency, d.g_type, d.position_selection_type, d.rate, {type: ['details'], id: d.id}]);
        });
      });
      
      this.apiService.getGroupMembers().then((res: any) => {
        this.members = [];
        this.memberHeaders = ['Name', 'Email', 'Type', 'Picture', 'Position', 'Date', {type: 'Action'}];
        res.data.map(d => {
          this.members.push([d.first_name, d.email, d.member_type, d.photo_path, d.position, d.user_position_date, {type: ['remove'], id: d.id}]);
        });
      });

      this.apiService.getGroupObligations().then((res: any) => {
        this.obligations = [];
        this.obligationHeaders = ['From', 'To', 'Group', 'Currency', 'Amount', 'Date', 'Status', 'Type', {type: 'Action'}];
        res.data.map(d => {
          this.obligations.push([d.from, d.to, d.group, d.currency, d.projected_amount_due, d.projected_payment_due_date, d.status, d.type, {type: ['paynow'], id: d.id}]);
        });
      });

      this.apiService.getGroupRequests().then((res: any) => {
        this.requests = [];
        this.requestHeaders = ['Sender', 'Receiver', 'Group', 'Type', 'Status', 'Date'];
        res.data.map(d => {
          this.requests.push([d.sender, d.receiver, d.group, d.request_type, d.request_status, d.request_date]);
        });
      });

      this.apiService.getGroupEvents().then((res: any) => {
        this.events = [];
        this.eventHeaders = ['Type', 'Initiator', 'Group', 'Date'];
        res.data.map(d => {
          this.events.push([d.event_type, d.initiator, d.group, d.date_event]);
        });
      });

      this.apiService.getGroupInfo().then((res: any) => {
        this.groupInfo = res.data[0];
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
}

@Component({
  selector: 'dialog-add-member',
  templateUrl: 'dialog-add-member.html',
})
export class DialogAddMemberComponent {
  member: string;
  constructor(public dialogRef: MdDialogRef<DialogAddMemberComponent>, private apiService: ApiService) {

  }
  addMember() {
    this.dialogRef.close();
    this.apiService.addMember(this.member).then(res => {
    });
  }
}