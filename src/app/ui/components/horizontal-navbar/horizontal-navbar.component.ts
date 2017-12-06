import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ApiService } from '../../../services/api.service';
import { LANGUAGES } from '../../../../settings/menu';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from 'ng2-translate';

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
  groupList = [];
  filteredGroup: any;
  groupCtrl: FormControl;
  username = '';
  photoUrl = '';
  
  constructor(private auth: AuthService, private apiService: ApiService, private dialog: MdDialog, private router: Router, private translate: TranslateService) {
    this.openedSidebar = false;
    this.showOverlay = false;
    this.groupCtrl = new FormControl();
    this.filteredGroup = this.groupCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));

    this.apiService.initHeaderGroup.subscribe(res => {
      this.groupCtrl.setValue('');      
    });

    this.auth.langCode.subscribe(code => {
      this.langCode = code;
      this.languages.map(l => {
        if (l.code === code) {
          this.langUrl = l.url;
        }
      });
      translate.use(this.langCode);
    });

    this.username = localStorage.getItem('username');
    this.photoUrl = localStorage.getItem('userphoto').substring(0, localStorage.getItem('userphoto').indexOf('.'));
  }

  ngOnInit() {
    this.apiService.groupCounts.subscribe(res => {
      this.apiService.getGroups().then((data: any) => {
        this.groupList = [];
        data.data.map(d => {
          this.groupList.push(d.name);
        });
      });
    });
  }

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

  openCreateGroupDialog() {
    let dialogRef = this.dialog.open(DialogGroupCreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        console.log("safasdf");
      } else {
        console.log("safasdfsdfsdaf");
      }
    });
  }

  goToGroup(group) {
    this.apiService.getGroups().then((data: any) => {
      data.data.map(d => {
        if (d.name === group) {
          this.apiService.groupId.next(d.id);
          this.apiService.isClickedDetails.next(true);
          this.router.navigate(['/default-layout/groups']);
        }
      });
    });
  }

  logout() {
    localStorage.setItem('login', 'false');
    localStorage.setItem('username', '');
    localStorage.setItem('userphoto', '');
    this.router.navigate(['/']);
  }
}

@Component({
  selector: 'group-create',
  templateUrl: 'group-create.html'
})
export class DialogGroupCreateComponent {
  public form: FormGroup;
  step = 'first';
  groupCounts = 0;
  groupTypes = [];
  currencies = [];
  psTypes = [];
  currencySigns = {USD: '$', GBP: '£', EUR: '€', ZEC: 'Z'};
  constructor(public dialogRef: MdDialogRef<DialogGroupCreateComponent>, private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      frequency: [null, Validators.compose([Validators.required])],
      grouptype: [null, Validators.compose([Validators.required])],
      pstype: [null, Validators.compose([Validators.required])],
      currency: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      amount: [null, Validators.compose([Validators.required])],
      rate: [null, Validators.compose([Validators.required])],
      duedate: [null, Validators.compose([Validators.required])],
      nbdpenal: [null, Validators.compose([Validators.required])],
      penalty: [null, Validators.compose([Validators.required])],
      minIndex: [0],
      maxIndex: [1000],
      smoothpayment: [true]
    });

    this.apiService.getListData('Currency').then((res: any) => {
      this.currencies = res.data;
    });

    this.apiService.getListData('GroupType').then((res: any) => {
      this.groupTypes = res.data;
    });

    this.apiService.getListData('PositionSelectionType').then((res: any) => {
      this.psTypes = res.data;
    });

    this.apiService.groupCounts.subscribe(res => {
      this.groupCounts = res;
    });
  }

  onSubmit() {
    this.dialogRef.close('yes');
    this.apiService.addGroup(this.form.value).then(res => {
      this.apiService.groupCounts.next(this.groupCounts + 1);
      this.apiService.groupCreated.next(true);
      this.router.navigate(['/default-layout/groups']);
    }).catch(err => {
      console.log(err);
    });
  }
}