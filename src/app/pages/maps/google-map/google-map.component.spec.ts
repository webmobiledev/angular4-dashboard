import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGoogleMapComponent } from './google-map.component';

describe('PageGoogleMapComponent', () => {
  let component: PageGoogleMapComponent;
  let fixture: ComponentFixture<PageGoogleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGoogleMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
