import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


import { map } from 'rxjs/operators';
import { Memo } from './Memo.model';

import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MemoHttpService {

  private empsUrl: string = "http://localhost:3000/data";
  private headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8'
  });

  constructor(
    private http: Http,
    private httpClient: HttpClient) { }

  getEmps(): Observable<Array<any>> {
    return this.http.get(this.empsUrl)
      .pipe(
        map(response => {
          console.log(response);
          return response.json();
        })
      );
  }

  addEmp(writer: string, content: string, date: string): Observable<Memo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let emp = { "id": 0, "writer": writer, "content": content, "date": date };

    return this.http.post(this.empsUrl, JSON.stringify(emp), options)

      .pipe(
        map(response => {
          console.log(response);
          return response.json();
        })
      );
  }

  removeEmp(emp): Observable<boolean> {
    const url = `${this.empsUrl}/${emp.id}`;
    return this.http.delete(url, { headers: this.headers })
      .pipe(
        map(response => {
          console.log('>>>>>>')
          console.log(response);
          return true;
        })
      );
  }

}
