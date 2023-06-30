import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss']
})
export class UserRowComponent {

  @Input() user!: User;

}
