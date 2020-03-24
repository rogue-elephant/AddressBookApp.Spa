import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { IContact } from '../../shared/models/IContact';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';
import { NotificationsService } from '../../shared/services/notifications.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  constructor(private api: ApiService, private notificationService: NotificationsService, private router: Router) {}

  ngOnInit(): void {
  }

  public submitFormHandler(contactInfo: IContact) {
    this.api.addContact(contactInfo).subscribe(result => {
      this.notificationService.showNotification('Success', `Contact ${contactInfo.firstName} ${contactInfo.surname} created successfully!`, 'success');
      this.router.navigate(['/contacts']);
    });
  }

}
