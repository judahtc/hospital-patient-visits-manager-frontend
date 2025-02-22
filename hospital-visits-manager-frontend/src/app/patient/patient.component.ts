import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css',
})
export class PatientComponent implements OnInit {
  email: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.email = this.route.snapshot.params['id'];
  }
}
