import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/Rx';

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
        resolve(res.json().email_validated);
      });
    });
  }

  getConfirmParams(url) {
    const searchUrl = new URL(url);
    this.confirmCode = searchUrl.searchParams.get('validation_code');
    this.confirmEmail = searchUrl.searchParams.get('email');
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
    this.langCode.next(lang);
  }
}
