import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ChatService } from '../../../services/chat.service';
import { SharedService } from '../../../layouts/shared-service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss'],
  providers: [ChatService]
})
export class PageChatroomComponent implements OnInit {
  breadcrumb = [{title: 'chatroom'}];
  pageTitle = 'Chatroom';
  messages = [];

  members = [];
  searchName = '';

  connection: any;

  constructor(
    private apiService: ApiService,
    private chatService: ChatService,
    private _sharedService: SharedService,
  ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe((messages: any) => {
      let message = JSON.parse(messages.json_msg)[0];
      console.log(this.messages);
      this.messages.push({
        date: message.creation_date,
        content: message.message,
        my: message.sender.indexOf(localStorage.getItem('email')) >= 0 ? true : false,
        avatar: message.sender.indexOf(localStorage.getItem('email')) >= 0 ? message.sender_pic : message.receiver_pic,
      });
    });

    this.apiService.getAllChatMembers().then((res: any) => {
      this.members = res.data;
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  searchUsers() {
    this.apiService.getAllChatMembers(this.searchName).then((res: any) => {
      this.members = res.data;
    });
  }

  sendMessage($event){
    console.log($event);
    this.chatService.sendMessage({
      message: $event.content,
      receiver_id: 2,
      token: localStorage.getItem('token'),
    });
  }
}
