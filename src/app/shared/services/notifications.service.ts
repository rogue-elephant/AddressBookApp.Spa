import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private snackbar: MatSnackBar) { }

  showNotification(title: string, message: string, className: notificationClassName = 'default') {
    this.snackbar.open(message, title, {panelClass: `notification-${className}`});
  }
}

export type notificationClassName = 'success' | 'error' | 'default';
