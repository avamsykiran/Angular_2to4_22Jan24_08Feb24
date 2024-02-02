import { Component } from '@angular/core';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts-list-form-item',
  templateUrl: './contacts-list-form-item.component.html',
  styleUrls: ['./contacts-list-form-item.component.css']
})
export class ContactsListFormItemComponent {

  isEditing!:boolean;

  contactForm:FormGroup;

  id:FormControl;
  fullName:FormControl;
  mailId:FormControl;
  mobile:FormControl;

  constructor(private cs:ContactsService,private router:Router,private activatedRoute:ActivatedRoute){

    this.id = new FormControl(0);
    this.fullName=new FormControl("",[Validators.required,Validators.minLength(4)]);
    this.mobile=new FormControl("",[Validators.required,Validators.pattern("[1-9][0-9]{9}")]);
    this.mailId=new FormControl("",[Validators.required,Validators.email]);

    this.contactForm = new FormGroup({
      id:this.id,
      fullName:this.fullName,
      mobile:this.mobile,
      mailId:this.mailId
    });

    let cidParam = this.activatedRoute.snapshot.params["cid"];
    if(cidParam){
      this.isEditing=true;
      this.contactForm.reset(this.cs.getById(Number(cidParam)));
    }
  }

  formSubmitted(){
    if(this.isEditing){
      this.cs.update(this.contactForm.value);
    }else{
      this.cs.add(this.contactForm.value);
    }
    this.router.navigateByUrl("/");
  }
}
