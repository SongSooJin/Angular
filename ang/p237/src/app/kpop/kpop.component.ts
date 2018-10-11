import { Component, OnInit } from '@angular/core';
import { KpopHttpService } from './kpop-http.service';
import { Kpop } from './kpop.model';

@Component({
  selector: 'app-kpop',
  templateUrl: './kpop.component.html',
  styleUrls: ['./kpop.component.css']
})
export class KpopComponent implements OnInit {

  idols: Kpop[];

  constructor(private kpopHttpService: KpopHttpService) { }

  ngOnInit() { 
    this.kpopHttpService.getIdols().then(idols => this.idols = idols)
    .catch(err => console.log(err));
   }

}
