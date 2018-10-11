import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  constructor(private http: Http) { }

  getData(): Promise<Student[]> { 
    // get함수가 리턴하는 Observable 객체를 toPromise 함수에서
    // Promise객체로 변경한다.
    return this.http.get('./assets/server/student.json')
    .toPromise().then(res => { console.log(res); 
      return res.json().data.stu; }); 
      // res.json() : 데이터를 추출한다.
      // res.json().info.idols : 필요한 데이터만 뽑아내서 리턴한다.
    }
}
