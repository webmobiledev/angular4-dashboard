import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'ni-card',
  templateUrl: './ni-card.component.html',
  styleUrls: ['./ni-card.component.scss'],
  host: {
    '[class.ni-card]': 'true'
  }
})
export class NiCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() bgColor: string = '';
  @Input() customBgColor: string = '';
  @Input() color: string = '';
  @Input() customColor: string = '';
  @Input() bgImage: string = '';
  @Input() outline: boolean = false;
  @Input() indents: any = '';
  @Input() align: string = 'left';
  @Input() info: string = '';
  @Input() refresh: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  doRefresh(index) {
    this.apiService.refreshIndex.next(index);
  }
}
