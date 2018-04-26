import { Users } from './../_model/users';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';





@Injectable()
export class UsersService {

  private apiurl = environment.apiUrl;

  constructor(private _http: Http) { }


  getPosts(): Observable<Users[]> {
    return this._http
        .get(this.apiurl + 'employees')
        .map((response: Response) => {
            return <Users[]>response.json();
        })
        .catch(this.handleError);
}

private handleError(error: Response) {
  return Observable.throw(error.statusText);
}


}
