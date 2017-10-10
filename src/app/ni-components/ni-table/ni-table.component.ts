import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { DialogAcceptAndRejectComponent } from '../../pages/default-pages/dashboard/dashboard.component';

@Component({
  selector: 'ni-table',
  templateUrl: './ni-table.component.html',
  styleUrls: ['./ni-table.component.scss'],
  host: {
    '[class.ni-table]': 'true'
  }
})
export class NiTableComponent implements OnInit {
  @Input() headers: any = [];
  @Input() data: any = [] ;

  constructor(private apiService: ApiService, private dialog: MdDialog) {
  }

  ngOnInit() {
  }

  changePage(id) {
    this.apiService.showSpinner.next(true);
    this.apiService.groupId.next(id);
    this.apiService.isClickedDetails.next(true);
  }

  showDialog(type, id, requestType, rotationType) {
    let dialogRef = this.dialog.open(DialogAcceptAndRejectComponent);
    this.apiService.groupId.subscribe(res => {
      dialogRef.componentInstance.groupId = res;
    });
    dialogRef.componentInstance.id = id;
    dialogRef.componentInstance.type = type;
    dialogRef.componentInstance.requestType = requestType;
    dialogRef.componentInstance.groupRotationType = rotationType;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
      } else {
      }
    });
  }
}
