import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'page-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class PageTransactionsComponent implements OnInit {
  pageTitle: string = 'transactions';
  breadcrumb = [{title: 'transactions'}];
  transactions = [];
  transactionHeaders = [];
  subscribeList: any = [];
  amounts = [];
  totalAmount = 0;
  isShowAmount = false;

  max = 5;
  page = 1;
  total = 0;
  loading = true;

  constructor( private _sharedService: SharedService, private apiService: ApiService, private dialog: MdDialog) {
    this._sharedService.emitChange(this.pageTitle);
    this.apiService.initHeaderGroup.next('');
  }

  ngOnInit() {
    this.getTransactions();
  }

  ngOnDestroy() {
  }

  getTransactions() {
    this.loading = true;
    this.transactions = [];
    this.transactionHeaders = ['Sender', 'Receiver', 'Amount', 'Creation Date', 'Payment Date', 'Status'];
    this.apiService.getTransactions(this.max, this.page).then((res: any) => {
      res.data.forEach(d => {
        this.transactions.push([d.sender, d.receiver, d.amount, d.creation_date, d.payment_date, d.status_text]);
      });
      this.total = res.count;
      this.loading = false;
    });
  }

  doRefresh(res) {
    this.getTransactions();
  }

  changePage(res) {
    this.max = res[0];
    this.page = res[1];
    this.getTransactions();
  }

  showAmount() {
    let dialogRef = this.dialog.open(DialogCheckPasswordComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ok') {
        this.apiService.getAmount().then((res: any) => {
          this.amounts = res.data;
          this.amounts.forEach(a => {
            this.totalAmount += parseInt(a.amount);
            this.isShowAmount = true;
          });
        });
      }
    });
  }
}

@Component({
  selector: 'dialog-check-password',
  templateUrl: 'dialog-check-password.html',
})
export class DialogCheckPasswordComponent {
  password = '';
  isPasswordCorrect = true;

  constructor(public dialogRef: MdDialogRef<DialogCheckPasswordComponent>, private apiService: ApiService, private authService: AuthService) {

  }
  
  checkPassword() {
    this.authService.checkPassword(this.password).then((res: any) => {
      console.log(res);
      if (res.password_valid) {
        this.dialogRef.close('ok');
      } else {
        this.isPasswordCorrect = false;
      }
    });
  }
}