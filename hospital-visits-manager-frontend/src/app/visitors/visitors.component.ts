import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-visitors',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './visitors.component.html',
  styleUrl: './visitors.component.css',
})
export class VisitorsComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  showModal = false;

  openModal() {
    this.showModal = true;

    this.form = this.fb.group({
      name: [''],
      date: [''],
      time: [''],
      national_id: [''],
      phone_number: [''],
    });
  }

  onSub() {
    this.form.value['visit_date'] =
      this.form.value['date'] + ' ' + this.form.value['time'] + ':00.000';
    console.log(this.form.value);
    console.log(this.form.value);
    console.log(this.form.value);
    console.log(this.form.value);
    console.log(this.form.value);
  }

  closeModal() {
    this.showModal = false;
  }

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
