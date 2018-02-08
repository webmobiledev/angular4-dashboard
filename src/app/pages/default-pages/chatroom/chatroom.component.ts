import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class PageChatroomComponent implements OnInit {
  breadcrumb = [{title: 'chatroom'}];
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

  socket = io('https://www.rollincome.com:446/chat');

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.apiService.getAllChatMembers().then((res: any) => {
      this.members = res.data;
    });

    this.socket.on('new-message', function (data) {
      console.log(data);
    }.bind(this));
  }

  searchUsers() {
    this.apiService.getAllChatMembers(this.searchName).then((res: any) => {
      this.members = res.data;
    });
  }
}
