import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { AuthService } from '../../../services/auth.service';
import { LANGUAGES } from '../../../../settings/menu';

@Component({
  moduleId: module.id,
  selector: 'horizontal-navbar',
  templateUrl: 'horizontal-navbar.component.html',
  styleUrls: ['horizontal-navbar.component.scss'],
  host: {
    '[class.app-navbar]': 'true',
    '[class.show-overlay]': 'showOverlay'
  }
})
export class HorizontalNavbarComponent implements OnInit {
  @Input() title: string;
  @Input() openedSidebar: boolean;
  @Output() sidebarState = new EventEmitter();
  showOverlay: boolean;
  languages = LANGUAGES;
  langCode = 'en';
  groupList = ['First', 'Second'];

  constructor(private translate: TranslateService, private auth: AuthService) {
    this.openedSidebar = false;
    this.showOverlay = false;
    translate.use('en');

    this.auth.langCode.subscribe(code => {
      translate.use(code);
      this.langCode = code;
    });
  }

  ngOnInit() {}

  open(event) {
    let clickedComponent = event.target.closest('.nav-item');
    let items = clickedComponent.parentElement.children;

    event.preventDefault();

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('opened');
    }
    clickedComponent.classList.add('opened');

    this.showOverlay = true;
  }

  close(event) {
    let clickedComponent = event.target;
    let items = clickedComponent.parentElement.children;

    event.preventDefault();

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('opened');
    }

    this.showOverlay = false;
  }

  openSidebar() {
    this.openedSidebar = !this.openedSidebar;
    this.sidebarState.emit();
  }

  changeLanguage() {
    this.translate.use(this.langCode);
    this.auth.changeLanguage(this.langCode);
  }
}
