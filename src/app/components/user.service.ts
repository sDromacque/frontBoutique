import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { User } from './user';

@Injectable()
export class UserService{

  constructor(private http: Http){}

  public urlApiUser = 'http://localhost:1337/user';

  getUsers(): Promise<User[]> {
    return this.http
      .get(this.urlApiUser)
      .toPromise()
      .then( response => response.json())
      .catch(this.handleError)
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(error);
    return Promise.reject(errMsg);
  }
}
