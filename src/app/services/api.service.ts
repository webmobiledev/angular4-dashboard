import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class ApiService {
  groupId = new BehaviorSubject('');
  groupCounts = new BehaviorSubject(0);
  isClickedDetails = new BehaviorSubject(false);
  showSpinner = new BehaviorSubject(false);
  groupCreated = new BehaviorSubject(false);

  constructor(private http: Http) { }

  getUserRequest() {
    const url = environment.serverUrl + 'list_user_requests';
    let params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getNextPayment() {
    const url = environment.serverUrl + 'list_user_obligations';
    let params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getTimelineData() {
    const url = environment.serverUrl + 'list_events';
    let params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getGroups() {
    const url = environment.serverUrl + 'list_groups';
    let params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getGroupInfo() {
    const url = environment.serverUrl + 'list_groups';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  addGroup(group) {
    const url = environment.serverUrl + 'add_group';
    let params: URLSearchParams = new URLSearchParams();
    params.set('name', group.name);
    params.set('rate', group.rate);
    params.set('description', group.description);
    params.set('amount', group.amount);
    params.set('due_day', group.duedate);
    params.set('currency_code', group.currency);
    params.set('type_code', group.grouptype);
    params.set('early_prepayment_penalty', group.preppenal);
    params.set('number_of_days_before_penalty', group.nbdpenal);
    params.set('delay_payment_penalty', group.penalty);
    params.set('frequency', group.frequency);
    params.set('position_selection_type_code', group.pstype);
    params.set('token', localStorage.getItem('token'));
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        console.log(res);
        resolve(res.json());
      });
    });
  }

  getListData(type) {
    const url = environment.serverUrl + 'lists';
    let params: URLSearchParams = new URLSearchParams();
    params.set('data', type);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  addMember(member) {
    const url = environment.serverUrl + 'add_group_member';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('email_list', member);
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe(res => {
        console.log(res);
        // resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  getGroupMembers() {
    const url = environment.serverUrl + 'list_group_members';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  getGroupObligations() {
    const url = environment.serverUrl + 'list_group_obligations';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  getGroupRequests() {
    const url = environment.serverUrl + 'list_requests';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  getGroupEvents() {
    const url = environment.serverUrl + 'list_events';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  getGroupTakenPositions(groupId) {
    const url = environment.serverUrl + 'group_taken_positions';
    let params: URLSearchParams = new URLSearchParams();
    return new Promise((resolve, reject) => {
      params.set('group_id', groupId);
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  validateAccept(id) {
    const url = environment.serverUrl + 'accept_join_group_request';
    let params: URLSearchParams = new URLSearchParams();
    return new Promise((resolve, reject) => {
      params.set('request_answer_code', 'APPROVE');
      params.set('request_id', id);
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe((res: any) => {
        console.log(res._body);
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  validateReject(id, comment) {
    const url = environment.serverUrl + 'reject_join_group_request';
    let params: URLSearchParams = new URLSearchParams();
    return new Promise((resolve, reject) => {
      params.set('request_answer_code', 'REJECT');
      params.set('request_id', id);
      params.set('comments', comment);
      params.set('token', localStorage.getItem('token'));
      this.http.get(url, {search: params}).subscribe((res) => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  startGroup(date) {
    const url = environment.serverUrl + 'start_group';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      params.set('first_payment_date', date);
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  forceStartGroup(date) {
    const url = environment.serverUrl + 'force_start_group';
    let params: URLSearchParams = new URLSearchParams();
    this.groupId.subscribe(data => {
      params.set('group_id', data);
    });
    return new Promise((resolve, reject) => {
      params.set('token', localStorage.getItem('token'));
      params.set('first_payment_date', date);
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }
}
