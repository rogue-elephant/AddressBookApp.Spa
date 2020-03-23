import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { IContact } from '../shared/models/IContact';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {
  public contact$: Observable<IContact>;

  constructor(private api: ApiService, private snackbar: MatSnackBar, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(paramMap => {
      const email: string = paramMap.get('email');
      this.contact$ = this.api.getContact(email);
    });
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
