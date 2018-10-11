import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipe',
  templateUrl: './built-in-pipe.component.html',
  styleUrls: ['./built-in-pipe.component.css']
})
export class BuiltInPipeComponent implements OnInit {

  strData = "20180911";
  
  str = "abcDEF";
  num = 123456.123456;
  date = new Date();
  money = 1000000; j
  json = {
  info: { name: '사용자 1', age: 20 },
  list: [
    { name: '사용자 1', age: 20 },
    { name: '사용자 2', age: 20 }
      ]
  };

  items = ['AA', 'BB', 'CC', 'DD'];



  constructor() { }

  ngOnInit() {
  }

}
