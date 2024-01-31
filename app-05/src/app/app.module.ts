import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsListItemComponent } from './contacts-list-item/contacts-list-item.component';
import { ContactsListFormItemComponent } from './contacts-list-form-item/contacts-list-form-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactsListItemComponent,
    ContactsListFormItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
