import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTimelineComponent } from './timeline.component';

describe('PageTimelineComponent', () => {
  let component: PageTimelineComponent;
  let fixture: ComponentFixture<PageTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
