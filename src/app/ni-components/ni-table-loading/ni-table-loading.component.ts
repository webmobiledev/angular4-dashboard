import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'ni-table-loading',
  templateUrl: './ni-table-loading.component.html',
  styleUrls: ['./ni-table-loading.component.scss']
})
export class NiTableLoadingComponent implements OnInit {

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
  }

}
