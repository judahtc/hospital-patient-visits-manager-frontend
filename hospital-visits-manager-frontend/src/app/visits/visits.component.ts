import { Component, OnInit } from '@angular/core';
import { VisitService } from '../visit.service';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-visits',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './visits.component.html',
  styleUrl: './visits.component.css',
})
export class VisitsComponent implements OnInit {
  visitor: any;
  searched = false;
  form!: FormGroup;

  constructor(private visitService: VisitService, private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.search_visitor('67-161886z67');

    this.form = this.fb.group({
      visitor_id: [''],
    });
  }

  search_visitor() {
    this.searched = true;
    this.visitService.confirm_patient(this.form.value['visitor_id']).subscribe({
      next: (result) => {
        this.visitor = result;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
