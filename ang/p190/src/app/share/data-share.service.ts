import { Injectable } from '@angular/core';

// Tip: providedIn: 'root'설정의 적용이 제대로 되기 위해서는 
// 테스트 서버를 재 가동할 필요가 있다.
@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class DataShareService {
  title: string = 'Hello World!'
  
  constructor() { }
  
  getTitle() {
    return this.title;
  }
}
