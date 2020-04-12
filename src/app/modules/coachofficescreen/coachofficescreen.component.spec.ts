import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachofficescreenComponent } from './coachofficescreen.component';

describe('CoachofficescreenComponent', () => {
  let component: CoachofficescreenComponent;
  let fixture: ComponentFixture<CoachofficescreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachofficescreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachofficescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
