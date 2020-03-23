import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IContact } from '../models/IContact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseUrl = '/api/';

  constructor(private httpClient: HttpClient) { }

  private formateDate = (datetime: string) => new Date(datetime).toLocaleDateString();
  private formatContact = (contact: IContact) => {
    var updatedContact: IContact = {...contact,
    dateOfBirth: this.formateDate(contact.dateOfBirth),
    insertedUtc: this.formateDate(contact.insertedUtc),
    updatedUtc: this.formateDate(contact.updatedUtc)};
    return updatedContact;
  };

  public getContacts() : Observable<IContact[]> {
    return this.httpClient.get(`${this.apiBaseUrl}contacts`)
      .pipe(
        map((response: any[]) => response.map(contact => this.formatContact(contact)))
      );
  }

  public getContact(email: string) : Observable<IContact> {
    return this.httpClient.get(`${this.apiBaseUrl}contacts/${email}`)
      .pipe(
        map((contact: IContact) => this.formatContact(contact))
      );
  }

  public addContact(contact: IContact) : Observable<IContact> {
    return this.httpClient.post(`${this.apiBaseUrl}contacts`, contact)
      .pipe(
        map((contact: IContact) => this.formatContact(contact))
      );
  }

  public updateContact(contact: IContact) : Observable<IContact> {
    return this.httpClient.put(`${this.apiBaseUrl}contacts/${contact.email}`, contact)
      .pipe(
        map((contact: IContact) => this.formatContact(contact))
      );
  }
}
