import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import { UserComponent } from './user.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { requestOptionsProvider }   from './default-request-options.service';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    RootComponent,
    UserComponent
  ],
  bootstrap: [RootComponent],
  providers: [ requestOptionsProvider ]
})
export class AppModule {}
