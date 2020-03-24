import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { IContact } from "../models/IContact";
import { Observable } from "rxjs";

/** Service for handling all interactions with the API.
 * @export
 * @class ApiService
 */
@Injectable({
  providedIn: "root"
})
export class ApiService {
  private apiBaseUrl = "/api/";

  constructor(private httpClient: HttpClient) {}

  private formateDate = (datetime: string) => new Date(datetime).toString();
  private formatContact = (contact: IContact) => {
    var updatedContact: IContact = {
      ...contact,
      dateOfBirth: this.formateDate(contact.dateOfBirth),
      insertedUtc: this.formateDate(contact.insertedUtc),
      updatedUtc: this.formateDate(contact.updatedUtc)
    };
    return updatedContact;
  };

  /** Retrieves all contacts from the API.
   * @returns {Observable<IContact[]>}
   * @memberof ApiService
   */
  public getContacts(): Observable<IContact[]> {
    return this.httpClient
      .get(`${this.apiBaseUrl}contacts`)
      .pipe(
        map((response: any[]) =>
          response.map(contact => this.formatContact(contact))
        )
      );
  }

  /** Retrieves the contact information for the specified email.
   * @param {string} email
   * @returns {Observable<IContact>}
   * @memberof ApiService
   */
  public getContact(email: string): Observable<IContact> {
    return this.httpClient
      .get(`${this.apiBaseUrl}contacts/${email}`)
      .pipe(map((contact: IContact) => this.formatContact(contact)));
  }

  /** Creates a new contact via the API.
   * @param {IContact} contact
   * @returns {Observable<IContact>} The information for the newly created contact.
   * @memberof ApiService
   */
  public addContact(contact: IContact): Observable<IContact> {
    return this.httpClient
      .post(`${this.apiBaseUrl}contacts`, contact)
      .pipe(map((contact: IContact) => this.formatContact(contact)));
  }

  /** Updates the contact information via the API
   * @param {IContact} contact
   * @returns {Observable<IContact>} The information for the newly updated contact.
   * @memberof ApiService
   */
  public updateContact(contact: IContact): Observable<IContact> {
    return this.httpClient
      .put(`${this.apiBaseUrl}contacts/${contact.email}`, contact)
      .pipe(map((contact: IContact) => this.formatContact(contact)));
  }
}
