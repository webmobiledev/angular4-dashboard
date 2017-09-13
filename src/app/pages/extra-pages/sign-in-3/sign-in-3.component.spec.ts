import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSignIn3Component } from './sign-in-3.component';

describe('PageSignIn3Component', () => {
  let component: PageSignIn3Component;
  let fixture: ComponentFixture<PageSignIn3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSignIn3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSignIn3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
