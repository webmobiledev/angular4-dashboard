import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class AuthService {
  isLogged = false;
  isConfirm = false;
  confirmCode = '';
  confirmEmail = '';
  langCode = new BehaviorSubject('en');
  redirectPage = '';
  constructor(private http: Http) { }

  isLoggedIn() {
    return this.isLogged;
  }

  isConfirmRequired() {
    return this.isConfirm;
  }

  signup(data) {
    const url = environment.serverUrl + 'create_account';
    let params: URLSearchParams = new URLSearchParams();
    params.set('email', data.email);
    params.set('first_name', data.fname);
    params.set('password', data.password);
    params.set('gender', data.gender);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        this.isConfirm = true;
        resolve(res.json());
      });
    });
  }

  login(data) {
    const url = environment.serverUrl + 'login';
    let params: URLSearchParams = new URLSearchParams();
    params.set('email', data.email);
    params.set('password', data.password);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        this.isLogged = true;
        this.isConfirm = false;
        localStorage.setItem('token', res.json().token);
        resolve(res.json().email_validated);
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
    const url = environment.serverUrl + 'validate_user_email';
    let params: URLSearchParams = new URLSearchParams();
    params.set('email', this.confirmEmail);
    params.set('validation_code', this.confirmCode);
    return new Promise((resolve, reject) => {
      this.http.get(url, {search: params}).subscribe(res => {
        this.isConfirm = false;
        this.isLogged = true;
        resolve(res.json().email_validated);
      }, err => {
        console.log(err);
      });
    });
  }

  changeLanguage(lang) {
    console.log(lang);
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
}
