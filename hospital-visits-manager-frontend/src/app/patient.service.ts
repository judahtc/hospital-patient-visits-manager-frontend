import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}
  base_url = 'http://localhost:8002/';
  confirm_patient(patient_id: string) {
    this.http.get(
      'http://localhost:8002/visitors/by-national-id/' + patient_id
    );
  }

  get_all_patients() {
    return this.http.get('http://localhost:8002/patients/');
  }
  get_patient(email: string) {
    return this.http.get('http://localhost:8002/patients/' + email);
  }
  add_visitor(body: object) {
    return this.http.post('http://localhost:8002/visitors/', body);
  }
  add_patient(body: object) {
    return this.http.post('http://localhost:8002/patients/', body);
  }
  deletePatient(id: any) {
    return this.http.get('http://localhost:8002/visitors/by-national-id/' + id);
  }
}
