import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { SharedService } from '../../../layouts/shared-service';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'page-rollinvest',
  templateUrl: './rollinvest.component.html',
  styleUrls: ['./rollinvest.component.scss']
})
export class PageRollinvestComponent implements OnInit {
  pageTitle = 'rollinvest';
  breadcrumb = [{title: 'rollinvest'}];
  currencySigns = {USD: '$', GBP: '£', EUR: '€', ZEC: 'Z'};
  groupTypes = [];
  currencies = [];
  psTypes = [];
  public form: FormGroup;

  constructor( private _sharedService: SharedService, private fb: FormBuilder, private apiService: ApiService, private auth: AuthService ) {
    this._sharedService.emitChange(this.pageTitle);

    this.form = fb.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
      frequency: [null, Validators.required],
      base_currency: [null, Validators.required],
      ps_type: [null, Validators.required],
      min_amount: [10, Validators.compose([Validators.required, Validators.min(10), Validators.max(9000)])],
      max_amount: [100, Validators.compose([Validators.required, Validators.min(100), Validators.max(10000)])],
      min_credit: [0, Validators.compose([Validators.required, Validators.min(0), Validators.max(999)])],
      max_credit: [100, Validators.compose([Validators.required, Validators.min(100), Validators.max(1000)])],
      min_rate: [0, Validators.compose([Validators.required, Validators.min(0), Validators.max(29)])],
      max_rate: [1, Validators.compose([Validators.required, Validators.min(1), Validators.max(30)])],
    },
    {
      validator: this.checkMaxRateAndMinRate
    });
  }

  ngOnInit() {
    this.auth.langCode.subscribe(code => {
      this.getData();
    });
  }

  checkMaxRateAndMinRate (c: AbstractControl) {
    if ((c.get('max_rate').value < c.get('min_rate').value) || (c.get('max_credit').value < c.get('min_credit').value)) {
      console.log(c.get('max_rate').value, c.get('min_rate').value);
      return false;
    }
  }

  getData() {
    this.apiService.getListData('Currency').then((res: any) => {
      this.currencies = res.data;
    });

    this.apiService.getListData('GroupType').then((res: any) => {
      this.groupTypes = res.data;
    });
  }

  search() {
    this.apiService.search(this.form.value).then(res => {
      console.log(res);
    });
  }
}
