import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'ni-breadcrumb',
  templateUrl: './ni-breadcrumb.component.html',
  styleUrls: ['./ni-breadcrumb.component.scss']
})
export class NiBreadcrumbComponent implements OnInit {
  @Input() menu: Item[] = [];
  @Input() separator: string = '/';
  @Input() style: string = 'default';//custom1 | custom2

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  getClasses() {
    return {
      'custom-1': this.style === 'custom1',
      'custom-2': this.style === 'custom2'
    };
  }

  initialize() {
    this.apiService.isClickedDetails.next(false);
  }
}