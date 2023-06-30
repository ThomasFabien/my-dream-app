import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { USERS } from './users.mock';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{

  url : string = "http://localhost:3000/users";
  users ?: User[];
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<User[]>(this.url).subscribe((response)=>{
      this.users = response;
    });
  }
  addUser(user:User){
    this.http.post<User>(this.url, user).subscribe((response)=>{
      this.users?.push(response);

    })
  }
}
