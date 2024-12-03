import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css',
})
export class PatientsComponent {
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
  ];
  columnNames = Object.keys(this.patient[0]);

  onCheckboxChange(event: Event, rowId: any): void {
    const checkbox = event.target as HTMLInputElement;
    let selectedIds: number[] = JSON.parse(
      localStorage.getItem('selectedIds') || '[]'
    );

    if (checkbox.checked) {
      // Add the ID to localStorage if not already present
      if (!selectedIds.includes(rowId)) {
        selectedIds.push(rowId);
      }
    } else {
      // Remove the ID from localStorage
      selectedIds = selectedIds.filter((id) => id !== rowId);
    }

    // Update localStorage
    localStorage.setItem('selectedIds', JSON.stringify(selectedIds));
  }
}
