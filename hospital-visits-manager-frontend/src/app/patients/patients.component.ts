import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';
import { ToastServiceService } from '../toast-service.service';
import { ToastComponent } from '../toast/toast.component';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [
    CommonModule,
    NgxPaginationModule,
    CustomToastComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css',
})
export class PatientsComponent implements OnInit {
  data_list: any[] = [];
  len: number = 0;
  itemsPerPage: number = 8;
  show = false;
  success = false;
  showConfirmDeleteModal: boolean = false;
  message: any;
  type: any;
  patient: any;
  columnNames: any;
  deleteButton = false;
  domtdeleteButton = true;

  added: boolean = false;
  cant_edit = true;
  changePage(page: number) {
    this.p = page;
  }
  data: any[] = [];
  columns: any;
  directionlink = true;

  pageSize: any = 1;

  p: number = 1;
  collection: any[] = this.data;

  not_checked = true;

  // @ts-ignore
  form: FormGroup;
  constructor(
    private patientService: PatientService,
    private paginationService: PaginationService,
    private fb: FormBuilder,
    private toastService: ToastServiceService,
    private router: Router
  ) {}
  ngOnInit() {
    this.form = this.fb.group({
      first_name: [],
      last_name: [],
      email: [],
      phone_number: [],
      next_of_kin_email: [],
      ward_number: [],
      room_number: [],
    });

    localStorage.setItem('selectedIds', '');
    this.all_patients();
    this.collection = this.patient;
    this.data_list = [];
    this.len = this.collection?.length;
    this.len = this.len / this.itemsPerPage;

    this.len = Math.ceil(this.len);
    for (let i = 1; i <= this.len; i++) {
      this.data_list.push(i);
    }
  }

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  onConfirmChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;

    if (inputValue == 'confirm delete') {
      this.deleteButton = true;
      this.domtdeleteButton = false;
    } else {
      this.deleteButton = false;
      this.domtdeleteButton = true;
    }
  }

  showToast(message: any, type: any) {
    if (type == 'success') {
      this.success = true;
    } else {
      this.success = false;
    }
    this.type = type;
    this.message = message;
    this.show = true;
    this.toastService.showToast(message, type);
  }

  all_patients() {
    this.patientService.get_all_patients().subscribe({
      next: (res) => {
        this.patient = res;
        this.collection = this.patient;
        this.data_list = [];
        this.len = this.collection.length;
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

  onsubmit() {
    console.log(this.form.value);
    this.added = false;
    this.show = false;
    this.patientService.add_patient(this.form.value).subscribe({
      next: (result) => {
        this.added = true;

        this.toast();
        this.show = true;
      },
      error: (error) => {
        console.log(error);
        if (error.status == 400) {
          this.message = 'Patient already exist!!!';
        } else {
          this.message =
            'Patient couldnt be added now, please try again later!!!';
        }
        this.added = false;

        this.toast();
        this.show = true;
      },
    });
  }

  toast() {
    if (this.added) {
      this.type = 'success';
      this.message = 'Patient added successfully';

      console.log('type A ' + this.type);
    } else {
      this.type = 'failed';
      this.message = this.message;
      console.log('type B ' + this.type);
    }
  }

  routeToPatient(email: string) {
    this.router.navigate(['portal/patient/' + email]);
  }

  fetchUserEmail() {
    const id: number[] = JSON.parse(
      localStorage.getItem('selectedIds') || '[]'
    );

    this.patientService.get_patient_by_id(id[0]).subscribe((res: any) => {
      const email: string = res.email;
      this.ViewPatient(email);
    });
  }
  ViewPatient(email: string) {
    this.router.navigate(['portal/patient/' + email]);
  }

  closeToast(toast: boolean) {
    this.show = toast;
  }
  closeModal() {
    this.showModal = false;
  }
  onCheckboxChange(event: Event, rowId: any): void {
    const checkbox = event.target as HTMLInputElement;
    let selectedIds: number[] = JSON.parse(
      localStorage.getItem('selectedIds') || '[]'
    );

    if (checkbox.checked) {
      if (!selectedIds.includes(rowId)) {
        selectedIds.push(rowId);
      }
    } else {
      // Remove the ID from localStorage
      selectedIds = selectedIds.filter((id) => id !== rowId);
    }

    if (selectedIds.length > 0) {
      this.not_checked = false;
    } else {
      this.not_checked = true;
    }
    if (selectedIds.length > 1) {
      this.cant_edit = true;
      console.log('More than 2');
    } else {
      this.cant_edit = false;
      console.log('less than 2');
    }

    // Update localStorage
    localStorage.setItem('selectedIds', JSON.stringify(selectedIds));
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
