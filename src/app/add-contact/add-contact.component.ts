import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { IContact } from '../shared/models/IContact';
import { ApiService } from '../shared/services/api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  constructor(private api: ApiService, private snackbar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
  }

  public submitFormHandler(contactInfo: IContact) {
    this.api.addContact(contactInfo).subscribe(result => {
      this.snackbar.open(`Contact ${contactInfo.firstName} ${contactInfo.surname} created successfully!`);
      this.router.navigate(['/contacts']);
    });
  }

}
