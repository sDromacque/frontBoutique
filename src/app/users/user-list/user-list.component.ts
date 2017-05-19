import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
import { User } from '../shared/user';

@Component({
  selector: 'fountain-app',
  providers: [UserListService],
  templateUrl: 'app/users/user-list/user-list.html'
})

export class UserListComponent implements OnInit {
  public errorMessage: string;
  public users: User[];

  constructor(private UserListService : UserListService) {  }

  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this.UserListService
      .getUsers()
      .then(
        users => this.users = users,
        error =>  this.errorMessage = <any>error);
  }



}
