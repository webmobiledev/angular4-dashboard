import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ChatService {
  private url = 'https://www.rollincome.com/chat';
  private socket = io(this.url);
  public messagesSubscriber = new BehaviorSubject([]);

  constructor() {
    this.socket.on('connect', res => {
      this.socket.emit('user_connected', {token: localStorage.getItem('token')});
    });

    let handle = this;
    this.socket.on('user_connected', function(msg) {
      handle.messagesSubscriber.next(msg.json_msg);
    });
  }
  
  sendMessage(message){
    this.socket.emit('message', message);
  }
  
  getMessages() {
    return new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      }); 
    })     
  }  
}