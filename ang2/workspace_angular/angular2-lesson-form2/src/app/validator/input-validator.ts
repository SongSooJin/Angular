import { FormControl } from '@angular/forms';

export class InputValidator {
  // 데코레이터, 인터페이스도 없다.
  // 함수는 개발자 마음대로 작성할 수 있다는 의미가 된다.
  // 단, FormControl 객체를 파라미터로 받는다.
  // 그리고, (함수명 : 불린값) 형태의 객체를 리턴해야 한다.
  
  // static : .찍고 사용할 려고 붙임
  static startWithNumber(control: FormControl) {
    // 값이 숫자면 true
    let valid = /^\d/.test(control.value);
    //  /^\d/.test => true/fasle 값을 리턴

    if (valid && control.value !== '' && !isNaN(control.value.charAt(0))) {
      // control.value : string (문자열) , charAt(0): 해당문자열의 첫글자 
      // 데이터가 원하는 작성규칙에 위반되면 true를 리턴한다.
      return { startWithNumber: true };
    }

    return null;
  }
}

