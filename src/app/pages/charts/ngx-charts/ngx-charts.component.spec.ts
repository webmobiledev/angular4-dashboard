import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNgxChartsComponent } from './ngx-charts.component';

describe('PageNgxChartsComponent', () => {
  let component: PageNgxChartsComponent;
  let fixture: ComponentFixture<PageNgxChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNgxChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNgxChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
