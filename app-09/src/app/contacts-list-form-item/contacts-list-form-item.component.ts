import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts-list-form-item',
  templateUrl: './contacts-list-form-item.component.html',
  styleUrls: ['./contacts-list-form-item.component.css']
})
export class ContactsListFormItemComponent {

  @Input()
  contact!: Contact;

  @Output()
  saveBtnClicked: EventEmitter<Contact>;

  @Output()
  cancelBtnClicked: EventEmitter<number>;

  contactForm: FormGroup;

  id: FormControl;
  fullName: FormControl;
  mailId: FormControl;
  mobile: FormControl;
  age: FormControl;

  errMsg!: string;

  constructor() {
    this.saveBtnClicked = new EventEmitter<Contact>();
    this.cancelBtnClicked = new EventEmitter<number>();

    this.id = new FormControl(0);
    this.fullName = new FormControl("", [Validators.required, Validators.minLength(4)]);
    this.mobile = new FormControl("", [Validators.required, Validators.pattern("[1-9][0-9]{9}")]);
    this.mailId = new FormControl("", [Validators.required, Validators.email]);
    this.age = new FormControl("", [Validators.required, this.ageRangeValidator]);

    this.contactForm = new FormGroup({
      id: this.id,
      fullName: this.fullName,
      mobile: this.mobile,
      mailId: this.mailId,
      age: this.age
    });
  }

  ngOnChanges() {
    if (this.contact) {
      this.contactForm.reset(this.contact);
    }
  }

  ageRangeValidator(control: AbstractControl): ValidationErrors | null {
    let isValid: boolean = true;

    if (control.value) {
      let value = Number(control.value);
      isValid = value >= 18 && value <= 100;
    }

    return isValid ? null : { ageRange: true };
  }

  formSubmitted() {
    this.saveBtnClicked.emit(this.contactForm.value);
    this.contactForm.reset({ id: 0, fullName: "", mobile: "", mailId: "", age: 0 });
  }

  raiseCancelBtnClicked() {
    if (this.contact) {
      this.cancelBtnClicked.emit(this.contact.id);
    } else {
      this.contactForm.reset({ id: 0, fullName: "", mobile: "", mailId: "", age: 0 });
    }
  }
}
