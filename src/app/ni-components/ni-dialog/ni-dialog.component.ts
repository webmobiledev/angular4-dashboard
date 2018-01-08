import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'ni-dialog',
  templateUrl: './ni-dialog.component.html',
  styleUrls: ['./ni-dialog.component.scss']
})
export class NiDialogComponent implements OnInit {
    content: string = '';
    okText: string = '';
    cancelText: string = '';

    constructor(private apiService: ApiService, public dialogRef: MdDialogRef<NiDialogComponent>, @Inject(MD_DIALOG_DATA) public data: any) {
        
    }

    ngOnInit() {
        this.content = this.data.content;
        this.okText = this.data.okText;
        this.cancelText = this.data.cancelText;
    }

    closeDialog(status) {
        this.dialogRef.close(status);
    }
}
