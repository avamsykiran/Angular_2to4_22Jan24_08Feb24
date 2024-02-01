import { Component } from '@angular/core';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacts-list-form-item',
  templateUrl: './contacts-list-form-item.component.html',
  styleUrls: ['./contacts-list-form-item.component.css']
})
export class ContactsListFormItemComponent {

  contact:Contact;
  isEditing!:boolean;

  constructor(private cs:ContactsService,private router:Router,private activatedRoute:ActivatedRoute){
    this.contact={id:0,fullName:'',mailId:'',mobile:''};
    let cidParam = this.activatedRoute.snapshot.params["cid"];
    if(cidParam){
      this.isEditing=true;
      this.contact=this.cs.getById(Number(cidParam))??{id:0,fullName:'',mailId:'',mobile:''};
    }
  }

  formSubmitted(){
    if(this.isEditing){
      this.cs.update(this.contact);
    }else{
      this.cs.add(this.contact);
    }
    this.router.navigateByUrl("/");
  }
}
