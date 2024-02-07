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
      next: data =>  this.contacts=data,
      error: err => {console.log(err); this.errMsg="Unable to fetech the data as of now! Regret Inconvinience!"}
    });
  }

  delContact(id:number){
    this.cs.deleteById(id).subscribe({
      next: () =>  this.loadData(),
      error: err => {console.log(err); this.errMsg="Unable to delete data as of now! Regret Inconvinience!"}
    })
  }
}
