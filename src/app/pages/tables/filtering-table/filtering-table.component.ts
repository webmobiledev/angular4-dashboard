import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

const BREADCRUMBS: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Tables',
    link: '#'
  },
  {
    title: 'Filtering table',
    link: ''
  }
];
const COLORS: string[] = [
  'maroon',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'purple',
  'fuchsia',
  'lime',
  'teal',
  'aqua',
  'blue',
  'navy',
  'black',
  'gray'
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth'
];

@Component({
  selector: 'page-filtering-table',
  templateUrl: './filtering-table.component.html',
  styleUrls: ['./filtering-table.component.scss']
})
export class PageFilteringTableComponent implements OnInit {
  pageTitle: string = 'Filtering table';
  breadcrumb: any[] = BREADCRUMBS;
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;

  @ViewChild('filter') filter: ElementRef;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

export class ExampleDatabase {
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users.
    for (let i = 0; i < 100; i++) { this.addUser(); }
  }

  addUser() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser());
    this.dataChange.next(copiedData);
  }

  private createNewUser() {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: (this.data.length + 1).toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }
}

export class ExampleDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _exampleDatabase: ExampleDatabase) {
    super();
  }

  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this._exampleDatabase.data.slice().filter((item: UserData) => {
        let searchStr = (item.name + item.color).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      });
    });
  }

  disconnect() {}
}
