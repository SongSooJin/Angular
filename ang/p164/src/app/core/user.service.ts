import { Injectable, Optional } from '@angular/core';

export class UserServiceConfig {
  nickName = '';
}


@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class UserService {

  private _nickName = '';

  // @Optional
  // 해당 파라미터는 반드시 주입하지 않아도 괜찮다는 뜻 이다.
  // 서비스가 생성자 주입을 받고자 한다면 @Injectable 설정이 필수가 된다.
  constructor(@Optional() config: UserServiceConfig) {
    if (config) {
      this._nickName = config.nickName;
    }
  }


  get nickName() {
    return this._nickName;
  }

} 
