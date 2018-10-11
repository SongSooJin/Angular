import { Routes } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactDataComponent } from './contact-data/contact-data.component';

import { ContactResolveGuardService } from './guard/contact-resolve-guard.service';

// contact/:id
// contact/위치보유자
// 위치 보유자 위치에 어떠한 문자열이 있다면 그 문자열을 id=문자열 형태로 처리합니다.
// contact/10 ==> id=10
// contact/x ==> id=x
// contact/a20 ==> id=a20
// 내가 원한다면 url자리를 변수로 할수있다.

export const AppRoutes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contact/:id', component: ContactDetailComponent },
  { path: 'info/:id', component: ContactInfoComponent,
    // ContactInfoComponent 컴포넌트를 처리하기 위해 
    // infoService를 로직을 기동하고 그결과를 "yyy=결과" 형태로
    // ContactInfoComponent 에게 전달한다.
    
    // 리졸브 로직 처리에 시간이 오래 걸리면 컴포넌트가 보이지 않는 상태가 
    // 오랜동안 유지 된다. 매우 안좋은 방법이다.
    // 리졸브 가드로직에서 시간이 오래 걸리는 처리를 하지 말아야 한다.
    resolve: {yyy: 'infoService'}
  },
  { path: 'data/:id', component: ContactDataComponent,
    resolve: { contact: ContactResolveGuardService }
  },
];