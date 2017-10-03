import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service'

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

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  changePage(id) {
    this.apiService.showSpinner.next(true);
    this.apiService.groupId.next(id);
    this.apiService.isClickedDetails.next(true);
  }
}
