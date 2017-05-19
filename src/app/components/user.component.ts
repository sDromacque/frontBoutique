import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'fountain-app',
  providers: [UserService],
  template: `
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>Object Id</th>
    <th>Name</th>
    </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of users" >
      <td>{{user._id}}</td>
    <td>{{user.name}}</td>
    </tr>
    </tbody>
    </table>
  `
})

export class UserComponent implements OnInit {
  public errorMessage: string;
  public users: User[];

  constructor(private userService : UserService) {  }

  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this.userService
      .getUsers()
      .then(
        users => this.users = users,
        error =>  this.errorMessage = <any>error);
  }



}
