import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Service } from './user-list.service';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{

  //url : string = "http://localhost:3000/users";
  users ?: User[];
  constructor(private service: Service){}
  ngOnInit(): void {
    this.service.init().subscribe((response)=>{
      this.users = response;
    });
  }
  addUser(user:User){
    this.service.add(user).subscribe((response)=>{
      this.users?.push(response);

    })
  }
}
