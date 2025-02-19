import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../model/user.model';
import { JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [JsonPipe, NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: User[] = []
  filteredUsers: any;

  constructor(private usersService: UsersService){}

  ngOnInit(){
    this.usersService.getUsers().subscribe(res=>{
      this.users = res;
    });

    this.usersService.getFilteredUser().subscribe(res=>{
      this.filteredUsers = res;
    })
  }

}
