import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './patient-login.component.html',
  styleUrl: './patient-login.component.css',
})
export class PatientLoginComponent implements OnInit {
  form!: FormGroup;
  password_error = false;
  email_error = false;
  login_error: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      email: [''], // default value
      password: [''], // default value
    });
  }

  login_func() {
    this.password_error = false;
    this.email_error = false;
    this.authService.login_users(this.form.value, 'admin').subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigate(['/visitors']);
      },
      error: (error) => {
        if (error.status == 401) {
          this.password_error = true;
          this.login_error = error.error.detail;
        } else if (error.status == 404) {
          this.email_error = true;
          this.login_error = error.error.detail;
        }
      },
    });
  }
}
