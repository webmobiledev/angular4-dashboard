import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { ApiService } from '../../../services/api.service';

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

  constructor(
    private _sharedService: SharedService, 
    private api: ApiService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this._sharedService.emitChange(this.pageTitle);
    api.getUserInfo().then((res: any) => {
      console.log(res);
      this.userInfo = res.data[0];
      this.changeDetectorRef.detectChanges();
    });
    this.api.initHeaderGroup.next('');

    api.getListData('Country').then((res: any) => {
      this.countries = res.data;
    });
  }

  ngOnInit() {}

  selectCountry(type?) {
    if (type === 'ADDRESS') {
      this.api.getListData('State', this.userInfo.address_country).then((res: any) => {
        this.states = res.data;
      });
    } else {
      this.api.getListData('State', this.userInfo.country_of_birth).then((res: any) => {
        this.states = res.data;
      });
    }
  }

  selectState(type?) {
    if (type === 'ADDRESS') {
      this.api.getListData('Town', this.userInfo.address_country, this.userInfo.address_state).then((res: any) => {
        this.towns = res.data;
      });
    } else {
      this.api.getListData('Town', this.userInfo.country_of_birth, this.userInfo.state_of_birth).then((res: any) => {
        this.towns = res.data;
      });
    }
  }
}
