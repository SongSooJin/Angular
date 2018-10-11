import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  // templateUrl: './contact.component.html',
template:`<h3>
   contact.component.html
</h3> `,
  // styleUrls: ['./contact.component.css']
  styles:[
  `h3 {
    border: 1px solid gray;
    height: 100px;
    text-align: center;
    background-color: blue;
  }`
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
