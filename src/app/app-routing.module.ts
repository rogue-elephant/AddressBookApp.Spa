import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { UpdateContactComponent } from './pages/update-contact/update-contact.component';


const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent
  },
  { path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
  {
    path: 'add-contact',
    component: AddContactComponent
  },
  {
    path: 'update-contact/:email',
    component: UpdateContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
