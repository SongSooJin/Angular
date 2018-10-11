import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p111';
  
  rective(data) {
      alert("from Child Component: " + data.name + ","+ data.telephone);
  }
}
