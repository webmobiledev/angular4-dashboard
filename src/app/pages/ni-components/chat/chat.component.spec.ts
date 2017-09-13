import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNiChatComponent } from './chat.component';

describe('PageNiChatComponent', () => {
  let component: PageNiChatComponent;
  let fixture: ComponentFixture<PageNiChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNiChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNiChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
