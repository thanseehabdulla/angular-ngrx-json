import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatmessageboxComponent } from './chatmessagebox.component';

describe('ChatmessageboxComponent', () => {
  let component: ChatmessageboxComponent;
  let fixture: ComponentFixture<ChatmessageboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatmessageboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatmessageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
