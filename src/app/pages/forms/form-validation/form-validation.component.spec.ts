import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormValidationComponent } from './form-validation.component';

describe('PageFormValidationComponent', () => {
  let component: PageFormValidationComponent;
  let fixture: ComponentFixture<PageFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
