import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationscreenComponent } from './registrationscreen.component';

describe('RegistrationscreenComponent', () => {
  let component: RegistrationscreenComponent;
  let fixture: ComponentFixture<RegistrationscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
