import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { AmChartsService } from '@amcharts/amcharts3-angular';


const timelineData: any[] = [
  {
    'timeline': [
      {
        'date': '12 minutes ago',
        'content': `You <span class="text-info">recommended</span> Sem B.`,
        'pointColor': '#ea8080'
      },
      {
        'date': '37 minutes ago',
        'content': `You followed Sydney N.`,
        'pointColor': '#915035'
      },
      {
        'date': '2 hours ago',
        'content': `You <span class="text-danger">subscribed</span> to Harold Fuller`,
        'pointColor': '#B925FF'
      },
      {
        'date': '7 hours ago',
        'content': `You updated your profile picture`,
        'pointColor': '#C5CAE9'
      },
      {
        'date': '8 hours ago',
        'content': `You deleted <i>homepage.psd</i>`,
        'pointColor': '#FF8A65'
      }
    ]
  }
];

@Component({
  selector: 'page-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class PageGroupsComponent implements OnInit {
  pageTitle: string = 'groups';
  timelineData: any[] = timelineData;
  private chart: any;

  constructor( private AmCharts: AmChartsService, private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.chart = this.AmCharts.makeChart('amchart-1', {
      'type': 'serial',
      'theme': 'light',
      'dataProvider': [
        {
          'country': 'Angular',
          'visits': 1232
        }, {
          'country': 'AngularJS',
          'visits': 1882
        }, {
          'country': 'React',
          'visits': 1809
        }, {
          'country': 'Vue.js',
          'visits': 1322
        }, {
          'country': 'Backbone.js',
          'visits': 1542
        }, {
          'country': 'Ember.js',
          'visits': 1497
        }, {
          'country': 'Meteor.js',
          'visits': 1240
        }, {
          'country': 'jQuery',
          'visits': 711
        }
      ],
      'valueAxes': [ {
        'gridColor': '#FFFFFF',
        'gridAlpha': 0.2,
        'dashLength': 0
      } ],
      'gridAboveGraphs': true,
      'startDuration': 1,
      'graphs': [ {
        'balloonText': '[[category]]: <b>[[value]]</b>',
        'fillAlphas': 0.8,
        'lineAlpha': 0.2,
        'type': 'column',
        'valueField': 'visits'
      } ],
      'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
      },
      'categoryField': 'country',
      'categoryAxis': {
        'gridPosition': 'start',
        'gridAlpha': 0,
        'tickPosition': 'start',
        'tickLength': 20
      }
    });

    this.chart = this.AmCharts.makeChart('amchart-2', {
      'type': 'serial',
      'theme': 'light',
      //'autoMarginOffset':20,
      'dataDateFormat': 'YYYY-MM-DD HH:NN',
      'dataProvider': [
        {
          'date': '2012-01-01',
          'value': 8
        }, {
          'date': '2012-01-02',
          'color':'#CC0000',
          'value': 10
        }, {
          'date': '2012-01-03',
          'value': 12
        }, {
          'date': '2012-01-04',
          'value': 14
        }, {
          'date': '2012-01-05',
          'value': 11
        }, {
          'date': '2012-01-06',
          'value': 6
        }, {
          'date': '2012-01-07',
          'value': 7
        }, {
          'date': '2012-01-08',
          'value': 9
        }, {
          'date': '2012-01-09',
          'value': 13
        }, {
          'date': '2012-01-10',
          'value': 15
        }, {
          'date': '2012-01-11',
          'color':'#CC0000',
          'value': 19
        }, {
          'date': '2012-01-12',
          'value': 21
        }, {
          'date': '2012-01-13',
          'value': 22
        }, {
          'date': '2012-01-14',
          'value': 20
        }, {
          'date': '2012-01-15',
          'value': 18
        }, {
          'date': '2012-01-16',
          'value': 14
        }, {
          'date': '2012-01-17',
          'color':'#CC0000',
          'value': 16
        }, {
          'date': '2012-01-18',
          'value': 18
        }, {
          'date': '2012-01-19',
          'value': 17
        }, {
          'date': '2012-01-20',
          'value': 15
        }, {
          'date': '2012-01-21',
          'value': 12
        }, {
          'date': '2012-01-22',
          'color':'#CC0000',
          'value': 10
        }, {
          'date': '2012-01-23',
          'value': 8
        }
      ],
      'valueAxes': [{
        'axisAlpha': 0,
        'guides': [{
          'fillAlpha': 0.1,
          'fillColor': '#888888',
          'lineAlpha': 0,
          'toValue': 16,
          'value': 10
        }],
        'position': 'left',
        'tickLength': 0
      }],
      'graphs': [{
        'balloonText': '[[category]]<br><b><span style="font-size:14px;">value:[[value]]</span></b>',
        'bullet': 'round',
        'dashLength': 3,
        'colorField':'color',
        'valueField': 'value'
      }],
      'trendLines': [{
        'finalDate': '2012-01-11 12',
        'finalValue': 19,
        'initialDate': '2012-01-02 12',
        'initialValue': 10,
        'lineColor': '#CC0000'
      }, {
        'finalDate': '2012-01-22 12',
        'finalValue': 10,
        'initialDate': '2012-01-17 12',
        'initialValue': 16,
        'lineColor': '#CC0000'
      }],
      'chartCursor': {
        'fullWidth':true,
        'valueLineEabled':true,
        'valueLineBalloonEnabled':true,
        'valueLineAlpha':0.5,
        'cursorAlpha':0
      },
      'categoryField': 'date',
      'categoryAxis': {
        'parseDates': true,
        'axisAlpha': 0,
        'gridAlpha': 0.1,
        'minorGridAlpha': 0.1,
        'minorGridEnabled': true
      }
    });
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }
}
