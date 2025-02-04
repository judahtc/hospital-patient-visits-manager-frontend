import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsPortalComponent } from './patients-portal.component';

describe('PatientsPortalComponent', () => {
  let component: PatientsPortalComponent;
  let fixture: ComponentFixture<PatientsPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientsPortalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientsPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
