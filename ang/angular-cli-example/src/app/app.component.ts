import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // 화면 구조 
  styleUrls: ['./app.component.css']  // 화면 디자인
})
export class AppComponent { // javascript 화면 데이터, 로직 
  title = 'Hello 메롱!';
  message: string = "이승우♡송수진";
  
  pop(data, t, e, $e) {
    console.log(data);
    console.log(t);
    // AppComponent {title: "Hello 메롱!", message: "이승우♡송수진"}

    console.log(e);
    // undefined 
    console.log($e); 
    // MouseEvent {isTrusted: true, screenX: 61, screenY: 279, clientX: 61, clientY: 213, …}
    
    alert('이승우♡송수진');
  }
}

// 1. app.component.html
// 2. app.component.css
// 3. AppComponent
// 세개의 요소를 묶어서 컴포넌트라고 부른다.
// 코드에서는 AppComponent라는 자료형을 사용하고
// HTML에서는 selector : 'app-root'에서 지정한 app-root태그로 사용할 수있다.
// 브라우저에세 전달하는 index.html내에 <app-root></app-root> 라고 selector 문자열을 
// 태그처럼 사용할 수 있다.
