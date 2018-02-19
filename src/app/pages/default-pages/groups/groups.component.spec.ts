import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGroupsComponent } from './groups.component';

describe('PageGroupsComponent', () => {
  let component: PageGroupsComponent;
  let fixture: ComponentFixture<PageGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
