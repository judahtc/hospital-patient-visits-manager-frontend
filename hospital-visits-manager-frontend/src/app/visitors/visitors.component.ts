import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, HostListener } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { PatientService } from '../patient.service';

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
  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private elementRef: ElementRef
  ) {}
  ngOnInit(): void {}
  showModal = false;
  sidebar = false;
  signout = false;

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
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.signout && !this.elementRef.nativeElement.contains(event.target)) {
      this.signout = false;
    }
  }
  onSub() {
    this.form.value['visit_date'] =
      this.form.value['date'] + ' ' + this.form.value['time'] + ':00.000';
    const visitor = {
      name: this.form.value['name'],
      visited: false,
      visit_date:
        this.form.value['date'] + ' ' + this.form.value['time'] + ':00.000',
      national_id: this.form.value['national_id'],
      patient_id: 1,
    };
    this.patientService.add_visitor(visitor).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  sidebar_toggle() {
    this.sidebar = !this.sidebar;
  }

  closeModal() {
    this.showModal = false;
  }

  popover(event: Event) {
    this.signout = !this.signout;
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
