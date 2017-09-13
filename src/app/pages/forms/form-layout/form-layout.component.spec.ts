import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormLayoutComponent } from './form-layout.component';

describe('PageFormLayoutComponent', () => {
  let component: PageFormLayoutComponent;
  let fixture: ComponentFixture<PageFormLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFormLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
