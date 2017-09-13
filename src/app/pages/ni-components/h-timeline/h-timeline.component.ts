import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

const timelineData: any[] = [
  {
    'label': '2017',
    'timeline': [
      {
        'date': '2 hours ago',
        'content': `Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.`,
        'pointColor': '#ea8080'
      },
      {
        'date': 'July 10, 2017',
        'content': `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.`,
        'pointColor': '#B2DFDB'
      }
    ]
  },
  {
    'label': '2016',
    'timeline': [
      {
        'date': 'December 27, 2016',
        'content': `Lorem ipsum dolor sit.`,
        'pointColor': '#FFC6E6'
      },
      {
        'date': 'December 20, 2016',
        'content': `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nam nisi veniam.`,
        'pointColor': '#FFA78D'
      }
    ]
  }
];

@Component({
  selector: 'app-h-timeline',
  templateUrl: './h-timeline.component.html',
  styleUrls: ['./h-timeline.component.scss']
})
export class PageNiHTimelineComponent implements OnInit {
  pageTitle: string = 'Horizontal timeline';
  timelineData: any[] = timelineData;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}
