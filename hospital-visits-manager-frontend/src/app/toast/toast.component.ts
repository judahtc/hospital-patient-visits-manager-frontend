import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent implements OnInit {
  @Input() message: string = ''; // Default value is an empty string
  @Input() type: 'success' | 'failed' = 'success';

  success = false;

  show = true;
  ngOnInit(): void {
    if (this.type == 'success') {
      this.success = true;
    } else {
      this.success = false;
    }
  }
}
