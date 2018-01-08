import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiTableLoadingComponent } from './ni-table-loading.component';

describe('NiTableLoadingComponent', () => {
  let component: NiTableLoadingComponent;
  let fixture: ComponentFixture<NiTableLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiTableLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiTableLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
