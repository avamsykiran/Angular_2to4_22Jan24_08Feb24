import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  str:string;
  num:number;
  today:Date;

  constructor(){
    this.today=new Date();
    this.str="how Are you All?";
    this.num=123.4567;
  }

}
