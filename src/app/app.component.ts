import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TranslateService } from 'ng2-translate';

@Component({
  moduleId: module.id,
  selector: 'app',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(private auth: AuthService, private translate: TranslateService) {
    auth.getConfirmParams(window.location.href);
    translate.addLangs(['en', 'fr', 'es', 'pt']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
