import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {

  contacts:Contact[];

  constructor(private cs:ContactsService){
    this.contacts=cs.getAll();
  }
}
