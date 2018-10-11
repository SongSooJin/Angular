import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './toway.component.html',
  styleUrls: ['./toway.component.css']
})
export class TowayComponent implements OnInit {

  city: string = "seoul"; 
  // select 박스에 옵션중에서 초기선택으로 지정하고 싶은 값
  cities: Object[] = [
    { han: "서울", eng: "seoul" }, 
    { han: "대전", eng: "daejeon" }, 
    { han: "대구", eng: "daegu" }, 
    { han: "부산", eng: "pusan" }
  ];


  constructor() { }

  ngOnInit() {
  }

}
