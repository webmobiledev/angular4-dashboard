import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(private auth: AuthService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      let code = params['validation_code'];
      let email = params['email'];
      auth.setConfirmParams(code, email);
    });
    this.getLocation();
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
