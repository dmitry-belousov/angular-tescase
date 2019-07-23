import { Injectable } from '@angular/core';
import { IToastOptions } from '../helpers/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  show(text: string, options: IToastOptions) {
    this.toasts.push({ text, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
  constructor() { }
}
