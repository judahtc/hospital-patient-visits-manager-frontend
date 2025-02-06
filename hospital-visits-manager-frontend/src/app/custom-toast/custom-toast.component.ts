import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

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
  success: boolean = false;

  ngOnInit(): void {
    if (this.status == 'success') {
      this.success = true;
    } else {
      this.success = false;
    }
  }
}
