import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  apiUrl:string;

  constructor(private httpClient:HttpClient) {
    this.apiUrl = "http://localhost:9999/contacts";
  }

  getAll(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.apiUrl);
  }

  getById(id: number): Observable<Contact>{
    return this.httpClient.get<Contact>(this.apiUrl + "/" + id);
  }

  add(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(this.apiUrl,{...contact,id:undefined});
  }

  update(contact: Contact): Observable<Contact> {
    return this.httpClient.put<Contact>(this.apiUrl + "/" + contact.id,contact);
  }

  deleteById(id: number):Observable<void>{
    return this.httpClient.delete<void>(this.apiUrl + "/" + id);
  }
}
