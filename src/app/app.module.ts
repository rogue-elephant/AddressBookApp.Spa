import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { AddContactComponent } from './add-contact/add-contact.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ContactCardComponent } from './contact-card/contact-card.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LoaderComponent } from './loader/loader.component';
import { LoadingService } from './shared/services/loading.service';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AddContactComponent,
    ContactCardComponent,
    UpdateContactComponent,
    ContactFormComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
