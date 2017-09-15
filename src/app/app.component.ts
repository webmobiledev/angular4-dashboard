import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(private auth: AuthService) {
    auth.getConfirmParams(window.location.href);
  }
}
