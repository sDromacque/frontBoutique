import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, RootComponent } from './users-routing.module';

import { UserListComponent } from './user-list/user-list.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { requestOptionsProvider }   from './shared/default-request-options.service';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    RootComponent,
    UserListComponent
  ],
  bootstrap: [RootComponent],
  providers: [ requestOptionsProvider ]
})
export class AppModule {}