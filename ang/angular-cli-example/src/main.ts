import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// bootstrap : 시작하다.
// bootstrapModule(AppModule) : AppModule 모듈을 기동한다.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

