import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLighter]'
})
export class HighLighterDirective {

  @Input()
  appHighLighter!:string|string[];

  private bgColor1:string;
  private fgColor1:string;
  private bgColor2:string;
  private fgColor2:string;

  constructor(private ele:ElementRef) {

    this.bgColor1="yellow";
    this.fgColor1="red";
    this.bgColor2="black";
    this.fgColor2="white";

    this.setColors(1);
  }

  ngOnChanges(){
    if(this.appHighLighter){
      let colors : string[] = typeof this.appHighLighter==="string"? this.appHighLighter.split(" ") : this.appHighLighter ;
      this.bgColor1=colors[0];
      this.fgColor1=colors[1];
      this.bgColor2=colors[2];
      this.fgColor2=colors[3];
      this.setColors(1);
    }
  }

  setColors(set:number){
    this.ele.nativeElement.style.backgroundColor=set===1?this.bgColor1:this.bgColor2;
    this.ele.nativeElement.style.color=set===1?this.fgColor1:this.fgColor2;
  }

  @HostListener("mouseover")
  handleMouseOver(){
    this.setColors(2);
  }

  @HostListener("mouseleave")
  handleMouseLeave(){
    this.setColors(1);
  }
}
 