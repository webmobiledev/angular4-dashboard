import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'

@Component({
  selector: 'app-obligation',
  templateUrl: './obligation.component.html',
  styleUrls: ['./obligation.component.scss']
})
export class PageObligationComponent implements OnInit {
  breadcrumb = [{title: 'groups'}];
  obligations = [];
  obligationHeaders = [];
  page = 0;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.showSpinner.next(true);
    this.apiService.groupId.subscribe(data => {
      this.getGroupObligations();
    });
  }

  getGroupObligations() {
    this.obligations = [];
    this.obligationHeaders = ['From', 'To', 'Group', 'Currency', 'Amount', 'Date', 'Status', 'Type', {type: 'Action'}];
    this.apiService.getGroupObligations().then((res: any) => {
      res.data.map(d => {
        this.obligations.push([d.from, d.to, d.group, d.currency, d.projected_amount_due, d.projected_payment_due_date, d.status, d.type, {type: ['paynow'], id: d.id}]);
      });
      this.page = this.obligations.length / 10 + 1;
      this.apiService.showSpinner.next(false);
    });
  }
  
  doRefresh() {
    this.getGroupObligations();
  }
}
