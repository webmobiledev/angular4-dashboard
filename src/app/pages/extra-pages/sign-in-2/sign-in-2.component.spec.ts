import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSignIn2Component } from './sign-in-2.component';

describe('PageSignIn2Component', () => {
  let component: PageSignIn2Component;
  let fixture: ComponentFixture<PageSignIn2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSignIn2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSignIn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
