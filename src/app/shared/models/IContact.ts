/** Interface representing a Contact model.
 * To be used to communicate with the API.
 * @export
 * @interface IContact
 */
export interface IContact {
    firstName: string;
    surname: string;
    /** The email of the contact - NOTE: this should be unique between contacts.
     * @type {string}
     * @memberof IContact
     */
    email: string;
    dateOfBirth: string;
    /** The timestamp that the contact was first created in the repository.
     * Automatically generated.
     * @type {string}
     * @memberof IContact
     */
    insertedUtc: string;
    /** The timestamp that the contact was last updated in the repository.
     * Automatically generated.
     * @type {string}
     * @memberof IContact
     */
    updatedUtc: string;
}
