import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../shared/services/api.service';
import { IContact } from '../shared/models/IContact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input()
  isUpdate = false;

  @Input()
  public contact: IContact = {
    firstName:'',
    surname: '',
    email: '',
    dateOfBirth: '',
    insertedUtc: '',
    updatedUtc: ''
  };

  @Output()
  public submitFormEvent: EventEmitter<IContact> = new EventEmitter<IContact>();

  public contactForm: FormGroup;
  public maxDobDate: Date;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
   }

  ngOnInit(): void {
    this.maxDobDate = new Date();
    const dobValidator = (control: FormControl): {[key: string]: any} =>
      new Date(Date.parse(control.value)) > this.maxDobDate ? { invalidDateOfBirth: true } : null;

    this.contactForm = this.formBuilder.group({
      firstName: [this.contact.firstName, [Validators.required, Validators.maxLength(100)]],
      surname: [this.contact.surname, [Validators.required, Validators.maxLength(100)]],
      email: [this.contact.email, this.isUpdate ? [] : [Validators.required, Validators.email]],
      dateOfBirth: [this.contact.dateOfBirth ? new Date(this.contact.dateOfBirth) : '', [Validators.required, dobValidator]]
    });
  }

  public onSubmit(contactInfo: IContact) {
    this.submitFormEvent.emit(contactInfo);
  }

}
