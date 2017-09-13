import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { AmChartsService } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'page-amcharts',
  templateUrl: './amcharts.component.html',
  styleUrls: ['./amcharts.component.scss']
})
export class PageAmchartsComponent implements OnInit {
  pageTitle: string = 'Amcharts';
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

    this.chart = this.AmCharts.makeChart('amchart-3', {
      'type': 'serial',
      'addClassNames': true,
      'theme': 'light',
      'autoMargins': false,
      'marginLeft': 30,
      'marginRight': 8,
      'marginTop': 10,
      'marginBottom': 26,
      'balloon': {
        'adjustBorderColor': false,
        'horizontalPadding': 10,
        'verticalPadding': 8,
        'color': '#ffffff'
      },

      'dataProvider': [ {
        'year': 2012,
        'income': 23.5,
        'expenses': 21.1
      }, {
        'year': 2013,
        'income': 26.2,
        'expenses': 30.5
      }, {
        'year': 2014,
        'income': 30.1,
        'expenses': 34.9
      }, {
        'year': 2015,
        'income': 29.5,
        'expenses': 31.1
      }, {
        'year': 2016,
        'income': 30.6,
        'expenses': 28.2,
        'dashLengthLine': 5
      }, {
        'year': 2017,
        'income': 34.1,
        'expenses': 32.9,
        'dashLengthColumn': 5,
        'alpha': 0.2,
        'additional': '(projection)'
      } ],
      'valueAxes': [ {
        'axisAlpha': 0,
        'position': 'left'
      } ],
      'startDuration': 1,
      'graphs': [ {
        'alphaField': 'alpha',
        'balloonText': '<span style="font-size:12px;">[[title]] in [[category]]:<br><span style="font-size:20px;">[[value]]</span> [[additional]]</span>',
        'fillAlphas': 1,
        'title': 'Income',
        'type': 'column',
        'valueField': 'income',
        'dashLengthField': 'dashLengthColumn'
      }, {
        'id': 'graph2',
        'balloonText': '<span style="font-size:12px;">[[title]] in [[category]]:<br><span style="font-size:20px;">[[value]]</span> [[additional]]</span>',
        'bullet': 'round',
        'lineThickness': 3,
        'bulletSize': 7,
        'bulletBorderAlpha': 1,
        'bulletColor': '#FFFFFF',
        'useLineColorForBulletBorder': true,
        'bulletBorderThickness': 3,
        'fillAlphas': 0,
        'lineAlpha': 1,
        'title': 'Expenses',
        'valueField': 'expenses',
        'dashLengthField': 'dashLengthLine'
      } ],
      'categoryField': 'year',
      'categoryAxis': {
        'gridPosition': 'start',
        'axisAlpha': 0,
        'tickLength': 0
      }
    });

    this.chart = this.AmCharts.makeChart('amchart-4', {
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
      'valueField': 'litres',
      'titleField': 'country',
      'balloon': {
        'fixedPosition': true
      }
    });

    this.chart = this.AmCharts.makeChart('amchart-5', {
      'type': 'pie',
      'theme': 'light',
      'dataProvider': [
        {
          'title': 'New',
          'value': 4852
        }, {
          'title': 'Returning',
          'value': 9899
        }
      ],
      'titleField': 'title',
      'valueField': 'value',
      'labelRadius': 5,

      'radius': '42%',
      'innerRadius': '60%',
      'labelText': '[[title]]'
    });

    this.chart = this.AmCharts.makeChart('amchart-6', {
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
      'startDuration': 2,
      'graphs': [ {
        'balloonText': '[[value]] litres of beer per year',
        'bullet': 'round',
        'lineThickness': 2,
        'valueField': 'litres'
      } ],
      'categoryField': 'country'
    });

    this.chart = this.AmCharts.makeChart('amchart-7', {
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
          'townName2': 'Las Vegas',
          'bulletClass': 'lastBullet'
        }, {
          'date': '2012-01-15'
        }, {
          'date': '2012-01-16'
        }, {
          'date': '2012-01-17'
        }, {
          'date': '2012-01-18'
        }, {
          'date': '2012-01-19'
        }
      ],

      'addClassNames': true,
      'startDuration': 1,
      //'color': '#FFFFFF',
      'marginLeft': 0,

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
      }, {
        'id': 'a3',
        'title': 'duration',
        'position': 'right',
        'gridAlpha': 0,
        'axisAlpha': 0,
        'inside': true,
        'duration': 'mm',
        'durationUnits': {
          'DD': 'd. ',
          'hh': 'h ',
          'mm': 'min',
          'ss': ''
        }
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
        'lineColor': '#263138',
        'alphaField': 'alpha'
      }, {
        'id': 'g2',
        'valueField': 'latitude',
        'classNameField': 'bulletClass',
        'title': 'latitude/city',
        'type': 'line',
        'valueAxis': 'a2',
        'lineColor': '#786c56',
        'lineThickness': 1,
        'legendValueText': '[[value]]/[[description]]',
        'descriptionField': 'townName',
        'bullet': 'round',
        'bulletSizeField': 'townSize',
        'bulletBorderColor': '#786c56',
        'bulletBorderAlpha': 1,
        'bulletBorderThickness': 2,
        'bulletColor': '#000000',
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
        'lineColor': '#ff5755',
        'balloonText': '[[value]]',
        'lineThickness': 1,
        'legendValueText': '[[value]]',
        'bullet': 'square',
        'bulletBorderColor': '#ff5755',
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
        'useGraphSettings': true,
        //'color': '#FFFFFF'
      }
    });

    this.chart = this.AmCharts.makeChart('amchart-8', {
      'type': 'xy',
      'theme': 'light',
      'balloon':{
        'fixedPosition':true,
      },
      'dataProvider': [ {
        'y': 10,
        'x': 14,
        'value': 59,
        'y2': -5,
        'x2': -3,
        'value2': 44
      }, {
        'y': 5,
        'x': 3,
        'value': 50,
        'y2': -15,
        'x2': -8,
        'value2': 12
      }, {
        'y': -10,
        'x': 8,
        'value': 19,
        'y2': -4,
        'x2': 6,
        'value2': 35
      }, {
        'y': -6,
        'x': 5,
        'value': 65,
        'y2': -5,
        'x2': -6,
        'value2': 168
      }, {
        'y': 15,
        'x': -4,
        'value': 92,
        'y2': -10,
        'x2': -8,
        'value2': 102
      }, {
        'y': 13,
        'x': 1,
        'value': 8,
        'y2': -2,
        'x2': 0,
        'value2': 41
      }, {
        'y': 1,
        'x': 6,
        'value': 35,
        'y2': 0,
        'x2': -3,
        'value2': 16
      } ],
      'valueAxes': [ {
        'position': 'bottom',
        'axisAlpha': 0
      }, {
        'minMaxMultiplier': 1.2,
        'axisAlpha': 0,
        'position': 'left'
      } ],
      'startDuration': 1.5,
      'graphs': [ {
        'balloonText': 'x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>',
        'bullet': 'circle',
        'bulletBorderAlpha': 0.2,
        'bulletAlpha': 0.8,
        'lineAlpha': 0,
        'fillAlphas': 0,
        'valueField': 'value',
        'xField': 'x',
        'yField': 'y',
        'maxBulletSize': 100
      }, {
        'balloonText': 'x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>',
        'bullet': 'diamond',
        'bulletBorderAlpha': 0.2,
        'bulletAlpha': 0.8,
        'lineAlpha': 0,
        'fillAlphas': 0,
        'valueField': 'value2',
        'xField': 'x2',
        'yField': 'y2',
        'maxBulletSize': 100
      } ],
      'marginLeft': 46,
      'marginBottom': 35
    });
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }
}
