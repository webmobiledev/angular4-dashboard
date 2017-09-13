import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../layouts/shared-service';

@Component({
  selector: 'page-sign-in-2',
  templateUrl: './sign-in-2.component.html',
  styleUrls: ['./sign-in-2.component.scss']
})
export class PageSignIn2Component implements OnInit {
  pageTitle: string = 'Sign In';

  constructor( private router: Router, private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}

  onSubmit() {
    this.router.navigate(['/default-layout/dashboard']);
  }
}
