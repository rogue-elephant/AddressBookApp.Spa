import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Observable } from 'rxjs';
import { IContact } from '../shared/models/IContact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public contacts : Observable<IContact[]>

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.contacts = this.api.getContacts();
  }

}
