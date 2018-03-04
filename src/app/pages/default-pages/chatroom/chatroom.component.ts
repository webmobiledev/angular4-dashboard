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
  messages = [
    {
      'date': '8 hours ago',
      'content': `Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.`,
      'my': false,
      'avatar': 'assets/content/avatar-4.jpg'
    },
    {
      'date': '7 hours ago',
      'content': `Aenean lacinia bibendum nulla sed consectetur.`,
      'my': true,
      'avatar': 'assets/content/avatar-4.jpg'
    },
    {
      'date': '2 hours ago',
      'content': `Contrary to popular belief,`,
      'my': false,
      'avatar': 'assets/content/avatar-4.jpg'
    },
    {
      'date': '15 minutes ago',
      'content': `Lorem ipsum dolor sit.`,
      'my': true,
      'avatar': 'assets/content/avatar-4.jpg'
    },
    {
      'date': '14 minutes ago',
      'content': `Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.`,
      'my': false,
      'avatar': 'assets/content/avatar-4.jpg'
    },
    {
      'date': '12 minutes ago',
      'content': `Aenean lacinia bibendum nulla sed consectetur.`,
      'my': true,
      'avatar': 'assets/content/avatar-4.jpg'
    }
  ];

  members = [];
  searchName = '';

  messagess = [];
  connection;

  constructor(
    private apiService: ApiService,
    private chatService: ChatService,
    private _sharedService: SharedService,
  ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.apiService.getAllChatMembers().then((res: any) => {
      this.members = res.data;
    });

    this.connection = this.chatService.getMessages().subscribe(message => {
      console.log(message);
      this.messagess.push(message);
    })
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
    this.chatService.sendMessage('hello');
    // this.message = '';
  }
}
