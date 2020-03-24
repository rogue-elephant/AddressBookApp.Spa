import { Component, OnInit, Input } from '@angular/core';
import { IContact } from '../shared/models/IContact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input()
  contact: IContact;

  constructor() { }

  ngOnInit(): void {
  }

}
