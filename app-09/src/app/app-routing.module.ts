import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsListFormItemComponent } from './contacts-list-form-item/contacts-list-form-item.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:"/contacts"},
  {path:"contacts",component:ContactsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
