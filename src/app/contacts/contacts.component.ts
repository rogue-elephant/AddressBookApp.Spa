import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Observable } from 'rxjs';
import { IContact } from '../shared/models/IContact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public contacts : Observable<IContact[]>

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.contacts = this.api.getContacts();
  }

  openUpdatePage(contact: IContact) {
    this.router.navigate(['/update-contact', JSON.stringify(contact)]);
  }
}
