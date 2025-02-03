import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLoginComponent } from './patient-login.component';

describe('PatientLoginComponent', () => {
  let component: PatientLoginComponent;
  let fixture: ComponentFixture<PatientLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
