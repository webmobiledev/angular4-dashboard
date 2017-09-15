import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TranslateService } from 'ng2-translate';

import { AuthService } from '../../../services/auth.service';
import { LANGUAGES } from '../../../../settings/menu';

@Component({
  selector: 'page-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class PageSigninComponent implements OnInit {
  public form: FormGroup;
  languages = LANGUAGES;

  constructor(private router: Router, private auth: AuthService, private fb: FormBuilder, private translate: TranslateService) {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      langCode: ['en']
    });

    this.auth.langCode.subscribe(code => {
      translate.use(code);
    });
  }

  ngOnInit() {
    this.auth.isConfirm = false;
    this.auth.isLogged = false;
  }

  onSubmit() {
    this.auth.login(this.form.value).then(res => {
      if (res === 'yes') {
        this.router.navigate(['/default-layout/dashboard']);
      }
    });
  }

  changeLanguage() {
    this.form.controls.langCode.valueChanges.subscribe(d => {
      this.translate.use(d);
      this.auth.changeLanguage(d);
    });
  }

  goSignupPage() {
    this.auth.redirectPage = 'signup';
    this.router.navigate(['/extra-layout/sign-up']);
  }

  goForgotPage() {
    this.auth.redirectPage = 'forgot';
    this.router.navigate(['/extra-layout/forgot']);
  }
}
