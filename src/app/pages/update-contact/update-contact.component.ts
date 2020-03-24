import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IContact } from '../shared/models/IContact';
import { Observable } from 'rxjs';
import { NotificationsService } from '../shared/services/notifications.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {
  public contact$: Observable<IContact>;

  constructor(private api: ApiService, private notificationsService: NotificationsService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(paramMap => {
      const email: string = paramMap.get('email');
      this.contact$ = this.api.getContact(email);
    });
  }

  ngOnInit(): void {

  }

  public submitFormHandler(contactInfo: IContact) {
    this.api.updateContact(contactInfo).subscribe(result => {
      this.notificationsService.showNotification('Success', `Contact ${contactInfo.firstName} ${contactInfo.surname} updated successfully!`, 'success');
      this.router.navigate(['/contacts']);
    });
  }
}
