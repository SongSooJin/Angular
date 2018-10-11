import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subject: string = "I am HomeComponent ";
  constructor() { 
  console.log("1. HomeComponent # constructor");
  }

  // Life Cycle Hook Method:
  // 컴포넌트가 화면에 표시되기 전에 초기작업을 위한
  // 라이프사이클 메소드중에 하나이다.
  ngOnInit() {
  console.log("2. HomeComponent # ngOnInit");
  }

}
