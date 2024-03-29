import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts:Contact[];
  private nextContactId:number;

  constructor() {
    this.contacts=[
      {id:1,fullName:"Vamsy",mobile:"9052224753",mailId:"vamsy@gmail.com",age:23},
      {id:2,fullName:"Sagar",mobile:"9052224752",mailId:"sagar@gmail.com",age:33},
      {id:3,fullName:"Suresh",mobile:"9052224751",mailId:"suyresh@gmail.com",age:78}
    ];
    this.nextContactId=4;
   }

   getAll():Contact[]{
    return [...this.contacts];
   }

   getById(id:number):Contact|undefined {
    return this.contacts.find(c => c.id===id);
   }

   add(contact:Contact):void{
    contact.id=this.nextContactId++;
    this.contacts.push(contact);
   }

   update(contact:Contact):void{
    let index = this.contacts.findIndex(c => c.id===contact.id);
    if(index>-1){
      this.contacts[index]=contact;
    }
   }

   deleteById(id:number):void{
    let index = this.contacts.findIndex(c => c.id===id);
    if(index>-1){
      this.contacts.splice(index,1);
    }
   }
}
