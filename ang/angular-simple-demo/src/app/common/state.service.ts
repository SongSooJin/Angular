import { Injectable } from '@angular/core';

// 컴포넌트 다수에서 동시에 사용해야 하는 로직이 있다면
// 그 로직을 서비스로 분리한 다음 필요할 때 요청해서 사용하는 것이
// 훨씬유리하고 편리하다.
// @Injectable() 파라미터를 주지 않고도 쓸 수 있으므로
// 이 데코레이션은 생략이 가능하다.
@Injectable()
export class StateService {
  private message = 'Hello Message';

  getMessage(): string {
    return this.message;
  };

  setMessage(message: string): void {
    this.message = message;
  };
}
