import { Component, OnInit } from '@angular/core';
import { CounterBridgeService } from '../counter.service';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.css']
})
export class CounterControlComponent implements OnInit {

  constructor(private counterBridgeService: CounterBridgeService) { }

  ngOnInit() {
  }
  
  // 이벤틀,청취해서 서비스에게 이벤트 종류를 보낸다.
  increment() {
    // alert('CounterDisplayComponent 의 count 값을 +1 한다.');
    this.counterBridgeService.incremnet();
  }

  decrement() {
    // alert('CounterDisplayComponent 의 count 값을 -1 한다.');
    this.counterBridgeService.decrement();
  }
}
