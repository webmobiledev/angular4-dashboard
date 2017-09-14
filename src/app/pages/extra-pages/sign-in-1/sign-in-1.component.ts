import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TranslateService } from 'ng2-translate';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'page-sign-in-1',
  templateUrl: './sign-in-1.component.html',
  styleUrls: ['./sign-in-1.component.scss']
})
export class PageSignIn1Component implements OnInit {
  public form: FormGroup;
  languages = [
    {code: 'en', value: 'English'},
    {code: 'fr', value: 'French'},
    {code: 'pt', value: 'Portuguese'},
    {code: 'es', value: 'Spanish'}
  ];

  constructor(private router: Router, private auth: AuthService, private fb: FormBuilder, private translate: TranslateService) {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      langCode: ['en']
    });

    translate.addLangs(['en', 'fr', 'es', 'pt']);
    translate.setDefaultLang('en');
    translate.use('en');
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
    });
  }
}
