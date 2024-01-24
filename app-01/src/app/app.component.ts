import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;

  firstName:string;
  lastName:string;

  constructor(){
    this.title="My First Angular App";
    this.firstName="Some";
    this.lastName="Body";
  }
}
