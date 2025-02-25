import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css',
})
export class PatientComponent implements OnInit {
  email: string = '';
  patient: any;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {}
  ngOnInit(): void {
    this.email = this.route.snapshot.params['id'];
    this.get_patient();
  }

  get_patient() {
    this.patientService.get_patient(this.email).subscribe({
      next: (result) => {
        this.patient = result;
      },
    });
  }
}
