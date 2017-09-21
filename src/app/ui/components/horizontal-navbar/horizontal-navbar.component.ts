import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { LANGUAGES } from '../../../../settings/menu';
import { FormControl } from '@angular/forms';

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
  langUrl = 'flag-uk.png';
  groupList = ['1', '2', '3', '4', '5', '6', '7'];
  filteredGroup: any;
  groupCtrl: FormControl;
  
  constructor(private auth: AuthService) {
    this.openedSidebar = false;
    this.showOverlay = false;
    this.groupCtrl = new FormControl();
    this.filteredGroup = this.groupCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));

    this.auth.langCode.subscribe(code => {
      this.langCode = code;
      this.languages.map(l => {
        if (l.code === code) {
          this.langUrl = l.url;
        }
      });
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

  changeLanguage(code) {
    this.langCode = code;
    this.auth.changeLanguage(this.langCode);
  }

  filterStates(val: string) {
    return val ? this.groupList.filter((s) => new RegExp(val, 'gi').test(s)) : this.groupList;
  }
}
