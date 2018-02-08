import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTransactionsComponent } from './transactions.component';

describe('PageTransactionsComponent', () => {
  let component: PageTransactionsComponent;
  let fixture: ComponentFixture<PageTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
