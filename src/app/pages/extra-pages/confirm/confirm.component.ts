import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'page-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class PageConfirmComponent implements OnInit {
  email = '';

  constructor(private auth: AuthService, private router: Router) {
    this.email = localStorage.getItem('email');
  }

  ngOnInit() {
    this.auth.validateEmail().then(res => {
      console.log(res);
      if (res === 'yes') {
        localStorage.setItem('login', 'true');
        localStorage.setItem('confirm', 'false');
        this.router.navigate(['/default-layout/dashboard']);
      }
    });
  }
}
