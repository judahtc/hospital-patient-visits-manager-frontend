import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ToastServiceService {
  isVisible = false;
  message = '';
  toastType: 'success' | 'error' | 'warning' = 'success';
  private timeout: any;
  constructor() {}

  showToast(
    message: string,
    type: 'success' | 'error' | 'warning' = 'success'
  ): void {
    this.message = message;
    this.toastType = type;
    this.isVisible = true;

    // Automatically hide the toast after 3 seconds
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.hideToast(), 3000);
  }

  hideToast(): void {
    this.isVisible = false;
  }
}
