import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private url = 'https://www.rollincome.com/chat';
  // private url = 'http://localhost:3000/';
  private socket;
  
  sendMessage(message){
    this.socket.emit('message', message);
  }
  
  getMessages() {
    this.socket = io(this.url);
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
          console.log(data);
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
}