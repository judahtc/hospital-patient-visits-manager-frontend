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
  deleteButton = false;
  show = true;
  type: string = '';
  message: string = '';

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

  delete_user() {
    this.deleteButton = false;
    this.show = false;
    this.type = '';
    this.message = '';
    let user_ids = JSON.parse(localStorage.getItem('selectedIds') || '[]'); // Parse the IDs from localStorage

    if (Array.isArray(user_ids) && user_ids.length > 0) {
      user_ids.forEach((id) => {
        this.patientService.deletePatient(id).subscribe({
          next: (res) => {
            console.log(`Deleted user with ID`);
            this.message = 'successfully deleted  patient with id:' + id;
            this.type = 'success';
            this.show = true;
            localStorage.setItem('selectedIds', '');
          },
          error: (err) => {
            this.message = 'failed to delete patient with id:' + id;
            this.type = 'failed';
            this.show = true;
            console.error(`Failed to delete user with ID`);
          },
        });
      });
    } else {
      console.warn('No user IDs found to delete.');
    }
  }
}
