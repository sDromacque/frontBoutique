import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },

];

export const routing = RouterModule.forRoot(routes);
