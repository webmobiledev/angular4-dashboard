import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSignUp2Component } from './sign-up-2.component';

describe('PageSignUp2Component', () => {
  let component: PageSignUp2Component;
  let fixture: ComponentFixture<PageSignUp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSignUp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSignUp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
