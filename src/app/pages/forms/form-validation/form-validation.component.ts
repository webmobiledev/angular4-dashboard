import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { SharedService } from '../../../layouts/shared-service';

const BREADCRUMBS: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Forms',
    link: '#'
  },
  {
    title: 'Form validation',
    link: ''
  }
];
const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class PageFormValidationComponent implements OnInit {
  pageTitle: string = 'Form validation';
  breadcrumb: any[] = BREADCRUMBS;
  public form: FormGroup;

  constructor( private fb: FormBuilder, private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      range: [null, Validators.compose([Validators.required, CustomValidators.range([5, 9])])],
      url: [null, Validators.compose([Validators.required, CustomValidators.url])],
      date: [null, Validators.compose([Validators.required, CustomValidators.date])],
      creditCard: [null, Validators.compose([Validators.required, CustomValidators.creditCard])],
      phone: [null, Validators.compose([Validators.required, CustomValidators.phone('en-US')])],
      gender: [null, Validators.required],
      password: password,
      confirmPassword: confirmPassword
    });
  }
}
