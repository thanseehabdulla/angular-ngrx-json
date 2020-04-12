import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationscreenComponent } from './conversationscreen.component';

describe('ConversationscreenComponent', () => {
  let component: ConversationscreenComponent;
  let fixture: ComponentFixture<ConversationscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
