import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/Rx';
import { AuthService } from './auth.service';

@Injectable()
export class ApiService {
  groupId = new BehaviorSubject('');
  groupCounts = new BehaviorSubject(0);
  isClickedDetails = new BehaviorSubject(false);
  showSpinner = new BehaviorSubject(false);
  groupCreated = new BehaviorSubject(false);
  initHeaderGroup = new BehaviorSubject('');

  langCode = 'ENG';
  isMenuClicked = false;
  groupList: any = [];

  constructor(private http: Http, private auth: AuthService) {
    this.auth.langCode.subscribe(res => {
      switch (res) {
        case 'en':
          this.langCode = 'ENG';
          break;
        case 'fr':
          this.langCode = 'FRE';
          break;
        case 'pt':
          this.langCode = 'POR';
          break;
        case 'es':
          this.langCode = 'SPA';
          break;
      }
    });
  }

  getUserInfo() {
    const url = environment.serverUrl + 'user';
    const params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getUserRequest(max, page, status?) {
    const url = environment.serverUrl + 'user/requests';
    const params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', max);
    params.set('page', page);
    if (status) {
      params.set('status_code', status);
    }
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getNextPayment(max, page, status?) {
    const url = environment.serverUrl + 'user/obligations';
    const params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', max);
    params.set('page', page);
    if (status) {
      params.set('status_code', status);
    }
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getTimelineData() {
    const url = environment.serverUrl + 'group/events';
    const params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', '5');
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getGroups(max, page) {
    const url = environment.serverUrl + 'groups';
    const params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', max);
    params.set('page', page);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getGroupInfo() {
    const url = environment.serverUrl + 'group';
    const params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      params.set('lang', this.langCode);
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  addOrUpdateGroup(group, type) {
    var url = environment.serverUrl + 'groups/add';

    if (type === 'update') {
      url = environment.serverUrl + 'group/update';
    }

    const params: URLSearchParams = new URLSearchParams();
    if (group.g_type === 'PRIVATE') {
      params.set('type_code', 'PRIVATE');
    } else if (group.g_type === 'PUBLIC') {
      params.set('type_code', 'PUBLIC');
      if (type === 'add') {
        params.set('min_index', group.index_credit_min);
        params.set('max_index', group.index_credit_max);
      }
    }

    if (group.rate > 0 && type === 'add') {
      params.set('smooth_payment', group.smooth_payment);
    }

    if (type === 'update') {
      params.set('number_of_members', group.nb_members);
    }

    params.set('name', group.name);
    params.set('rate', group.rate);
    params.set('description', group.description);
    params.set('amount', group.amount);
    params.set('due_day', group.due_day);
    params.set('currency_code', group.currency);
    params.set('number_of_days_before_penalty', group.nb_days_delay_before_penalty);
    params.set('delay_payment_penalty', group.delay_payment_penalty);
    params.set('frequency', group.frequency);
    params.set('position_selection_type_code', group.position_selection_type);
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getListData(data, country?, state?) {
    const url = environment.serverUrl + 'lists';
    const params: URLSearchParams = new URLSearchParams();
    params.set('data', data);
    if (country) {
      params.set('country', country);
    }
    if (state) {
      params.set('state', state);
    }
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  addMember(member) {
    const url = environment.serverUrl + 'group/users/add';
    const params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('email_list', member);
      params.set('lang', this.langCode);
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  cloneGroup() {
    const url = environment.serverUrl + 'group/clone';
    const params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    params.set('token', localStorage.getItem('token'));
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  getGroupMembers(max, page) {
    const url = environment.serverUrl + 'group/members';
    const params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', max);
    params.set('page', page);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  getGroupObligations(max, page) {
    const url = environment.serverUrl + 'group/obligations';
    const params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', max);
    params.set('page', page);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  getGroupRequests(max, page) {
    const url = environment.serverUrl + 'group/requests';
    const params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', max);
    params.set('page', page);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  getGroupEvents(max, page) {
    const url = environment.serverUrl + 'group/events';
    const params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    params.set('max', max);
    params.set('page', page);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  getGroupTakenPositions(groupId) {
    const url = environment.serverUrl + 'group/positions/available';
    const params: URLSearchParams = new URLSearchParams();
    return new Promise((resolve, reject) => {
      params.set('group_id', groupId);
      params.set('lang', this.langCode);
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  answerRequest(id, type) {
    const url = environment.serverUrl + 'group/requests/answer';
    const params: URLSearchParams = new URLSearchParams();
    return new Promise((resolve, reject) => {
      params.set('code', type);
      params.set('request_id', id);
      params.set('lang', this.langCode);
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe((res: any) => {
        console.log(res._body);
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  startGroup(date) {
    const url = environment.serverUrl + 'group/start';
    const params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      params.set('first_payment_date', date);
      params.set('lang', this.langCode);
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  forceStartGroup(date) {
    const url = environment.serverUrl + 'force_start_group';
    const params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      params.set('first_payment_date', date);
      params.set('lang', this.langCode);
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  removeUser(memberId) {
    const url = environment.serverUrl + 'group/users/remove';
    const params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    params.set('member_id', memberId);
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  removeAll() {
    const url = environment.serverUrl + 'group/users/remove/all';
    const params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  cancelAll() {
    const url = environment.serverUrl + 'group/requests/cancel/all';
    const params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  cancelRequest(id) {
    const url = environment.serverUrl + 'group/requests/cancel';
    const params: URLSearchParams = new URLSearchParams();
    params.set('requst_id', id);
    params.set('token', localStorage.getItem('token'));
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  simulate(group) {
    const url = environment.serverUrl + 'group/sumlilate';
    const params: URLSearchParams = new URLSearchParams();
    params.set('type_code', group.grouptype);
    params.set('rate', group.rate);
    params.set('amount', group.amount);
    params.set('due_day', group.duedate);
    params.set('currency_code', group.currency);
    params.set('number_of_members', group.totalnum);
    params.set('frequency', group.frequency);
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    if (group.position !== '') {
      params.set('position', group.position);
    }
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  search(form) {
    const url = environment.serverUrl + 'groups/search';
    const params: URLSearchParams = new URLSearchParams();
    params.set('name', form.name);
    params.set('rate_min', form.min_rate);
    params.set('rate_max', form.max_rate);
    params.set('amount_min', form.min_amount);
    params.set('amount_max', form.max_amount);
    params.set('currency_code', form.base_currency);
    params.set('position_selection_type_code', form.ps_type);
    params.set('frequency', form.frequency);
    params.set('token', localStorage.getItem('token'));
    params.set('lang', this.langCode);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  reportIncident(comment) {
    const url = environment.serverUrl + 'group/report';
    const params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    params.set('token', localStorage.getItem('token'));
    params.set('comment', comment);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  sendApproval(id) {
    const url = environment.serverUrl + 'group/payment/manual';
    const params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    params.set('payment_id', id);
    params.set('token', localStorage.getItem('token'));
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  getTransactions(max, page) {
    const url = environment.serverUrl + 'group/transactions';
    const params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    params.set('token', localStorage.getItem('token'));
    params.set('max', max);
    params.set('page', page);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  getAmount() {
    const url = environment.serverUrl + 'user/account';
    const params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  getAllChatMembers(name?) {
    const url = environment.serverUrl + 'user/chat/members';
    const params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    if (name) {
      params.set('name', name);
    }
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }
}
