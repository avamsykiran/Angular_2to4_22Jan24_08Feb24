import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts-list-item',
  templateUrl: './contacts-list-item.component.html',
  styleUrls: ['./contacts-list-item.component.css']
})
export class ContactsListItemComponent {

  @Input()
  contact!:Contact;

  @Output()
  delBtnClicked:EventEmitter<number>;

  constructor(){
    this.delBtnClicked = new EventEmitter<number>;
  }

  raiseDelBtnClicked(){
    this.delBtnClicked.emit(this.contact.id);
  }
}
