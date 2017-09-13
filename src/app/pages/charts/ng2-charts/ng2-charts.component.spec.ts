import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNg2ChartsComponent } from './ng2-charts.component';

describe('PageNg2ChartsComponent', () => {
  let component: PageNg2ChartsComponent;
  let fixture: ComponentFixture<PageNg2ChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNg2ChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNg2ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
