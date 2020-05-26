import {Injectable, TemplateRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  showError(text: string) {
    this.show(text, {classname: 'bg-danger text-light', delay: 15000});
  }

  showSuccess(text: string) {
    this.show(text, {classname: 'bg-success text-light', delay: 15000});
  }

  show(text: string, options: any = {}) {
    const toast = {text, ...options};
    this.toasts.push(toast);
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
