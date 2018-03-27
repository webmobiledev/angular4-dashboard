import { ChangeDetectorRef, Component, OnInit, Inject } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { ApiService } from '../../../services/api.service';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'page-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class PageProfileComponent implements OnInit {
  pageTitle: string = 'profile';
  breadcrumb = [{title: 'profile'}];
  gender = '';
  userInfo: any = {};
  countries = [];
  states = [];
  towns = [];

  bankData = [];
  bankHeaders = [];
  bankMax = 5;
  bankPage = 1;
  bankTotal = 0;
  loadingBank = false;

  koriData = [];
  koriHeaders = [];
  koriMax = 5;
  koriPage = 1;
  koriTotal = 0;
  loadingKori = false;

  constructor(
    private _sharedService: SharedService, 
    private apiService: ApiService,
    private changeDetectorRef: ChangeDetectorRef,
    private dialog: MdDialog,
  ) {
    this._sharedService.emitChange(this.pageTitle);
    apiService.getUserInfo().then((res: any) => {
      console.log(res);
      this.userInfo = res.data[0];
      this.changeDetectorRef.detectChanges();
    });
    this.apiService.initHeaderGroup.next('');

    apiService.getListData('Country').then((res: any) => {
      this.countries = res.data;
    });
  }

  ngOnInit() {
    this.getAddresses();
  }

  selectCountry(type?) {
    if (type === 'ADDRESS') {
      this.apiService.getListData('State', this.userInfo.address_country).then((res: any) => {
        this.states = res.data;
      });
    } else {
      this.apiService.getListData('State', this.userInfo.country_of_birth).then((res: any) => {
        this.states = res.data;
      });
    }
  }

  selectState(type?) {
    if (type === 'ADDRESS') {
      this.apiService.getListData('Town', this.userInfo.address_country, this.userInfo.address_state).then((res: any) => {
        this.towns = res.data;
      });
    } else {
      this.apiService.getListData('Town', this.userInfo.country_of_birth, this.userInfo.state_of_birth).then((res: any) => {
        this.towns = res.data;
      });
    }
  }

  addIBAN() {
    let dialogRef = this.dialog.open(DialogAddIbanComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ok') {
        
      }
    });
  }

  getAddresses(type?) {
    if (type === 'kori') {
      this.loadingKori = true;
      this.koriData = [];
      this.koriHeaders = ['Account Permission', 'Public Address', {type: 'Action'}];
    } else if (type === 'bank') {
      this.loadingBank = true;
      this.bankData = [];
      this.bankHeaders = ['Account Permission', 'IBAN', 'County', 'Bic', {type: 'Action'}];
    } else {
      this.loadingKori = true;
      this.koriData = [];
      this.koriHeaders = ['Account Permission', 'Public Address', {type: 'Action'}];
      this.loadingBank = true;
      this.bankData = [];
      this.bankHeaders = ['Account Permission', 'IBAN', 'County', 'Bic', {type: 'Action'}];
    }
    this.apiService.getUserPaymentMeans().then((res: any) => {
      console.log(res);
      if (type === 'kori') {
        res.kori.forEach(k => {
          this.koriData.push([k.account_permission_text, k.address, {type: ['Update permission', 'Remove payment mean']}]);
        });
        this.koriTotal = this.koriData.length;
        this.loadingKori = false;
      } else if (type === 'bank') {
        res.bank.forEach(b => {
          this.bankData.push([b.account_permission_text, b.iban, b.country, b.bic, {type: ['Update permission', 'Remove payment mean']}]);
        });
        this.bankTotal = this.bankData.length;
        this.loadingBank = false;
      } else {
        res.kori.forEach(k => {
          this.koriData.push([k.account_permission_text, k.address, {type: ['Update permission', 'Remove payment mean']}]);
        });
        this.koriTotal = this.koriData.length;
        this.loadingKori = false;
        res.bank.forEach(b => {
          this.bankData.push([b.account_permission_text, b.iban, b.country, b.bic, {type: ['Update permission', 'Remove payment mean']}]);
        });
        this.bankTotal = this.bankData.length;
        this.loadingBank = false;
      }
    });
  }

  doRefreshKori(event) {
    this.getAddresses('kori');
  }

  doRefreshBank(event) {
    this.getAddresses('bank');
  }

  changeKoriPage(event) {

  }

  changeBankPage(event) {
    
  }

  update(section) {
    let dialogRef = this.dialog.open(DialogUpdateProfileComponent, {data: section});
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ok') {
        
      }
    });
  }
}

@Component({
  selector: 'add-iban-dialog',
  templateUrl: './dialog-add-iban/dialog-add-iban.html',
  styleUrls: ['./dialog-add-iban/dialog-add-iban.scss']
})
export class DialogAddIbanComponent {
  mean = {
    iban: '',
    bic: '',
    country: ''
  };

  countries = [];
  constructor(
    private apiService: ApiService,
    public dialogRef: MdDialogRef<DialogAddIbanComponent>
  ) {
    this.apiService.getListData('Country').then((res: any) => {
      this.countries = res.data;
    });
  }

  add() {
    this.apiService.addIban(this.mean).then(res => {
      this.dialogRef.close('ok');
    }).catch(err => {
      this.dialogRef.close('cancel');
    });
  }
}


@Component({
  selector: 'update-profile-dialog',
  templateUrl: './dialog-update-profile/dialog-update-profile.html',
  styleUrls: ['./dialog-update-profile/dialog-update-profile.scss']
})
export class DialogUpdateProfileComponent {
  userInfo = {};
  gender = '';
  section = '';
  permissions = [];

  constructor(
    private apiService: ApiService,
    public dialogRef: MdDialogRef<DialogAddIbanComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) {
    this.section = data;

    apiService.getUserInfo().then((res: any) => {
      let user = res.data[0];
      this.userInfo = {
        first_name: user.user_full_name.first_name,
        middle_name: user.user_full_name.middle_name,
        sur_name: user.user_full_name.sur_name,
        photo_path: user.user_full_name.photo_path,
        gender: user.user_full_name.gender,
        field_permission: user.user_full_name.field_permission,
        contact_home_phone: user.user_phones.contact_home_phone,
        contact_mobile_phone: user.user_phones.contact_mobile_phone,
        contact_office_phone: user.user_phones.contact_office_phone,
        email: user.user_email.email,
        password: '',
        country_of_birth: user.user_birth_info.country_of_birth,
        date_of_birth: user.user_birth_info.date_of_birth,
        state_of_birth: user.user_birth_info.state_of_birth,
        town_of_birth: user.user_birth_info.town_of_birth,
        occupation: user.user_work_info.occupation,
        occupation_sector: user.user_work_info.occupation_sector,
        yearly_income: user.user_work_info.yearly_income,
      };
    });

    apiService.getPermission('AccountPermission').then((res: any) => {
      this.permissions = res.data;
    });
  }

  update() {
    this.apiService.updateUser(this.userInfo).then((res: any) => {
      this.dialogRef.close('ok');
    });
  }
}