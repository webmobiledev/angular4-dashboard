import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private url = 'https://www.rollincome.com/chat';
  private socket = io(this.url);
  
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