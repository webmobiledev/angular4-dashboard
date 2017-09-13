import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCalendarComponent } from './calendar.component';

describe('PageCalendarComponent', () => {
  let component: PageCalendarComponent;
  let fixture: ComponentFixture<PageCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
