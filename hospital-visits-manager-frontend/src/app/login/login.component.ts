import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  password_error = false;
  email_error = false;
  login_error: any;
  constructor(private fb: FormBuilder, private authService: AuthService) {}
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
