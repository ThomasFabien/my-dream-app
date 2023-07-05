import { Injectable } from "@angular/core";
import { User } from "./user";
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn:'root'})
export class Service {
    constructor(private http: HttpClient){}
    url : string = "http://localhost:3000/users";

    add(user:User){
        return this.http.post<User>(this.url, user);
    }

    init(){
        return this.http.get<User[]>(this.url);
    }
}