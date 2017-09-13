import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNiHTimelineComponent } from './h-timeline.component';

describe('PageNiHTimelineComponent', () => {
  let component: PageNiHTimelineComponent;
  let fixture: ComponentFixture<PageNiHTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNiHTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNiHTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
