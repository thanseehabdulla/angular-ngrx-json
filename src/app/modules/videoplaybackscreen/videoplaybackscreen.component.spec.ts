import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoplaybackscreenComponent } from './videoplaybackscreen.component';

describe('VideoplaybackscreenComponent', () => {
  let component: VideoplaybackscreenComponent;
  let fixture: ComponentFixture<VideoplaybackscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoplaybackscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoplaybackscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
