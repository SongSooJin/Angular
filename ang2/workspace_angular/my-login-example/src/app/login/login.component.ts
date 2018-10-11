import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    id:'user',
    pw:'111'
  };
  errorMessage = '';
  returnUrl: string;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.errorMessage = '';
    alert(JSON.stringify(this.user));
    // than : 프라미스를 리턴
    this.loginService.auth(this.user)
      .then(data => {
        console.log('--------2-------');
        console.log(this.returnUrl);
        console.log(this.router);
        // 사용자가 존재하므로 로그인 처리를 했음을 브라우저가 지원하는 
        // 저장소에 기록한다.
        // localStorage 문자열로밖에 저장을 못함 / 브라우저가 꺼져도 해당정보가 남아있다.
        sessionStorage.setItem('currentUser', JSON.stringify(this.user));
        // 사용자가 원래 가고자 했던 url정보를 사용하여 
        // 화면을 전환시킨다.
        this.router.navigate([this.returnUrl]);
      })
      .catch(error => {
        // this.alertService.error(error);
        console.log('--------3-------');
        this.errorMessage = 'id 또는 pw 가 일치하지 않습니다.';
      });
  }
}
