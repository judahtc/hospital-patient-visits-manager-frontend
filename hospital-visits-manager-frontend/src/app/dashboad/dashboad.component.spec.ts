import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadComponent } from './dashboad.component';

describe('DashboadComponent', () => {
  let component: DashboadComponent;
  let fixture: ComponentFixture<DashboadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
