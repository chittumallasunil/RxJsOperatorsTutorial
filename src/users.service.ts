import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, from, map, of } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
  ];

  constructor(private _http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this._http.get("https://dummyjson.com/users").pipe(
      map((res: any) => res.users.slice(0,10)),
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

  getFilteredUser(): Observable<any>{
    const user$ = from(this.users);
    const filteredUser$ = user$.pipe(
      filter((user)=>user.age>=30)
    );
    return filteredUser$;
  }
}
