import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'page-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class PageConfirmComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    console.log("aaaa");
    this.auth.validateEmail().then(res => {
      if (res === 'yes') {
        this.router.navigate(['/default-layout/dashboard']);
      }
    });
  }
}
