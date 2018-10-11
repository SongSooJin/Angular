import { NgModule, ModuleWithProviders, SkipSelf,Optional  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from './title.component';

import { UserService, UserServiceConfig } from './user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent],
  providers: [UserService],
  exports: [TitleComponent] // 서비스는 명시적 익스포트 설정 대상이 아니다. 자동으로 제공된다. 
})
export class CoreModule {

  // 부모 주입기에 CoreModule이 존재하는지 체크하기 위해서 @SkipSelf 를 사용합니다.   
  // @Optional 데코레이터는 객체가 있으면 전달하고 없으면 null을 전달하게 합니다.   
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    console.log('CoreModule # constructor() called.');
    
    if (parentModule) {
      // 코어 모듈은 전체 모듈이 공유해서 언제나 사용하는 기능을 가진 모듈입니다.      
      // 코어 모듈은 하나만 존재하면 됩니다. 코어 모듈은 루트 모듈이 임포트해서 사용하는 방식입니다.       
      throw new Error('CoreModule이 이미 로딩되었습니다.');
    }
  }

  // { nickName: 'Happy' }이 UserServiceConfig받음 
  // 서비스 객체 상태로 가지게 된다.
  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    // CoreModule 모듈을 리턴해야 한다.
    return {
      ngModule: CoreModule,
      providers: [
        { provide: UserServiceConfig, useValue: config }
      ]
    };
    // CoreModule 자료형의 객체를 사용할 때 대신, providers가 가진 값을 사용한다.
  };
}
// exports: [TitleComponent]
// 코어모듈이 가지고 있는 TitleComponent 컴포넌트를 이 모듈을 임포트하는 모듈에서
// 직접 selector를 설정하여 사용할 수 있게 만든다.