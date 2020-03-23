import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IContact } from '../shared/models/IContact';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {
  @Input()
  contact: IContact;

  loaded = false;

  constructor(private api: ApiService, private snackbar: MatSnackBar, private router: Router) {
    this.contact = this.contact ? this.contact : (this.router.getCurrentNavigation().extras.state.contact as IContact);
    if(this.contact) this.loaded = true;
  }

  ngOnInit(): void {

  }

  public submitFormHandler(contactInfo: IContact) {
    this.api.updateContact(contactInfo).subscribe(result => {
      this.snackbar.open(`Contact ${contactInfo.firstName} ${contactInfo.surname} updated successfully!`);
      this.router.navigate(['/contacts']);
    });
  }
}
