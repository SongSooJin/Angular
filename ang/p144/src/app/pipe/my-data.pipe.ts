import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myData'
})
export class MyDataPipe implements PipeTransform {
  
  // {{strData | myData}:","}
  // strData ==> 첫번째 파라미터
  // "," ==> 두번째 파라미터 

  transform(value: any, exponent?: any ): any {
    
    if (!exponent) {
      exponent = '-'; 
    } 
    console.log(value.length);
    if (value.length == 8) { 
      return value.substring(0, 4) + 
      exponent + value.substring(4, 6) + 
      exponent + value.substring(6, 8); 
    } 
    else { return value; }
    
  }

}
