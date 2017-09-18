import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class ApiService {
  constructor(private http: Http) { }

  getUserRequest(groupId) {
    const url = environment.serverUrl + 'list_user_requests';
    let params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getNextPayment(groupId) {
    const url = environment.serverUrl + 'list_user_obligations';
    let params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }

  getTimelineData(groupId) {
    const url = environment.serverUrl + 'list_events';
    let params: URLSearchParams = new URLSearchParams();
    params.set('token', localStorage.getItem('token'));
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      });
    });
  }
}
