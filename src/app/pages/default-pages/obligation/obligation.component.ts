import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'

@Component({
  selector: 'app-obligation',
  templateUrl: './obligation.component.html',
  styleUrls: ['./obligation.component.scss']
})
export class PageObligationComponent implements OnInit {
  breadcrumb = [{title: 'Obligation'}];
  obligations = [];
  obligationHeaders = [];
  subscribeList: any = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.showSpinner.next(true);
    this.getGroupObligations();
  }

  ngOnDestroy() {
    this.subscribeList.map(d => {
      d.unsubscribe();
    });
  }

  getGroupObligations() {
    this.obligations = [];
    this.obligationHeaders = ['From', 'To', 'Group', 'Currency', 'Amount', 'Date', 'Status', 'Position selection', {type: 'Action'}];
    this.apiService.getGroupObligations().then((res: any) => {
      this.obligations = [];
      res.data.map(d => {
        this.obligations.push([d.from, d.to, d.group, d.currency, d.projected_amount_due, d.projected_payment_due_date, d.status_text, d.p_type_text, {type: ['paynow'], id: d.id}]);
      });
      this.apiService.showSpinner.next(false);
    });
  }

  doRefresh(res) {
    this.getGroupObligations();
  }

  changePage(res) {

  }
}
