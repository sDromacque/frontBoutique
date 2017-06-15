import 'core-js/client/shim';
import 'zone.js/dist/zone';

import '@angular/common';
import 'rxjs';

import './assets/index.scss';

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/users/users.module';
import {HomeModule} from './app/home/home.module';

declare var process: any;
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
} else {
  Error['stackTraceLimit'] = Infinity; // tslint:disable-line:no-string-literal
  require('zone.js/dist/long-stack-trace-zone'); // tslint:disable-line:no-var-requires
}

platformBrowserDynamic().bootstrapModule(HomeModule);
