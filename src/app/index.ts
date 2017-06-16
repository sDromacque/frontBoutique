import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {AppComponent} from './containers/App';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
  ],
  declarations: [
    RootComponent,
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
