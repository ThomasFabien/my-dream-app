import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {  
  
  userForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    avatar: new FormControl('')
  })
  @Output() output = new EventEmitter<User>();
  
  onSubmit() {
    let user: User = this.userForm.value as User;
    console.log(this.userForm.value);
    this.output.emit(user);
  }
}
