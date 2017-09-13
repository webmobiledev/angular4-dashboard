import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { User } from '../../../ni-components/ni-chat/user';
import { Message } from '../../../ni-components/ni-chat/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class PageNiChatComponent implements OnInit {
  pageTitle: string = 'Chat'
  activeUser: User = {
    name: 'Dennis',
    lastSeen: 'online',
    avatar: ''
  };
  activeUser2: User = {
    name: 'Amanda Li',
    lastSeen: 'last seen 10 minutes ago',
    avatar: 'assets/content/avatar-4.jpg'
  };
  messages: Message[] = [
    {
      'date': '7 : 21',
      'content': `Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.`,
      'my': false
    },
    {
      'date': '7 : 25',
      'content': `Aenean lacinia bibendum nulla sed consectetur.`,
      'my': true
    },
    {
      'date': '7 : 29',
      'content': `Aenean lacinia bibendum nulla.`,
      'my': false
    },
    {
      'date': '8 : 15',
      'content': `Lorem ipsum dolor sit.`,
      'my': false
    }
  ];
  messages2: Message[] = [
    {
      'date': '8 hours ago',
      'content': `Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.`,
      'my': false
    },
    {
      'date': '7 hours ago',
      'content': `Aenean lacinia bibendum nulla sed consectetur.`,
      'my': true
    },
    {
      'date': '2 hours ago',
      'content': `Contrary to popular belief,`,
      'my': false
    },
    {
      'date': '15 minutes ago',
      'content': `Lorem ipsum dolor sit.`,
      'my': true
    },
    {
      'date': '14 minutes ago',
      'content': `Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.`,
      'my': false
    },
    {
      'date': '12 minutes ago',
      'content': `Aenean lacinia bibendum nulla sed consectetur.`,
      'my': true
    },
  ];

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}
