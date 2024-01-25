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

  logos:string[];
  logoIndex:number;
  logoWidth:number;

  cFlag:boolean;
  bFlag:boolean;

  constructor(){
    this.title="My First Angular App";
    this.firstName="Some";
    this.lastName="Body";

    this.logoIndex=0;
    this.logos=[
      "assets/imgs/w1.jpg",
      "assets/imgs/w2.jpg",
      "assets/imgs/w3.jpg",
      "assets/imgs/w4.jpg"
    ];
    this.logoWidth=400;
    this.cFlag=true;
    this.bFlag=false;
  }

  toggleIndex(){
    this.logoIndex++;
    if(this.logoIndex==this.logos.length){
      this.logoIndex=0;
    }
  }
}
