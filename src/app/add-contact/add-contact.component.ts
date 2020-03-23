import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { IContact } from '../shared/models/IContact';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  public addContactForm: FormGroup;
  public maxDobDate: Date;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
    this.maxDobDate = new Date();
    const dobValidator = (control: FormControl): {[key: string]: any} =>
      new Date(Date.parse(control.value)) > this.maxDobDate ? { invalidDateOfBirth: true } : null;

    this.addContactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(100)]],
      surname: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', [Validators.required, dobValidator]]
    });
   }

  ngOnInit(): void {
  }

  public onSubmit(contactInfo: IContact) {
    this.api.addContact(contactInfo).subscribe(result => {
      alert("Added successfully");
      this.addContactForm.reset();
    });
  }

}
