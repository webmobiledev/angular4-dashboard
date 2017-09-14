import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { TranslateService } from 'ng2-translate';

import { AuthService } from '../../../services/auth.service';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'page-sign-up-1',
  templateUrl: './sign-up-1.component.html',
  styleUrls: ['./sign-up-1.component.scss']
})
export class PageSignUp1Component implements OnInit {
  public form: FormGroup;
  languages = [
    {code: 'en', value: 'English'},
    {code: 'fr', value: 'French'},
    {code: 'pt', value: 'Portuguese'},
    {code: 'es', value: 'Spanish'}
  ];

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private dialog: MdDialog, private translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'es', 'pt']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.auth.isConfirm = false;
    this.auth.isLogged = false;
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      gender: [null, Validators.required],
      agree: [null, Validators.requiredTrue],
      password: password,
      confirmPassword: confirmPassword
    });
  }

  onSubmit() {
    this.auth.signup(this.form.value).then(data => {
      console.log(data);
      this.router.navigate(['/extra-layout/confirm']);
    });
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result === 'yes') {
        this.form.patchValue({agree: true});
      } else {
        this.form.patchValue({agree: false});
      }
    });
  }
}

@Component({
  selector: 'dialog-result',
  templateUrl: 'dialog-result.html',
})
export class DialogResultComponent {
  constructor(public dialogRef: MdDialogRef<DialogResultComponent>) {}
}