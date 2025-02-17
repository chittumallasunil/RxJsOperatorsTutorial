import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this._http.get("https://dummyjson.com/users").pipe(
      map((res: any) => res.users.slice(0,3)),
      map((usersList: User[])=>{
        return usersList.map((user: User)=>{
          return {
            id: user.id,
            lastName: user.lastName
          }
        })
      })
    )
  }
}
