import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-dashboad',
  standalone: true,
  imports: [],
  templateUrl: './dashboad.component.html',
  styleUrl: './dashboad.component.css',
})
export class DashboadComponent implements OnInit {
  ngOnInit(): void {}
  patient = [
    {
      name: 'John Doe',
      phone_number: '1234567890',
      email: 'johndoe@example.com',
      ward_number: 'A1',
      room_number: '101',
      checkin_date: '2024-11-01T10:00:00',
      checkout_date: '2024-11-10T14:00:00',
    },
    {
      name: 'Jane Smith',
      phone_number: '0987654321',
      email: 'janesmith@example.com',
      ward_number: 'B2',
      room_number: '202',
      checkin_date: '2024-11-15T08:30:00',
      checkout_date: null,
    },
    {
      name: 'David Johnson',
      phone_number: '5551234567',
      email: 'david.johnson@example.com',
      ward_number: 'C3',
      room_number: '303',
      checkin_date: '2024-10-28T12:15:00',
      checkout_date: '2024-11-05T16:45:00',
    },
    {
      name: 'Emily Brown',
      phone_number: '9876543210',
      email: 'emily.brown@example.com',
      ward_number: 'D4',
      room_number: '404',
      checkin_date: '2024-11-20T09:00:00',
      checkout_date: null,
    },
    {
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
}
