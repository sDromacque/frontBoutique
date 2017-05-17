import {Component} from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
// import { User } from '../model/user';


export class User {
  constructor(
    public _id: string,
    public name: string,
    public username: string,
    public lastname: string
  ) {}
}

@Component({
  selector: 'fountain-app',
  template: require('./hello.html')
})
export class HelloComponent {
  public users: User[];

  constructor(public http: Http) {
    this.getUsers().subscribe(result => this.users = result);
  }

  getUsers() {
    return this.http
    .get('http://localhost:1337/user')
    .map((res:Response) => res.json());
  }

}
