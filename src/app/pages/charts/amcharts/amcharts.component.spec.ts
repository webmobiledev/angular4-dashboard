import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAmchartsComponent } from './amcharts.component';

describe('PageAmchartsComponent', () => {
  let component: PageAmchartsComponent;
  let fixture: ComponentFixture<PageAmchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAmchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAmchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
