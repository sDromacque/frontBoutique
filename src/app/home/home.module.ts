import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, RootComponent } from './home-routing';

import { HomeComponent } from './home/home.component';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    RootComponent,
    HomeComponent
  ],
  bootstrap: [RootComponent],
  providers: []
})
export class HomeModule {}
