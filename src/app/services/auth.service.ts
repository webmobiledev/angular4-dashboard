import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import * as sha512 from 'sha512';

@Injectable()
export class AuthService {
  isLogged = false;
  isConfirm = false;
  confirmCode = '';
  confirmEmail = '';
  langCode = new BehaviorSubject('en');
  redirectPage = '';
  constructor(private http: Http) {
    this.isLogged = localStorage.getItem('login') === 'true' ? true : false;
    this.isConfirm = localStorage.getItem('confirm') === 'true' ? true : false;
  }

  isLoggedIn() {
    return this.isLogged;
  }

  isConfirmRequired() {
    return this.isConfirm;
  }

  signup(data) {
    const url = environment.serverUrl + 'users/add';
    let params: URLSearchParams = new URLSearchParams();
    params.set('email', data.email);
    params.set('first_name', data.fname);
    params.set('password', sha512(data.password).toString('hex'));
    params.set('gender', data.gender);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        console.log(res);
        localStorage.setItem('confirm', 'true');
        this.isConfirm = true;
        resolve(res.json());
      });
    });
  }

  login(data) {
    const url = environment.serverUrl + 'login';
    let params: URLSearchParams = new URLSearchParams();
    params.set('email', data.email);
    params.set('password', sha512(data.password).toString('hex'));
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        this.isLogged = true;
        this.isConfirm = false;
        localStorage.setItem('token', res.json().token);
        localStorage.setItem('email', data.email);
        resolve(res.json());
      }, err => {
        reject(err);
      });
    });
  }

  setConfirmParams(code, email) {
    this.confirmCode = code;
    this.confirmEmail = email;
    if (this.confirmCode && this.confirmEmail) {
      this.isConfirm = true;
    }
  }

  validateEmail() {
    const url = environment.serverUrl + 'user/email/validate';
    let params: URLSearchParams = new URLSearchParams();
    params.set('email', this.confirmEmail);
    params.set('validation_code', this.confirmCode);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        this.isConfirm = false;
        this.isLogged = true;
        console.log(res);
        resolve(res.json().email_validated);
      }, err => {
        console.log(err);
      });
    });
  }

  changeLanguage(lang) {
    this.langCode.next(lang);
  }

  getLocation(lat, lng) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('lat', lat);
    params.set('lng', lng);
    params.set('username', 'demo');
    const url = 'http://api.geonames.org/countryCodeJSON/';
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  checkPassword(password) {
    const url = environment.serverUrl + 'user/password/check';
    let params: URLSearchParams = new URLSearchParams();
    params.set('password', sha512(password).toString('hex'));
    params.set('token', localStorage.getItem('token'));
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }

  resetPassword(email) {
    const url = environment.serverUrl + 'users/password/reset';
    let params: URLSearchParams = new URLSearchParams();
    params.set('email', email);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        resolve(res.json());
      }, err => {
        console.log(err);
      });
    });
  }
}
