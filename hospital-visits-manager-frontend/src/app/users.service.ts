import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  base_url = 'http://localhost:8000//';
  confirm_patient(patient_id: string) {
    this.http.get(
      'http://localhost:8000//visitors/by-national-id/' + patient_id
    );
  }

  get_all_users() {
    return this.http.get('http://localhost:8000/admin/');
  }
  deletePatient(id: any) {
    return this.http.get(
      'http://localhost:8000//visitors/by-national-id/' + id
    );
  }
}
