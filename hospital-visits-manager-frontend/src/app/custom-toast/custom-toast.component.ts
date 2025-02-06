import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-toast.component.html',
  styleUrl: './custom-toast.component.css',
})
export class CustomToastComponent implements OnInit {
  @Input() message!: string;
  @Input() status!: string;
  @Input() clicked!: boolean;
  success: boolean = false;
  @Output() closeToast = new EventEmitter<boolean>();

  ngOnInit(): void {
    if (this.status == 'success') {
      this.success = true;
    } else {
      this.success = false;
    }
  }

  close() {
    this.closeToast.emit(false);
  }
}
