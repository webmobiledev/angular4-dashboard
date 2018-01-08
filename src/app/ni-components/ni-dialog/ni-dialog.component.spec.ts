import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiDialogComponent } from './ni-dialog.component';

describe('NiDialogComponent', () => {
  let component: NiDialogComponent;
  let fixture: ComponentFixture<NiDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
