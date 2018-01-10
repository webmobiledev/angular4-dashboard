import { Component, OnInit, Input, EventEmitter, Output, Inject } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { NiDialogComponent } from '../ni-dialog/ni-dialog.component';

@Component({
  selector: 'ni-table',
  templateUrl: './ni-table.component.html',
  styleUrls: ['./ni-table.component.scss'],
  host: {
    '[class.ni-table]': 'true'
  }
})
export class NiTableComponent implements OnInit {
  @Input() headers: any = [];
  @Input() data: any = [] ;
  @Output() showRequestDialog = new EventEmitter();
  @Output() showAlert = new EventEmitter();

  constructor(private apiService: ApiService, private dialog: MdDialog) {
  }

  ngOnInit() {
  }

  changePage(id) {
    this.apiService.showSpinner.next(true);
    this.apiService.isClickedDetails.next(true);
    this.apiService.groupId.next(id);
  }

  showDialog(groupId) {
    this.showRequestDialog.emit(groupId);
  }

  removeUser(memberId) {
    let dialogRef = this.dialog.open(NiDialogComponent, {
      data: {
        content: 'Do you really want to remove this member?',
        okText: 'Yes',
        cancelText: 'Cancel'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ok') {
        this.apiService.removeUser(memberId).then((res: any) => {
          if (res.status === 'yes') {
            this.showAlert.emit({status: 'ok', text: 'Removing member'});
          } else {
            this.showAlert.emit({status: 'cancel', text: 'Removing member'});
          }
        });
      } else {
        this.showAlert.emit({status: 'cancel', text: 'Removing member'});
      }
    });
  }

  showPayDialog(data) {
    let dialogRef = this.dialog.open(DialogPaymentComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.showAlert.emit({status: result, text: 'Paying obligation'});
    });
  }
}

@Component({
  selector: 'dialog-payment',
  templateUrl: './dialog-payment/dialog-payment.html',
  styleUrls: ['./dialog-payment/dialog-payment.scss']
})
export class DialogPaymentComponent {

  pageNum = 1;
  selectedType = 1;

  constructor(
    public dialogRef: MdDialogRef<DialogPaymentComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,
    public apiService: ApiService
  ) {
    
  }

  sendApproval() {
    this.apiService.sendApproval(this.data.id).then((res: any) => {
      if (res.request_added === 'yes') {
        this.dialogRef.close('ok');
      } else {
        this.dialogRef.close('cancel');
      }
    });
  }
}