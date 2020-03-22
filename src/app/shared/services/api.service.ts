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

  private formatContact = (contact: IContact) => ({...contact, dateOfBirth: new Date(contact.dateOfBirth).toLocaleDateString()});

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
}
