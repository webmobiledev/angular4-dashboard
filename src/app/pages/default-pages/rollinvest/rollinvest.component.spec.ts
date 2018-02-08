import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRollinvestComponent } from './rollinvest.component';

describe('PageRollinvestComponent', () => {
  let component: PageRollinvestComponent;
  let fixture: ComponentFixture<PageRollinvestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRollinvestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRollinvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
