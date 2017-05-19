import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, RootComponent } from './users/users-routing.module';

import { HttpModule, JsonpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { UserModule } from './users/users.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    UserModule,
    CoreModule,
    routing
  ],
  declarations: [
  ],
  bootstrap: [RootComponent],

})
export class AppModule {}
