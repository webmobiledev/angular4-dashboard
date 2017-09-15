import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { AmChartsService } from '@amcharts/amcharts3-angular';

const folders: any[] = [
  {
    icon: 'android',
    badge: false,
    name: 'Android app',
    updated: 'July 21, 2017'
  },
  {
    icon: 'update',
    badge: false,
    name: 'Update plugins',
    updated: 'July 19, 2017'
  },
  {
    icon: 'bug_report',
    badge: false,
    name: 'Fix bugs',
    updated: 'July 22, 2017'
  },
  {
    icon: 'unarchive',
    badge: false,
    name: 'Create app design',
    updated: 'July 25, 2017'
  },
  {
    icon: 'content_copy',
    badge: 8,
    name: 'Create widgets',
    updated: 'July 16, 2017'
  },
  {
    icon: 'folder_open',
    badge: false,
    name: 'Documentation',
    updated: 'July 28, 2017'
  },
  {
    icon: 'folder_open',
    badge: false,
    name: 'Upload',
    updated: 'July 30, 2017'
  }
];
const timelineData: any[] = [
  {
    'timeline': [
      {
        'content': `Aenean lacinia bibendum nulla sed consectetur.`,
        'pointColor': '#ea8080'
      },
      {
        'content': `Aenean lacinia bibendum nulla.`,
        'pointColor': '#915035'
      },
      {
        'content': `Lorem ipsum dolor sit amet.`,
        'pointColor': '#B925FF'
      },
      {
        'content': `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
        'pointColor': '#C5CAE9'
      },
      {
        'content': `Lorem ipsum dolor sit.`,
        'pointColor': '#FF8A65'
      }
    ]
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class PageRequestsComponent {
  pageTitle: string = 'Requests';
  folders: any[] = folders;
  timelineData: any[] = timelineData;
  private chart: any;

  constructor( private AmCharts: AmChartsService, private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.chart = this.AmCharts.makeChart('amchart-1', {
      'type': 'serial',
      'theme': 'light',
      'dataDateFormat': 'YYYY-MM-DD',
      'dataProvider': [
        {
          'date': '2012-01-01',
          'distance': 227,
          'townName': 'New York',
          'townName2': 'New York',
          'townSize': 25,
          'latitude': 40.71,
          'duration': 408
        }, {
          'date': '2012-01-02',
          'distance': 371,
          'townName': 'Washington',
          'townSize': 14,
          'latitude': 38.89,
          'duration': 482
        }, {
          'date': '2012-01-03',
          'distance': 433,
          'townName': 'Wilmington',
          'townSize': 6,
          'latitude': 34.22,
          'duration': 562
        }, {
          'date': '2012-01-04',
          'distance': 345,
          'townName': 'Jacksonville',
          'townSize': 7,
          'latitude': 30.35,
          'duration': 379
        }, {
          'date': '2012-01-05',
          'distance': 480,
          'townName': 'Miami',
          'townName2': 'Miami',
          'townSize': 10,
          'latitude': 25.83,
          'duration': 501
        }, {
          'date': '2012-01-06',
          'distance': 386,
          'townName': 'Tallahassee',
          'townSize': 7,
          'latitude': 30.46,
          'duration': 443
        }, {
          'date': '2012-01-07',
          'distance': 348,
          'townName': 'New Orleans',
          'townSize': 10,
          'latitude': 29.94,
          'duration': 405
        }, {
          'date': '2012-01-08',
          'distance': 238,
          'townName': 'Houston',
          'townName2': 'Houston',
          'townSize': 16,
          'latitude': 29.76,
          'duration': 309
        }, {
          'date': '2012-01-09',
          'distance': 218,
          'townName': 'Dalas',
          'townSize': 17,
          'latitude': 32.8,
          'duration': 287
        }, {
          'date': '2012-01-10',
          'distance': 349,
          'townName': 'Oklahoma City',
          'townSize': 11,
          'latitude': 35.49,
          'duration': 485
        }, {
          'date': '2012-01-11',
          'distance': 603,
          'townName': 'Kansas City',
          'townSize': 10,
          'latitude': 39.1,
          'duration': 890
        }, {
          'date': '2012-01-12',
          'distance': 534,
          'townName': 'Denver',
          'townName2': 'Denver',
          'townSize': 18,
          'latitude': 39.74,
          'duration': 810
        }, {
          'date': '2012-01-13',
          'townName': 'Salt Lake City',
          'townSize': 12,
          'distance': 425,
          'duration': 670,
          'latitude': 40.75,
          'alpha': 0.4
        }, {
          'date': '2012-01-14',
          'latitude': 36.1,
          'duration': 470,
          'townName': 'Las Vegas',
          'bulletClass': 'lastBullet'
        }
      ],
      'addClassNames': true,
      'startDuration': 1,
      'categoryField': 'date',
      'categoryAxis': {
        'parseDates': true,
        'minPeriod': 'DD',
        'autoGridCount': false,
        'gridCount': 50,
        'gridAlpha': 0.1,
        'gridColor': '#FFFFFF',
        'axisColor': '#555555',
        'dateFormats': [ {
          'period': 'DD',
          'format': 'DD'
        }, {
          'period': 'WW',
          'format': 'MMM DD'
        }, {
          'period': 'MM',
          'format': 'MMM'
        }, {
          'period': 'YYYY',
          'format': 'YYYY'
        } ]
      },
      'valueAxes': [ {
        'id': 'a1',
        'title': 'distance',
        'gridAlpha': 0,
        'axisAlpha': 0
      }, {
        'id': 'a2',
        'position': 'right',
        'gridAlpha': 0,
        'axisAlpha': 0,
        'labelsEnabled': false
      } ],
      'graphs': [ {
        'id': 'g1',
        'valueField': 'distance',
        'title': 'distance',
        'type': 'column',
        'fillAlphas': 0.9,
        'valueAxis': 'a1',
        'balloonText': '[[value]] miles',
        'legendValueText': '[[value]] mi',
        'legendPeriodValueText': 'total: [[value.sum]] mi',
        'lineColor': '#B3E5FC',
        'alphaField': 'alpha'
      }, {
        'id': 'g2',
        'valueField': 'latitude',
        'classNameField': 'bulletClass',
        'title': 'latitude/city',
        'type': 'line',
        'valueAxis': 'a2',
        'lineColor': '#d50000',
        'lineThickness': 1,
        'legendValueText': '[[value]]/[[description]]',
        'descriptionField': 'townName',
        'bullet': 'round',
        'bulletSizeField': 'townSize',
        'bulletBorderColor': '#ca0000',
        'bulletBorderAlpha': 1,
        'bulletBorderThickness': 2,
        'bulletColor': '#f2b3b3',
        'labelText': '[[townName2]]',
        'labelPosition': 'right',
        'balloonText': 'latitude:[[value]]',
        'showBalloon': true,
        'animationPlayed': true
      }, {
        'id': 'g3',
        'title': 'duration',
        'valueField': 'duration',
        'type': 'line',
        'valueAxis': 'a3',
        'lineColor': '#64B5F6',
        'balloonText': '[[value]]',
        'lineThickness': 1,
        'legendValueText': '[[value]]',
        'bullet': 'square',
        'bulletBorderColor': '#64B5F6',
        'bulletBorderThickness': 1,
        'bulletBorderAlpha': 1,
        'dashLengthField': 'dashLength',
        'animationPlayed': true
      } ],
      'chartCursor': {
        'zoomable': false,
        'categoryBalloonDateFormat': 'DD',
        'cursorAlpha': 0,
        'valueBalloonsEnabled': false
      },
      'legend': {
        'bulletType': 'round',
        'equalWidths': false,
        'valueWidth': 120,
        'useGraphSettings': true
      }
    });

    this.chart = this.AmCharts.makeChart('amchart-2', {
      'type': 'pie',
      'theme': 'light',
      'dataProvider': [
        {
          'country': 'Lithuania',
          'litres': 501.9
        }, {
          'country': 'Czech Republic',
          'litres': 301.9
        }, {
          'country': 'Ireland',
          'litres': 201.1
        }, {
          'country': 'Germany',
          'litres': 165.8
        }, {
          'country': 'Australia',
          'litres': 139.9
        }, {
          'country': 'Austria',
          'litres': 128.3
        }, {
          'country': 'UK',
          'litres': 99
        }, {
          'country': 'Belgium',
          'litres': 60
        }, {
          'country': 'The Netherlands',
          'litres': 50
        }
      ],
      'pullOutRadius': 0,
      'labelRadius': -40,
      'valueField': 'litres',
      'titleField': 'country',
      'labelText': '[[litres]]',
      'balloon': {
        'fixedPosition': true
      }
    });

    this.chart = this.AmCharts.makeChart('amchart-3', {
      'type': 'pie',
      'theme': 'light',
      'dataProvider': [
        {
          'title': 'Chrome',
          'value': 70
        }, {
          'title': 'Firefox',
          'value': 15
        }, {
          'title': 'Opera',
          'value': 10
        }, {
          'title': 'Safari',
          'value': 12
        }, {
          'title': 'Edge',
          'value': 5
        }
      ],
      'titleField': 'title',
      'valueField': 'value',
      'labelRadius': -40,
      'radius': '46%',
      'innerRadius': '60%',
      'labelText': '[[title]]'
    });

    this.chart = this.AmCharts.makeChart('amchart-4', {
      'type': 'radar',
      'theme': 'light',
      'dataProvider': [
        {
          'country': 'Czech Republic',
          'litres': 156.9
        }, {
          'country': 'Ireland',
          'litres': 131.1
        }, {
          'country': 'Germany',
          'litres': 115.8
        }, {
          'country': 'Australia',
          'litres': 109.9
        }, {
          'country': 'Austria',
          'litres': 108.3
        }, {
          'country': 'UK',
          'litres': 99
        }
      ],
      'valueAxes': [ {
        'axisTitleOffset': 20,
        'minimum': 0,
        'axisAlpha': 0.15
      } ],
      'startDuration': 1,
      'graphs': [ {
        'balloonText': '[[value]] litres of beer per year',
        'bullet': 'round',
        'lineThickness': 2,
        'valueField': 'litres'
      } ],
      'categoryField': 'country'
    });
  }
}