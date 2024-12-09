import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';
import { ToastServiceService } from '../toast-service.service';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css',
})
export class PatientsComponent implements OnInit {
  data_list: any[] = [];
  len: number = 0;
  itemsPerPage: number = 8;
  show = false;
  success = false;
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
  constructor(
    private patientService: PatientService,
    private paginationService: PaginationService,

    private toastService: ToastServiceService
  ) {}
  ngOnInit(): void {
    this.collection = this.patient;
    this.data_list = [];
    this.len = this.collection.length;
    this.len = this.len / this.itemsPerPage;
    this.len = Math.ceil(this.len);
    for (let i = 1; i <= this.len; i++) {
      this.data_list.push(i);
    }
  }
  patient = [
    {
      id: 1,
      name: 'John Doe',
      phone_number: '1234567890',
      email: 'johndoe@example.com',
      ward_number: 'A1',
      room_number: '101',
      checkin_date: '2024-11-01T10:00:00',
      checkout_date: '2024-11-10T14:00:00',
    },
    {
      id: 2,
      name: 'Jane Smith',
      phone_number: '0987654321',
      email: 'janesmith@example.com',
      ward_number: 'B2',
      room_number: '202',
      checkin_date: '2024-11-15T08:30:00',
      checkout_date: null,
    },
    {
      id: 3,
      name: 'David Johnson',
      phone_number: '5551234567',
      email: 'david.johnson@example.com',
      ward_number: 'C3',
      room_number: '303',
      checkin_date: '2024-10-28T12:15:00',
      checkout_date: '2024-11-05T16:45:00',
    },
    {
      id: 4,
      name: 'Emily Brown',
      phone_number: '9876543210',
      email: 'emily.brown@example.com',
      ward_number: 'D4',
      room_number: '404',
      checkin_date: '2024-11-20T09:00:00',
      checkout_date: null,
    },
    {
      id: 5,
      name: 'Michael White',
      phone_number: '1230984567',
      email: 'michael.white@example.com',
      ward_number: 'E5',
      room_number: '505',
      checkin_date: '2024-11-18T14:20:00',
      checkout_date: '2024-11-22T11:00:00',
    },
    {
      id: 6,
      name: 'Michael White',
      phone_number: '1230984567',
      email: 'michael.white@example.com',
      ward_number: 'E5',
      room_number: '505',
      checkin_date: '2024-11-18T14:20:00',
      checkout_date: '2024-11-22T11:00:00',
    },
    {
      id: 7,
      name: 'Michael White',
      phone_number: '1230984567',
      email: 'michael.white@example.com',
      ward_number: 'E5',
      room_number: '505',
      checkin_date: '2024-11-18T14:20:00',
      checkout_date: '2024-11-22T11:00:00',
    },
    {
      id: 8,
      name: 'Michael White',
      phone_number: '1230984567',
      email: 'michael.white@example.com',
      ward_number: 'E5',
      room_number: '505',
      checkin_date: '2024-11-18T14:20:00',
      checkout_date: '2024-11-22T11:00:00',
    },
    {
      id: 9,
      name: 'Michael White',
      phone_number: '1230984567',
      email: 'michael.white@example.com',
      ward_number: 'E5',
      room_number: '505',
      checkin_date: '2024-11-18T14:20:00',
      checkout_date: '2024-11-22T11:00:00',
    },
    {
      id: 10,
      name: 'Michael White',
      phone_number: '1230984567',
      email: 'michael.white@example.com',
      ward_number: 'E5',
      room_number: '505',
      checkin_date: '2024-11-18T14:20:00',
      checkout_date: '2024-11-22T11:00:00',
    },
  ];
  columnNames = Object.keys(this.patient[0]);

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  showToast(message: any, type: any) {
    if (type == 'success') {
      this.success = true;
    } else {
      this.success = false;
    }
    this.show = true;
    this.toastService.showToast(message, type);
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
    // Update localStorage
    localStorage.setItem('selectedIds', JSON.stringify(selectedIds));
  }
  delete_user() {
    let user_ids = JSON.parse(localStorage.getItem('selectedIds') || '[]'); // Parse the IDs from localStorage

    if (Array.isArray(user_ids) && user_ids.length > 0) {
      user_ids.forEach((id) => {
        this.patientService.deletePatient(id).subscribe({
          next: (res) => {
            console.log(`Deleted user with ID`);
          },
          error: (err) => {
            console.error(`Failed to delete user with ID`);
          },
        });
      });
    } else {
      console.warn('No user IDs found to delete.');
    }
  }
}
