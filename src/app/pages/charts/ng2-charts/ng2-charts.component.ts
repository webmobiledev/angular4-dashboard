import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

const BREADCRUMBS: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Charts',
    link: '#'
  },
  {
    title: 'Ng2 Charts',
    link: ''
  }
];

@Component({
  selector: 'page-ng2-charts',
  templateUrl: './ng2-charts.component.html',
  styleUrls: ['./ng2-charts.component.scss']
})
export class PageNg2ChartsComponent implements OnInit {
  pageTitle: string = 'Ng2 Charts';
  breadcrumb: any[] = BREADCRUMBS;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}

  // lineChart
  public lineChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels: any[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July'
  ];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: any[] = [
    {
      backgroundColor: 'rgba(255,116,19,0.2)',
      borderColor: 'rgba(255,116,19,1)',
      pointBackgroundColor: 'rgba(255,116,19,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,116,19,0.8)'
    },
    {
      backgroundColor: 'rgba(225,122,180,0.2)',
      borderColor: 'rgba(225,122,180,1)',
      pointBackgroundColor: 'rgba(225,122,180,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,122,180,1)'
    },
    {
      backgroundColor: 'rgba(145,55,63,0.2)',
      borderColor: 'rgba(145,55,63,1)',
      pointBackgroundColor: 'rgba(145,55,63,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(145,55,63,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  //Bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017'
  ];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  //Doughnut chart
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales'
  ];
  public doughnutChartData: number[] = [
    350,
    450,
    100
  ];
  public doughnutChartType: string = 'doughnut';

  // Radar chart
  public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ];

  public radarChartData: any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType: string = 'radar';

  // Pie
  public pieChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales'
  ];
  public pieChartData: number[] = [
    300,
    500,
    100
  ];
  public pieChartType: string = 'pie';

  // PolarArea
  public polarAreaChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
    'Telesales',
    'Corporate Sales'
  ];
  public polarAreaChartData: number[] = [
    300,
    500,
    100,
    40,
    120
  ];
  public polarAreaLegend: boolean = true;

  public polarAreaChartType: string = 'polarArea';

  public polarAreaChartOptions: any = {
    responsiveAnimationDuration: 500
  };
}
