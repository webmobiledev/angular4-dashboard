import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(private auth: AuthService, private activatedRoute: ActivatedRoute, private apiService: ApiService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      let code = params['validation_code'];
      let email = params['email'];
      auth.setConfirmParams(code, email);
    });
    this.getLocation();
    this.apiService.getGroups().then((data: any) => {
      this.apiService.groupCounts.next(typeof data.data !== 'undefined' ? data.data.length : 0);
    });
  }

  getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(res => {
          // this.auth.getLocation(res.coords.latitude, res.coords.longitude).then(res => {
          //   console.log(res);
          // });
        });
      }
  }
}
