import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  title:string;
  constructor(){
    this.title="My Angular SPA 2.0";
  }
}
