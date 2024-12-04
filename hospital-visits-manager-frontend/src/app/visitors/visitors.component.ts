import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-visitors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visitors.component.html',
  styleUrl: './visitors.component.css',
})
export class VisitorsComponent {
  visitors = [
    {
      name: 'John Doe',
      visited: false,
      visit_date: '2024-12-04T12:00:00',
    },
    {
      name: 'Jane Smith',
      visited: true,
      visit_date: '2024-11-28T09:30:00',
    },
    {
      name: 'Alice Brown',
      visited: false,
      visit_date: '2024-12-01T15:45:00',
    },
    {
      name: 'Michael Johnson',
      visited: true,
      visit_date: '2024-12-02T18:20:00',
    },
    {
      name: 'Emily Davis',
      visited: false,
      visit_date: '2024-12-03T14:10:00',
    },
  ];
}
