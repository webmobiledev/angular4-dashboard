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
  selectedUserIndex = 0;

  connection: any;

  constructor(
    private apiService: ApiService,
    private chatService: ChatService,
    private _sharedService: SharedService,
  ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    console.log(localStorage.getItem('email'))
    this.connection = this.chatService.message.subscribe((res: any) => {
      if (res) {
        let message = JSON.parse(res.json_msg)[0];
        this.messages.push({
          date: message.creation_date,
          content: message.message,
          my: message.sender.indexOf(localStorage.getItem('email')) >= 0 ? true : false,
          avatar: message.sender.indexOf(localStorage.getItem('email')) >= 0 ? message.sender_pic : message.receiver_pic,
        });
      }
    });

    this.apiService.getAllChatMembers().then((res: any) => {
      res.data.forEach((m, index) => {
        this.members.push({
          id: m.id,
          name: m.name,
          selected: index == 0 ? true : false
        });
      });
      this.selectUser(0);
    });
  }

  ngOnDestroy() {
  }

  searchUsers() {
    this.members = [];
    this.apiService.getAllChatMembers(this.searchName).then((res: any) => {
      res.data.forEach((m, index) => {
        this.members.push({
          id: m.id,
          name: m.name,
          selected: false
        });
      });
    });
  }

  selectUser(index) {
    this.members.forEach(m => {
      m.selected = false;
    });
    this.members[index].selected = true;
    this.selectedUserIndex = index;

    this.apiService.getMessages(this.members[index].id).then((res: any) => {
      console.log(res);
      this.messages = [];
      res.data.sort((a, b) => {
        return a.creation_date > b.creation_date;
      }).forEach(r => {
        if (this.members[index].id === r.receiver_id) {
          this.messages.push({
            date: r.creation_date,
            content: r.message,
            my: r.sender.indexOf(localStorage.getItem('email')) >= 0 ? true : false,
            avatar: r.sender.indexOf(localStorage.getItem('email')) >= 0 ? r.sender_pic : r.receiver_pic,
          });
        }
      });
    });
  }

  sendMessage($event){
    this.chatService.sendMessage({
      message: $event.content,
      receiver_id: this.members[this.selectedUserIndex].id,
      token: localStorage.getItem('token'),
    });
  }
}
