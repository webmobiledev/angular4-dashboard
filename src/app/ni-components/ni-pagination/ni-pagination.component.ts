import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ni-pagination',
  templateUrl: './ni-pagination.component.html',
  styleUrls: ['./ni-pagination.component.scss']
})
export class NiPaginationComponent implements OnInit {
  @Input() total: any = 1;
  pages = [];
  currentPage = 1;
  constructor() {

  }

  ngOnInit() {
    for (let i = 1 ; i <= Math.floor(this.total) ; i ++) {
      this.pages.push(i);
    }
  }

  first() {
    this.currentPage = 1;
  }

  last() {
    this.currentPage = this.pages.length;
  }

  next() {
    if (this.currentPage < Math.floor(this.total)) {
      this.currentPage += 1;
    }
  }

  prev() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
  }
}
