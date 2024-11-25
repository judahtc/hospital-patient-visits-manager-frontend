import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VisitService {
  constructor(private http: HttpClient) {}

  confirm_patient(patient_id: string) {
    return this.http.get(
      'http://localhost:8000/visitors/by-national-id/' + patient_id
    );
  }
}
