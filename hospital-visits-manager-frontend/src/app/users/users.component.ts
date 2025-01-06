import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  not_checked = true;
  all_users: any;
  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.read_users();
  }
  users = [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      phone_number: '1234567890',
      role: 'Admin',
      created_at: '2024-12-04T10:00:00',
      updated_at: '2024-12-04T10:00:00',
      is_active: true,
      hospital_id: 101,
    },
    {
      id: 2,
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'jane.smith@example.com',
      phone_number: '0987654321',
      role: 'Manager',
      created_at: '2024-12-04T10:10:00',
      updated_at: '2024-12-04T10:10:00',
      is_active: true,
      hospital_id: 102,
    },
    {
      id: 3,
      first_name: 'Emily',
      last_name: 'Johnson',
      email: 'emily.johnson@example.com',
      phone_number: '5678901234',
      role: 'Admin',
      created_at: '2024-12-04T10:20:00',
      updated_at: '2024-12-04T10:20:00',
      is_active: true,
      hospital_id: 101,
    },
    {
      id: 4,
      first_name: 'Michael',
      last_name: 'Brown',
      email: 'michael.brown@example.com',
      phone_number: '4321098765',
      role: 'Supervisor',
      created_at: '2024-12-04T10:30:00',
      updated_at: '2024-12-04T10:30:00',
      is_active: false,
      hospital_id: 103,
    },
    {
      id: 5,
      first_name: 'Sophia',
      last_name: 'Davis',
      email: 'sophia.davis@example.com',
      phone_number: '6789012345',
      role: 'Admin',
      created_at: '2024-12-04T10:40:00',
      updated_at: '2024-12-04T10:40:00',
      is_active: true,
      hospital_id: 102,
    },
    {
      id: 6,
      first_name: 'James',
      last_name: 'Wilson',
      email: 'james.wilson@example.com',
      phone_number: '9876543210',
      role: 'Admin',
      created_at: '2024-12-04T10:50:00',
      updated_at: '2024-12-04T10:50:00',
      is_active: true,
      hospital_id: 104,
    },
    {
      id: 7,
      first_name: 'Oliver',
      last_name: 'Taylor',
      email: 'oliver.taylor@example.com',
      phone_number: '4567890123',
      role: 'Admin',
      created_at: '2024-12-04T11:00:00',
      updated_at: '2024-12-04T11:00:00',
      is_active: false,
      hospital_id: 105,
    },
  ];

  columnNames = Object.keys(this.users[0]);

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

  read_users() {
    this.userService.get_all_users().subscribe({
      next: (res) => {
        this.all_users = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
