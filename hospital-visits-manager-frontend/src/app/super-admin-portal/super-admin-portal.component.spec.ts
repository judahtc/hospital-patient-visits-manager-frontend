import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminPortalComponent } from './super-admin-portal.component';

describe('SuperAdminPortalComponent', () => {
  let component: SuperAdminPortalComponent;
  let fixture: ComponentFixture<SuperAdminPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperAdminPortalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperAdminPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
