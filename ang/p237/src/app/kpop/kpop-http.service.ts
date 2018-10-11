import { Injectable } from '@angular/core';

// 앵귤러가 제공하는 HTTP 통신 기술
import { Http } from "@angular/http";
import { Kpop } from './kpop.model';

// toPromise 기능을 사용하기 위해서 폴리필 코드를 기동시킨다.
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})

export class KpopHttpService {

  constructor(private http: Http) { }

  getIdols(): Promise<Kpop[]> { 
    // get함수가 리턴하는 Observable 객체를 toPromise 함수에서
    // Promise객체로 변경한다.
    return this.http.get('./assets/server/kpop.json')
    .toPromise().then(res => { console.log(res); 
      return res.json().info.idols; }); 
      // res.json() : 데이터를 추출한다.
      // res.json().info.idols : 필요한 데이터만 뽑아내서 리턴한다.
    }

}
