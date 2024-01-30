import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number): string {
    
    let strVal = `${value}`;
  
    let decimalIndex = strVal.indexOf(".");
    let realPart = strVal.substring(0,decimalIndex);
    let decimalPart = strVal.substring(decimalIndex);

    let result:string="";

    if(realPart.length<=3){
      result = realPart;
    }else{
      /*
          4		,				
          5		,
          6		,	,
          7		,	,
          8		,	,	,

          1,234
          12,345
          1,23,456
      */
    }

    return result + decimalPart;
  }

}
