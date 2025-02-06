import { Component, Input, input, OnInit, ViewChild } from '@angular/core';
import { VisitService } from '../visit.service';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastServiceService } from '../toast-service.service';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

@Component({
  selector: 'app-visits',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CustomToastComponent,
    CustomToastComponent,
  ],
  templateUrl: './visits.component.html',
  styleUrl: './visits.component.css',
})
export class VisitsComponent implements OnInit {
  visitor: any;
  searched = false;
  form!: FormGroup;
  not_found = false;
  show = false;
  message: string = '';
  type: string = '';

  constructor(
    private visitService: VisitService,
    private fb: FormBuilder,
    private toastService: ToastServiceService
  ) {}

  ngOnInit(): void {
    // this.search_visitor('67-161886z67');

    this.form = this.fb.group({
      visitor_id: [''],
    });
  }

  Toast(message: any, type: any) {
    this.show = true;
    this.message = message;
    this.type = type;
  }
  CloseToast(toast: boolean) {
    this.show = toast;
  }
  search_visitor() {
    this.visitService.confirm_patient(this.form.value['visitor_id']).subscribe({
      next: (result) => {
        this.searched = true;
        this.not_found = false;
        this.visitor = result;
      },
      error: (error) => {
        console.log(error);
        if (error.status == 404) {
          this.not_found = true;
          this.searched = false;
        }
      },
    });
  }
}
