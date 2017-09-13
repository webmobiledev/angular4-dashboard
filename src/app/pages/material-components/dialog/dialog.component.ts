import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

const BREADCRUMBS: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Material components',
    link: '#'
  },
  {
    title: 'Dialog',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss']
})
export class PageDialogComponent implements OnInit {
  pageTitle: string = "Dialog";
  breadcrumb: any[] = BREADCRUMBS;
  dialogRef: MdDialogRef<DialogResultComponent>;
  selectedOption: string;

  constructor( public dialog: MdDialog, private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  ngOnInit() {}
}

@Component({
  selector: 'dialog-result',
  templateUrl: 'dialog-result.html',
})
export class DialogResultComponent {
  jazzMessage = 'Jazzy jazz jazz';
  constructor(public dialogRef: MdDialogRef<DialogResultComponent>) {}
}