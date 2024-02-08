import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {

  contacts!:Contact[];
  errMsg!:string;

  constructor(private cs:ContactsService){    
  }

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.cs.getAll().subscribe({
      next: contacts =>  this.contacts=contacts,
      error: err => {console.log(err); this.errMsg="Unable to fetech the data as of now! Regret Inconvinience!"}
    });
  }

  delContact(id:number){
    this.cs.deleteById(id).subscribe({
      next: () =>  this.loadData(),
      error: err => {console.log(err); this.errMsg="Unable to delete data as of now! Regret Inconvinience!"}
    })
  }

  addContact(contact:Contact){
    this.cs.add(contact).subscribe({
      next: contact =>  this.loadData(),
      error: err => {console.log(err); this.errMsg="Unable to save data as of now! Regret Inconvinience!"}
    })
  }

  updateContact(contact:Contact){
    contact.editable=undefined;
    this.cs.update(contact).subscribe({
      next: contact =>  this.loadData(),
      error: err => {console.log(err); this.errMsg="Unable to save data as of now! Regret Inconvinience!"}
    })
  }

  markEditable(id:number){
    let index = this.contacts.findIndex(c => c.id===id);
    this.contacts[index].editable=true;
  }

  unMarkEditable(id:number){
    let index = this.contacts.findIndex(c => c.id===id);
    this.contacts[index].editable=undefined;
  }
}
