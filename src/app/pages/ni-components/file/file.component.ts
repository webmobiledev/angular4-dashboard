import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

@Component({
  selector: 'page-ni-files',
  templateUrl: 'file.component.html',
  styleUrls: ['file.component.scss']
})
export class PageNiFilesComponent implements OnInit {
  pageTitle: string = 'Files';

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}