import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';
import { ToastServiceService } from '../toast-service.service';
import { ToastComponent } from '../toast/toast.component';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboad',
  standalone: true,
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './dashboad.component.html',
  styleUrl: './dashboad.component.css',
})
export class DashboadComponent implements OnInit {
  data_list: any[] = [];
  len: number = 0;
  itemsPerPage: number = 8;
  show = false;
  success = false;

  message: any;
  type: any;
  patient: any;
  columnNames: any;
  added: boolean = false;

  constructor(
    private patientService: PatientService,
    private paginationService: PaginationService,
    private fb: FormBuilder,
    private toastService: ToastServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.all_patients();
  }
  all_patients() {
    this.patientService.get_all_patients().subscribe({
      next: (res) => {
        this.patient = res;
        console.log(res);
        this.patient = this.patient.slice(0, 7);

        this.data_list = [];

        this.len = this.len / this.itemsPerPage;
        this.len = Math.ceil(this.len);

        this.columnNames = Object.keys(this.patient[0]);

        for (let i = 1; i <= this.len; i++) {
          this.data_list.push(i);
        }
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  routeToPatient(email: string) {
    this.router.navigate(['portal/patient/' + email]);
  }
}
