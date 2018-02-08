import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChatroomComponent } from './chatroom.component';

describe('PageChatroomComponent', () => {
  let component: PageChatroomComponent;
  let fixture: ComponentFixture<PageChatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChatroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
