import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormElementsComponent } from './form-elements.component';

describe('PageFormElementsComponent', () => {
  let component: PageFormElementsComponent;
  let fixture: ComponentFixture<PageFormElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFormElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
